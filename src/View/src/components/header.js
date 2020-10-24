import React from 'react';
import styled from '@emotion/styled';
import IconControl from './IconControl';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const StyledHeader = styled.header`
  width: 100%;
  height: 12vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  position: relative;

  control & > a {
    position: absolute;
    right: 0;
  }
  span {
    margin: 0 20px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <span>Logo</span>
      <IconControl Icon={FaSearch} />
      <IconControl Icon={FaUser} />
    </StyledHeader>
  );
}

export default Header;
