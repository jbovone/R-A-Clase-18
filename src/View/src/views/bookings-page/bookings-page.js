/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import CarPick from './bookings-form/step-1-pick-a-car';
import DatePick from './bookings-form/step-2-pick the dates';
import { connect } from 'react-redux';
import structural from '../../constants/viewSkeleton';
import getCarsAction from '../../actions/getCarsAction';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
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

const BookingsPage = ({ login, getCarsAction, automobiles }) => {
  const [step, setStep] = useState(1);
  getCarsAction();
  const { cars, error, loading } = automobiles;
  return (
    <main css={lay}>
      {step === 1 && <CarPick loading={loading} cars={cars} />}
      {step === 2 && <DatePick />}
      {/**
       * 3. check if user registration complete.
       * 4. pipe to a payment option: paypal etc.
       */}
      <div className="form-controls">
        <button
          className="btn button is-link"
          onClick={() => setStep(step => step - 1)}
          disabled={Boolean(step <= 1)}
        >
          Previous
        </button>
        <button
          className="btn button is-link"
          onClick={() => setStep(step => step + 1)}
          disabled={Boolean(step >= 2)}
        >
          Next
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  automobiles: state.automobiles,
  login: state.login,
  register: state.createUser,
});

export default connect(mapStateToProps, { getCarsAction })(BookingsPage);
