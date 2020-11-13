/** @jsx jsx */
import react from 'react';
import { css, jsx } from '@emotion/core';
import { FaCheck } from 'react-icons/fa';

const style = css({});

function UserShowcase({ user }) {
  return (
    <ol css={style}>
      {Object.entries(user).map(([key, value]) => (
        <li>{key + ': ' + value}</li>
      ))}
    </ol>
  );
}

export default UserShowcase;
