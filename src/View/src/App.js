import React from 'react';
import About from './views/about-page';
import Header from './components/header/header';
import Nav from './components/nav';
import { Route } from 'react-router-dom';
import Bookings from './views/bookings-page/bookings-page';
import Home from './views/home-page';
import Login from './views/account-page/account-page';
import AccountSettings from './views/account-settings/account-settings';

function main() {
  const cookie = document.cookie;
  console.log(cookie, 'COOKIE');
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/about" component={About} />
      <Route exact path="/account" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/account-settings" component={AccountSettings} />
    </main>
  );
}
//
export default main;
