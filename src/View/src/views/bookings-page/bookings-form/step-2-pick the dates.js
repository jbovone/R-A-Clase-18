import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import styled from '@emotion/styled';
import 'react-day-picker/lib/style.css';

const PickerForm = styled.main({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default function DatePicker() {
  const [selectedDays, setSelectedDays] = useState([]);

  function handleSelectedDays(e) {
    if (isDatePicked(e)) {
      return setSelectedDays(selectedDays.filter(item => item.toString() !== e.toString()));
    }
    if (selectedDays.length <= 1) {
      setSelectedDays([...selectedDays, e]);
    }
  }
  function isDatePicked(e) {
    return selectedDays.some(item => item.toString() === e.toString());
  }
  function setDays() {
    try {
      const assortedDates = selectedDays.sort((a, b) => a.getTime() - b.getTime());
      return fromMsecToDays(assortedDates[1].getTime()) - fromMsecToDays(assortedDates[0].getTime());
    } catch (error) {
      return 0;
    }
  }
  function fromMsecToDays(date) {
    return date / 1000 / 60 / 60 / 24;
  }
  return (
    <PickerForm>
      <h1>2. Pick both the rantal day and the return date:</h1>
      <DayPicker onDayClick={handleSelectedDays} initialMonth={new Date()} selectedDays={selectedDays} />
      <h1>Resume</h1>
      <div>{setDays()}</div>
    </PickerForm>
  );
}
