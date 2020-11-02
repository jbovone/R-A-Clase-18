import React from 'react';
import About from './views/about';
import Header from './components/header';
import Nav from './components/nav';
import styled from '@emotion/styled';
import Bookings from './components/forms/bookForm';
import { Route } from 'react-router-dom';
import Home from './views/home';
import Login from './views/login';

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
