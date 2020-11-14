import React from 'react';
import { NavLink } from 'react-router-dom';

function YourBookingsLink() {
  return (
    <NavLink
      className={'dropdown-item'}
      to="/account-settings"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red',
      }}
    >
      <div>Your Account Settings</div>
    </NavLink>
  );
}

export default YourBookingsLink;
