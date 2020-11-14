/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import Signup from './controls/forms/register-form';
import Login from './controls/forms/login-form';
//import background from '../assets/streets.jpg';
import { connect } from 'react-redux';
import loginAction from '../../actions/authActions';
import registerAction from '../../actions/createUserAction';
import structural from '../../constants/viewSkeleton';
import FirstTime from './controls/checkboxes/is-first-time';
import { Redirect } from 'react-router-dom';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  //background: `url("${background}") no-repeat`,
  backgroundSize: 'contain',
});

function LoginPage({ loginAction, registerAction, login, register }) {
  const [isFirstTime, setIsFirstTime] = useState(false);
  return (
    <main css={lay}>
      {isFirstTime ? (
        <Signup onSubmit={registerAction} data={register} />
      ) : (
        <Login onSubmit={loginAction} data={login} />
      )}
      <FirstTime setCheck={setIsFirstTime} check={isFirstTime} />
      {login.user.id && <span className="help is-success">Welcome {login.user.username}</span>}
      {login.user.id && <Redirect to="/bookings" />}
    </main>
  );
}

const mapStateToProps = state => ({ login: state.login, register: state.createUser });

export default connect(mapStateToProps, { loginAction, registerAction })(LoginPage);
