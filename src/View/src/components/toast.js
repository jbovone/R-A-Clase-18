import React from 'react';
import styled from '@emotion/styled';

const StyledToast = styled.div({});

const Toast = ({ message, timmer }) => {
  return (
    <div class="notification is-success is-light">
      <button class="delete"></button>
      {message}
    </div>
  );
};

export default Toast;
