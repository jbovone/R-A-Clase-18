import React from 'react';

const Close = ({ setShow }) => {
  return (
    <div className="dropdown-item" onClick={() => setShow(false)}>
      Close
    </div>
  );
};

export default Close;
