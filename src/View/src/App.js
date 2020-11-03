import React from 'react';
import About from './views/about-page';
import Header from './components/header';
import Nav from './components/nav';
import styled from '@emotion/styled';
import Bookings from './components/forms/bookings/bookings-form';
import { Route } from 'react-router-dom';
import Home from './views/home-page';
import Login from './views/account-page/account-page';

function main() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/about" component={About} />
      <Route exact path="/account" component={Login} />
      <Route exact path="/home" component={Home} />
    </main>
  );
}
//
export default main;
