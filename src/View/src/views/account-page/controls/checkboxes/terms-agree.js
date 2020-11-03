import React, { useState } from 'react';
import Checkbox from '../../../../components/forms/controls/checkbox';
import Modal from '../../../../components/modal/modal';
import { terms } from '../../terms-conditions';
import styled from '@emotion/styled';

const CheckboxStyle = styled.div({
  minHeight: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  '& >*': {
    margin: '0 5px',
  },
});

function TermsAgree({ setCheck, check }) {
  const [open, setOpen] = useState(false);
  return (
    <CheckboxStyle>
      I agree the{' '}
      <span className="terms" onClick={() => setOpen(true)}>
        {' '}
        Terms of The Service
      </span>
      <Checkbox setCheck={setCheck} check={check} />
      {open && <Modal modalOpen={setOpen} children={terms} />}
    </CheckboxStyle>
  );
}

export default TermsAgree;
