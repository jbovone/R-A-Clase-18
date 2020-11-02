import React from 'react';
import { css } from '@emotion/core';
import Table from '../components/table';
import * as profiles from '../configuration/tableprofiles';

const style = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
});

function UserSection() {
  const cars = [
    { id: 'BWN5KYHQPXSA35092', model: 'F-150', status: 'avaible' },
    { id: 'XN7J1WS6Z9S833651', model: 'Element', status: 'in repairs' },
    { id: 'NT9EZQAXMASG67234', model: 'Prius', status: 'avaible' },
  ];
  return (
    <main css={style}>
      <Table columns={profiles.automovilesProfile} data={cars} />
    </main>
  );
}
export default UserSection;
