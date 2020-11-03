import React, { useState, forwardRef } from 'react';
import styled from '@emotion/styled';

const Checkbox = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border: solid 1px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    div {
        height: 6px;
        width: 18px;
        background: rgb(75, 126, 25);
        transform: rotate(-45deg) translateX(1px)  translateY(2px);
        
        &::after {
          background: rgb(75, 126, 25);
          display: block;
          height: 5px;
          width: 9px;
          content: "";
          transform: rotate(90deg) translateX(-5px) translateY(2px);
        }
      }
  }
`;
const StyledCheckbox = ({ setCheck, check }) => {
  return <Checkbox onClick={() => setCheck(check => !check)}>{check && <div />}</Checkbox>;
};
export default StyledCheckbox;
