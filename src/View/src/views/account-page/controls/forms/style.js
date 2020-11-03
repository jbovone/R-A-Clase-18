import styled from '@emotion/styled';

export const formStyle = styled.form({
  margin: '20px auto',
  minHeight: '35vh',
  display: 'flex',
  flexDirection: 'column',
  width: '75%',
  '&>h1': {
    fontWeight: 700,
    margin: '20px auto',
  },
  '.terms': {
    color: 'red',
    cursor: 'pointer',
  },
  '.btn': {
    marginTop: '20px',
  },
});
