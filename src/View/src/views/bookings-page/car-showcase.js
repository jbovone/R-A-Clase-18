import React from 'react';
import styled from '@emotion/styled';
import Checkbox from '../../components/forms/controls/checkbox';
import image from '../../assets/128x128.png';

const Car = styled.article({
  position: 'relative',
  span: {
    fontsize: '15px',
    color: 'green',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    span: {
      margin: '0 5px',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  '.content p': {
    textIndent: '9px',
  },
  '.price': {
    position: 'absolute',
    left: '10px',
    bottom: '10px',
  },
});

function CarShowcase({ car, selected, onSelect }) {
  return (
    <Car className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt="car" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <strong>
            {car.brand} {car.model}
          </strong>
          <p>Passengers: {car.passengers}</p>
          <p>Gears: {car.gears}</p>
          <p>Color: {car.color}</p>
        </div>
        <nav>
          <div className="price">
            <strong>Price:</strong> <span>{car.rentPrice}</span>/day
          </div>
          <Checkbox check={selected} setCheck={onSelect} />
          <span>Rent!</span>
        </nav>
      </div>
    </Car>
  );
}

export default CarShowcase;
