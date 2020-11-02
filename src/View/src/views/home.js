/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import background from '../assets/streets.jpg';
import { connect } from 'react-redux';
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

function LandingPage() {
  return <main css={lay}></main>;
}

export default LandingPage; //connect()();
