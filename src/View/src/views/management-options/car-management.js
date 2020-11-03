import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import Table from '../components/table';
import * as profiles from '../configuration/tableprofiles';
import getCarsAction from '../../actions/getCarsAction';
import { connect } from 'redux';

const style = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
});

function UserSection({ getCarsAction, data }) {
  const { loading, cars, error } = data;

  return (
    <main css={style}>
      <Table columns={profiles.automovilesProfile} data={cars} />
    </main>
  );
}
const mapStateToProps = state => {
  return { automobiles: state.automobiles };
};
export default connect(mapStateToProps, { getCarsAction })(UserSection);
