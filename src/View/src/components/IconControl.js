import React from 'react';
import { css, jsx } from '@emotion/core';

const style = css({
  textDecoration: 'none',
  height: '15px',
  width: '15px',
  color: 'white',
  margin: '5px',
  '&>*': {
    height: 'inherit',
    width: 'inherit',
  },
});

function Header({ Icon, onClick = e => e.preventDefault() }) {
  return <a css={style} href="./" onClick={onClick} children={Icon()} />;
}

export default Header;
