import React from 'react';
import styled from '@emotion/styled';

const StyledControls = styled.div({
  display: 'flex',
  width: '80%',
  margin: '10px 0',
  '&>*': {
    flex: 1,
    margin: '5px',
  },
});

function FormControls({ actions, enablers }) {
  const { handleStep, setStep } = actions;
  const { bookingData, pickedDates, step, selectedCar } = enablers;

  function handleBtnNextDisabled() {
    if (step === 1) return pickedDates.length < 2;
    if (step === 2) return !selectedCar.id;
  }

  return (
    <StyledControls>
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
    </StyledControls>
  );
}

export default FormControls;
