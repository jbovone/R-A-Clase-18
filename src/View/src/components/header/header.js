import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Logo from '../logo';
import colors from '../../constants/colors';
import driver from '../../assets/driver 03.jpg';
import HeaderDropDownButton from './HeaderDropDownButton';
import HeaderDropdownMenu from './HeaderDropdownmenu';
import { logoutAction } from '../../actions/authActions';

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
  button: {
    margin: '10px',
    background: 'transparent',
    border: 'none',
    color: 'red',
  },

  '.dropdown': {
    margin: '5px 10px',
  },
});

function Header({ login, logoutAction }) {
  const [show, setShow] = useState(false);
  return (
    <StyledHeader>
      <Logo />
      <div className={show ? 'dropdown is-active' : 'dropdown'} onClickCapture={() => setShow(!show)}>
        <HeaderDropDownButton />
        <HeaderDropdownMenu setShow={setShow} login={login.login} logout={logoutAction} />
      </div>
    </StyledHeader>
  );
}
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, { logoutAction })(Header);
