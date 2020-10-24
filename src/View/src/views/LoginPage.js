/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Signup from "../components/forms/signup";
import background from "../assets/streets.jpg";
import { connect } from "react-redux";
import { loginAction } from "../actions/loginAction";

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

function LoginPage({ loginAction }) {
  console.log(loginAction, "PROPS");
  return (
    <main css={lay}>
      <Signup onSubmit={(e) => loginAction(e)} />
    </main>
  );
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { loginAction })(LoginPage);
