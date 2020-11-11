import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

const StyledDropdownButton = styled.div({
  button: {
    display: 'flex',
    flexDirection: 'column',
    '&> svg': {
      height: '1.4rem',
      width: '1.4rem',
      fill: 'red',
    },
    textDecoration: 'none',
    border: 'none',
    '&::selected': {
      border: 'none',
      color: 'red',
    },
  },
});

function DropDownButton({ user }) {
  const initialState = 'Account';

  const [logged, setLogged] = useState(initialState);
  useEffect(() => {
    return () => {
      user ? setLogged(user.username) : setLogged(initialState);
    };
  }, [user]);

  return (
    <StyledDropdownButton className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <div>
          <FaUser />
          <FaAngleDown />
        </div>
        <div>{logged}</div>
      </button>
    </StyledDropdownButton>
  );
}

export default DropDownButton;
