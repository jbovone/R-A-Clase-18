/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import background from '../assets/streets.jpg';
import { FaCheck } from 'react-icons/fa';
import { connect } from 'react-redux';
import structural from '../constants/viewSkeleton';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url("${background}") no-repeat`,
  backgroundSize: 'contain',
  '&>li': {
    listStyle: 'none',
  },
});

function LandingPage() {
  return (
    <main css={lay}>
      <ol>
        <li style={{ fontsize: '5px' }}>
          <FaCheck />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ea eligendi repellat
          exercitationem!.
        </li>
        <li>
          <FaCheck />
          Et, necessitatibus velit, pariatur nesciunt odit fugit corporis vel possimus architecto vero eos cum
          atque at cupiditate
        </li>
        <li>
          <FaCheck />
          Et, necessitatibus velit, pariatur nesciunt odit fugit corporis vel possimus architecto vero eos cum
          atque at cupiditate
        </li>
        <li>
          <FaCheck />
          Et, necessitatibus velit, pariatur nesciunt odit fugit corporis vel possimus architecto vero eos cum
          atque at cupiditate
        </li>
      </ol>
    </main>
  );
}

export default LandingPage; //connect()();
