import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Car from './car-showcase';
import 'react-day-picker/lib/style.css';
import Loading from '../../../components/loading';

const cars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Countach',
    year: 'Sun Feb 25 2018 16:29:36 GMT-0300 (GMT-03:00)',
    miles: 99296,
    color: 'green',
    passengers: 2,
    gears: 'manual',
    status: 'in-repairs',
    createdAt: '2020-11-10T21:42:18.985Z',
    updatedAt: '2020-11-10T21:42:18.985Z',
  },
  {
    id: 2,
    brand: 'Mini',
    model: 'XTS',
    year: 'Mon Jan 25 2010 03:33:44 GMT-0300 (GMT-03:00)',
    miles: 38533,
    color: 'black',
    passengers: 4,
    gears: 'auto',
    status: 'in-repairs',
    createdAt: '2020-11-10T21:42:19.002Z',
    updatedAt: '2020-11-10T21:42:19.002Z',
  },
  {
    id: 3,
    brand: 'Bugatti',
    model: 'Malibu',
    year: 'Sun Jun 21 2015 01:45:37 GMT-0300 (GMT-03:00)',
    miles: 127401,
    color: 'orange',
    passengers: 4,
    gears: 'auto',
    status: 'in-repairs',
    createdAt: '2020-11-10T21:42:19.021Z',
    updatedAt: '2020-11-10T21:42:19.021Z',
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'Mustang',
    year: 'Wed Dec 13 2006 10:48:49 GMT-0300 (GMT-03:00)',
    miles: 160617,
    color: 'red',
    passengers: 4,
    gears: 'manual',
    status: 'in-repairs',
    createdAt: '2020-11-10T21:42:19.057Z',
    updatedAt: '2020-11-10T21:42:19.057Z',
  },
];
const CarPicker = styled.main({
  height: '100%',
  width: '90%',
  '.media-content': {
    margin: '10px',
  },
  '.content p': {
    margin: '0px',
  },
  h2: {
    margin: '20px',
  },
});
export default function CarMedia({ loading }) {
  const [selected, setSelected] = useState(Array.from(cars).fill(false));
  function handleSelection() {
    let newState = Array.from(cars).fill(false);
    newState[this] = !selected[this];
    setSelected(newState);
  }
  return (
    <CarPicker>
      <h2>2. Select one of our Cars:</h2>
      <div className="box">
        {loading ? (
          <Loading />
        ) : (
          cars &&
          cars.map((car, i) => <Car car={car} selected={selected[i]} onSelect={handleSelection.bind(i)} />)
        )}
      </div>
    </CarPicker>
  );
}
