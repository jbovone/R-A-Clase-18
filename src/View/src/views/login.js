/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Signup from '../components/forms/login';
import background from '../assets/streets.jpg';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';
import registerAction from '../actions/createUserAction';
import structural from '../constants/viewSkeleton';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //background: `url("${background}") no-repeat`,
  backgroundSize: 'contain',
});

function LoginPage({ loginAction, registerAction, login }) {
  return (
    <main css={lay}>
      <Signup />
    </main>
  );
}

const mapStateToProps = state => ({ login: state.login.login });

export default connect(mapStateToProps, { loginAction, registerAction })(LoginPage);
