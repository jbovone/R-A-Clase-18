import React from 'react';
import DayPicker from 'react-day-picker';
import styled from '@emotion/styled';
import 'react-day-picker/lib/style.css';

const PickerForm = styled.main({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  h2: {
    margin: '10px',
    alignSelf: 'flex-start',
  },
});

export default function DatePicker({ pickedDates, setPickedDates }) {
  function handleSelectedDays(date, { selected, disabled }) {
    if (disabled) return;

    if (selected) {
      return setPickedDates(pickedDates.filter(item => item.toString() !== date.toString()));
    }
    if (pickedDates.length <= 1) {
      setPickedDates([...pickedDates, date]);
    }
  }
  return (
    <PickerForm>
      <h2>1. Select the Date Range.</h2>
      <DayPicker
        disabledDays={{ before: new Date() }}
        onDayClick={handleSelectedDays}
        initialMonth={new Date()}
        selectedDays={pickedDates}
      />
    </PickerForm>
  );
}
