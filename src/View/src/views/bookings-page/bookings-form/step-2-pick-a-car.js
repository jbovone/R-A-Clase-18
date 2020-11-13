import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Car from '../car-showcase';
import 'react-day-picker/lib/style.css';
import Loading from '../../../components/loading';

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

export default function CarMedia({ cars, setSelectedCar, loading, id }) {
  const [selected, setSelected] = useState(() => {
    let state = Array.from(cars).fill(false);
    console.log('id, ID', id);
    if (id) state[id - 1] = true;
    return state;
  });

  function handleSelection() {
    let newState = Array.from(cars).fill(false);
    newState[this] = !selected[this];
    setSelected(newState);
    console.log(cars[this], 'SELECTED');
    setSelectedCar(cars[this]);
  }
  return (
    <CarPicker>
      <h2>2. Select one of our Cars:</h2>
      <div className="box">
        {loading ? (
          <Loading />
        ) : (
          cars.map((car, i) => <Car car={car} selected={selected[i]} onSelect={handleSelection.bind(i)} />)
        )}
      </div>
    </CarPicker>
  );
}
