import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHeart, FaCar } from 'react-icons/fa';
import colors from '../constants/colors';

function Nav() {
  const StyledNav = styled.nav({
    background: colors.background,
    color: 'white',
    fontSize: '1rem',

    ul: {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexFlow: 'column no-wrap',
      listStyle: 'none',
      fontWeight: 600,
    },
    li: {
      margin: '3px',
    },
    a: {
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
    },

    svg: {
      margin: '0 3px',
    },
    selected: {
      color: 'white',
    },
  });

  return (
    <StyledNav aria-label="breadcrumbs">
      <ul>
        <li>
          <NavLink
            to="/home"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <FaHome /> <div>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              color: 'pink',
            }}
          >
            <FaHeart />
            <div> Why us?</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            activeStyle={{
              color: 'red',
            }}
          >
            <FaCar /> Bookings
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
