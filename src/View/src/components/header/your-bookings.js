import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import YourBookings from './your-bookings';

const YourBookings = ({ logout, category }) => {
  return (
    <Fragment>
      <div className="dropdown-item" onClick={() => logout()}>
        Logout
      </div>
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
      {category === 1 && <YourBookings />}
      <hr className="dropdown-divider" />
    </Fragment>
  );
};

export default YourBookings;
