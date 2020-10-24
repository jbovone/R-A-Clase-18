/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Signup from "../components/forms/signup";
import background from "../assets/streets.jpg";
import { connect } from "react-redux";
import NavLink from 'react-router-dom'

const lay = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  background: `url("${background}") no-repeat`,
  backgroundSize: "contain",
  "&>form": {
    position: "absolute",
    left: "400px",
  },
});

function LandingPage() {
  return (
    <main css={lay}>
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <NavLink href="/home">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">Why us?</NavLink>
          </li>
          <li>
            <NavLink href="/sign-in">Account</NavLink>
          </li>
          <li clNavLinkss="is-active">
            <NavLink href="" >
              BreNavLinkdcrumb
            </NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
connect;

export default LandingPage;
