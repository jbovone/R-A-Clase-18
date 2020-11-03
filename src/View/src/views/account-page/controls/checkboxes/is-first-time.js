import React from 'react';
import Checkbox from '../../../../components/forms/controls/checkbox';
import styled from '@emotion/styled';

const CheckboxStyle = styled.div({
  minHeight: '30px',
  display: 'flex',
  marginBottom: '20px',
  alignItems: 'center',
  '& >*': {
    margin: '0 5px',
  },
});

function FirstTime({ setCheck, check }) {
  return (
    <CheckboxStyle>
      It's Your first Time ? <Checkbox setCheck={setCheck} check={check} />
    </CheckboxStyle>
  );
}

export default FirstTime;
