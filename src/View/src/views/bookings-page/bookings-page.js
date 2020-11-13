/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import DatePick from './bookings-form/step-1-pick the dates';
import CarPick from './bookings-form/step-2-pick-a-car';
import { connect } from 'react-redux';
import structural from '../../constants/viewSkeleton';
import getCarsAction from '../../actions/getCarsAction';
import Ticket from './ticket';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  '.form-controls': {
    display: 'flex',
    width: '80%',
    margin: '10px 0',
    '&>*': {
      flex: 1,
      margin: '5px',
    },
  },
});

const BookingsPage = ({ login, getCarsAction, automobiles, userId }) => {
  const [step, setStep] = useState(1);
  const [pickedDates, setPickedDates] = useState([]);
  const [bookingData, setBookingData] = useState({
    from: null,
    to: null,
    carId: 0,
    userId: userId,
  });

  useEffect(() => {
    const { cars, error, loading } = automobiles;
    if (!cars.length && !error && loading === false) {
      getCarsAction();
    }
  }, [automobiles, getCarsAction]);

  function handleStep(step) {
    if (step === 1) {
      setBookingData({ ...bookingData, from: pickedDates[0], to: pickedDates[1] });
    }
    console.log(bookingData);
  }
  function handleBtnNextDisabled() {
    if (step === 1) return pickedDates.length < 2;
    if (step === 2) return !bookingData.carId;
  }
  return (
    <main css={lay}>
      {step === 1 && <DatePick {...{ pickedDates, setPickedDates }} />}
      {step === 2 && <CarPick {...automobiles} />}
      {/**
       * 3. check if user registration complete.
       * 4. pipe to a payment option: paypal etc.
       */}
      <Ticket dates={pickedDates} />
      <div className="form-controls">
        {step !== 1 && (
          <button
            className="btn button is-link"
            onClick={() => {
              handleStep(step);
              setStep(step => step - 1);
            }}
          >
            Previous
          </button>
        )}
        <button
          className="btn button is-link"
          onClick={() => {
            handleStep(step);
            setStep(step => step + 1);
          }}
          disabled={handleBtnNextDisabled()}
        >
          Next
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  automobiles: state.automobiles,
  userId: state.login.user.id,
});

export default connect(mapStateToProps, { getCarsAction })(BookingsPage);
