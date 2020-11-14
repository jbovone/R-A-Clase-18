import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Logo from '../logo';
import colors from '../../constants/colors';
import driver from '../../assets/driver 03.jpg';
import DropdownButton from './user-menu/dropdown-button';
import DropdownMenu from './user-menu/Dropdown-menu';
import { logoutAction } from '../../actions/authActions';
import PropTypes from 'prop-types';

const StyledHeader = styled.header({
  height: '20vh',
  background: colors.background,
  fontSize: '1rem',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundImage: `url('${driver}')`,
  backgroundSize: 'cover',
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

function Header({ loginState, logoutAction }) {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    category: 0,
  });

  useEffect(() => {
    setUserData({ ...loginState.user });
    setLogin(loginState.login);
  }, [loginState]);

  return (
    <StyledHeader>
      <Logo />
      <div className={show ? 'dropdown is-active' : 'dropdown'} onClickCapture={() => setShow(!show)}>
        <DropdownButton user={userData.username} />
        <DropdownMenu setShow={setShow} login={login} logout={logoutAction} category={userData.category} />
      </div>
    </StyledHeader>
  );
}
const mapStateToProps = state => ({ loginState: state.login });
export default connect(mapStateToProps, { logoutAction })(Header);

Header.propTypes = {
  loginState: PropTypes.shape({
    login: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, false]),
    user: PropTypes.oneOfType(
      PropTypes.shape({
        username: PropTypes.string,
        category: PropTypes.number,
      }),
      null
    ),
  }),
  logoutAction: PropTypes.func.isRequired,
};
