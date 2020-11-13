import React, { useState } from 'react';

function Logout({ logout }) {
  return (
    <div className="dropdown-item" onClick={() => logout()}>
      Logout
    </div>
  );
}

export default Logout;
