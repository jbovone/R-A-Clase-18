/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import DatePick from './bookings-form/step-1-pick the dates';
import CarPick from './bookings-form/step-2-pick-a-car';
import { connect } from 'react-redux';
import structural from '../../constants/viewSkeleton';
import getCarsAction from '../../actions/getCarsAction';
import createBookingAction from '../../actions/createBookingAction';
import FormControls from './bookings-form/form-controls';
import Ticket from './ticket';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
});

const BookingsPage = ({ getCarsAction, newBookingAccion, automobiles, userId, createBookingAction }) => {
  const [step, setStep] = useState(1);
  const [pickedDates, setPickedDates] = useState([]);
  const [selectedCar, setSelectedCar] = useState({ id: null });
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
    if (step === 2) {
      setBookingData({ ...bookingData, carId: selectedCar.id });
    }
  }

  return (
    <main css={lay}>
      {step === 1 && <DatePick {...{ pickedDates, setPickedDates }} />}
      {step === 2 && <CarPick {...{ ...automobiles, setSelectedCar, id: selectedCar.id }} />}
      {/**
       * 3. check if user registration complete.
       * 4. pipe to a payment option: paypal etc.
       * 4. temporarily i will provide a dispatch to the sv /newbooking route.
       */}
      <Ticket dates={pickedDates} car={selectedCar} />

      {step === 3 && <button onSubmit={createBookingAction} />}

      <FormControls
        actions={{ handleStep, setStep }}
        enablers={{ bookingData, pickedDates, step, selectedCar }}
      />
    </main>
  );
};

const mapStateToProps = state => ({
  automobiles: state.automobiles,
  userId: state.login.user.id,
});

export default connect(mapStateToProps, { getCarsAction, createBookingAction })(BookingsPage);
