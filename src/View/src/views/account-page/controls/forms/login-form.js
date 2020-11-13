/** @jsx jsx */
import React from 'react';
import { Formik, Form } from 'formik';
import { css, jsx } from '@emotion/core';
import Username from '../../../../components/forms/fields/username';
import Password from '../../../../components/forms/fields/password';
import { formStyle } from './style';

const StyliedForm = formStyle.withComponent(Form);

const Signup = ({ onSubmit, data }) => {
  const { loading, error } = data;
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <StyliedForm>
        <h1>Access an Account:</h1>
        <Username />
        <Password />
        <button className="btn button is-link">Submit</button>
        {loading && <progress className="progress is-small is-primary" max="100" />}
        {error && <div className="help is-danger">{error}</div>}
      </StyliedForm>
    </Formik>
  );
};

export default Signup;
