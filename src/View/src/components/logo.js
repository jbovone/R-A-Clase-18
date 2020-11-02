import React from 'react';
import styled from '@emotion/styled';
import color from '../constants/colors.js';

const Stamp = styled.div({
  fontFamily: `'Wendy One', sans-serif`,
  width: '80px',
  span: {
    color: 'red',
    margin: '0px',
  },
  alignSelf: 'flex-start',
  opacity: '0.9',
  padding: '5px !important',
  margin: '8px !important',
  borderRadius: '5px',
  background: color.background,
});

function Logo() {
  return (
    <Stamp>
      Rent a <span>Wheel</span>.com
    </Stamp>
  );
}

export default Logo;
