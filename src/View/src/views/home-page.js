/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import background from '../assets/streets.jpg';
import structural from '../constants/viewSkeleton';

const lay = css({
  ...structural,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url("${background}") no-repeat`,
  backgroundSize: 'contain',
  '&>form': {
    position: 'absolute',
    left: '400px',
  },
});

function Home() {
  return <main css={lay}></main>;
}

export default Home;
