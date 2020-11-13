import React from 'react';
import styled from '@emotion/styled';
import color from '../../constants/colors';

const StyledTicket = styled.section({
  width: '75%',
  minHeight: '140px',
  margin: '15px',
  p: {
    fontWeight: 'bold',
  },
  div: {
    textIndent: '8px',
  },
  '.dates': {
    textIndent: '14px',
  },
});

function Ticket({ dates, car }) {
  console.log(dates, 'in tickets');
  return (
    <StyledTicket className="notification">
      <p>-Your resume:</p>
      <div>-You need a rent for {setDays(dates)} Days</div>
      <div>
        -Dates:
        {dates.map((date, i) => (
          <div className="dates" key={date}>
            {i === 0 && '-From: '}
            {i === 1 && '-To: '}
            {formatDate(date)}
          </div>
        ))}
      </div>
      {car.id && (
        <div>
          -You want to rent a {car.brand} {car.model} at {car.rentPrice}/day
        </div>
      )}
      {car.id && <div>-Your total payment would be ${car.rentPrice * setDays(dates)}</div>}
    </StyledTicket>
  );
}

function setDays(dates) {
  try {
    const assortedDates = dates.sort((a, b) => a.getTime() - b.getTime());
    return fromMsecToDays(assortedDates[1].getTime()) - fromMsecToDays(assortedDates[0].getTime());
  } catch (error) {
    return 0;
  }
  function fromMsecToDays(date) {
    return date / 1000 / 60 / 60 / 24;
  }
}

function formatDate(date) {
  return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
}

export default Ticket;
