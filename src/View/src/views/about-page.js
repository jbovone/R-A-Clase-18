/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
//import background from '../assets/streets.jpg';
import { FaCheck } from 'react-icons/fa';
import structural from '../constants/viewSkeleton';

const lay = css({
  ...structural,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 'inherit',
  '&>ol': {
    display: 'flex',
    width: '90%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '&>li': {
      textIndent: '3px',
      '&>svg': {
        margin: '0 5px',
        fill: 'green',
      },
    },
  },
  //background: `url("${background}") no-repeat`,
  backgroundSize: 'contain',
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

export default LandingPage;
