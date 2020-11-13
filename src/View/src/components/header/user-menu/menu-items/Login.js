import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <NavLink
      className={'dropdown-item'}
      to="/account"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red',
      }}
    >
      <div>Login / Register</div>
    </NavLink>
  );
}

export default Login;
