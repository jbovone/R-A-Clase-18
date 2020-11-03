import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import Logo from './logo';
import colors from '../constants/colors';
import driver from '../assets/driver 03.jpg';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header({
  height: '20vh',
  background: colors.background,
  fontSize: '1rem',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundImage: `url('${driver}')`,
  backgroundSize: '90%',
  backgroundPosition: '90% 45%',
  backgroundRepeat: 'no-repeat',
  alignItems: 'flex-start',
  div: {
    display: 'flex',
    margin: '7px',
  },
  a: {
    textDecoration: 'none',
    color: 'white',
    margin: '5px',
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'column',
    '> svg': {
      margin: 'auto',
      height: '1.2rem',
      width: '1.2rem',
      fill: 'red',
    },
  },
});

function Header({ login }) {
  return (
    <StyledHeader>
      <Logo>Lend me a Wheel.Com</Logo>
      <div>
        {!login ? (
          <NavLink
            to="/account"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <FaUserPlus />
            <div>Account</div>
          </NavLink>
        ) : (
          <NavLink
            to="/usercp"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <FaUser />
            <div>User Panel</div>
          </NavLink>
        )}
      </div>
    </StyledHeader>
  );
}
const mapStateToProps = state => ({ login: state.login.login });
export default connect(mapStateToProps)(Header);
