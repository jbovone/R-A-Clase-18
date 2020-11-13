import React from 'react';
import Logout from './menu-items/Logout';
import Login from './menu-items/Login';
import AccountSettings from './menu-items/Account-settings';
import Close from './menu-items/Close-menu';
import YourBookings from './menu-items/your-bookings';

function HeaderDropDownMenu({ setShow, login, logout, category }) {
  return (
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {login ? <Logout logout={logout} /> : <Login />}
        <hr className="dropdown-divider" />
        {login && <AccountSettings />}
        {category === 1 && <YourBookings />}
        <Close setShow={setShow} />
      </div>
    </div>
  );
}

export default HeaderDropDownMenu;
