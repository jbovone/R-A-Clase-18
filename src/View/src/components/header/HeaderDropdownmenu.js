import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HeaderDropDownMenu({ setShow, login, logout }) {
  console.log(login, 'LOGIN');
  console.log(document.cookie, 'COOKIE');

  return (
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {login ? (
          <div className="dropdown-item" onClick={() => logout()}>
            Logout
          </div>
        ) : (
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
        )}
        <hr className="dropdown-divider" />
        <div className="dropdown-item" onClick={() => setShow(false)}>
          Close
        </div>
      </div>
    </div>
  );
}

export default HeaderDropDownMenu;
