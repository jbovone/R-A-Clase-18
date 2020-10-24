import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { css } from "@emotion/core";
import {
  FaCheck,
  FaUser,
  FaExclamationTriangle,
  FaEnvelope,
  FaPassport,
} from "react-icons/fa";

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(5, "This name is too short.")
    .max(50, "This name is too long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "This name is too short!")
    .max(50, "This password is too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const style = css({
  width: "300px",
});

export const Signup = ({ onSubmit }) => (
  <Formik
    initialValues={{
      userName: "admin",
      password: "admin",
      email: "admin@admin.com",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {({ errors, touched }) => (
      <Form css={style} style={{ width: "250px" }} className="field">
        <div className="field">
          <label htmlFor="userName" className="label">
            Username
          </label>
          <div className="control has-icons-left has-icons-right">
            <Field
              focus
              id="userName"
              className={
                !touched.userName
                  ? "input"
                  : errors.userName
                  ? "input is-danger"
                  : "input is-success"
              }
              name="userName"
            />
            {!touched.userName ? null : errors.userName ? (
              <p className="help is-danger">{errors.userName}</p>
            ) : (
              <p className="help is-success">This username is available</p>
            )}
            <span className="icon is-small is-left">
              <FaUser />
            </span>
            <span className="icon is-small is-right">
              {errors.userName ? (
                <FaExclamationTriangle style={{ fill: "red" }} />
              ) : (
                <FaCheck />
              )}
            </span>
          </div>
        </div>

        <div className="field">
          <label htmlFor="password" className="label">
            password
          </label>
          <div className="control has-icons-left has-icons-right">
            <Field
              id="password"
              type="password"
              className={
                !touched.password
                  ? "input"
                  : errors.password
                  ? "input is-danger"
                  : "input is-success"
              }
              name="password"
            />
            {!touched.password ? null : errors.password ? (
              <p className="help is-danger">{errors.password}</p>
            ) : (
              <p className="help is-success">This password is correct</p>
            )}
            <span className="icon is-small is-left">
              <FaPassport />
            </span>
            <span className="icon is-small is-right">
              <FaCheck />
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            email
          </label>
          <div className="control has-icons-left has-icons-right">
            <Field
              id="email"
              className={
                !touched.email
                  ? "input"
                  : errors.email
                  ? "input is-danger"
                  : "input is-success"
              }
              name="email"
            />
            {!touched.email ? null : errors.email ? (
              <p className="help is-danger">{errors.email}</p>
            ) : (
              <p className="help is-success">This email is correct</p>
            )}
            <span className="icon is-small is-left">
              <FaEnvelope />
            </span>
            <span className="icon is-small is-right">
              <FaCheck />
            </span>
          </div>
        </div>
        <button className="button is-link">Submit</button>
      </Form>
    )}
  </Formik>
);

export default Signup;
