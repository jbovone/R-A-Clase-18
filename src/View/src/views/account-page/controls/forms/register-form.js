/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { css, jsx } from '@emotion/core';
import Email from '../../../../components/forms/fields/email';
import Username from '../../../../components/forms/fields/username';
import Password from '../../../../components/forms/fields/password';
import { SignupSchema } from '../../../../configuration/yupValidation';
import TermsCheck from '../checkboxes/terms-agree';
import { formStyle } from './style';

const StyliedForm = formStyle.withComponent(Form);

const Signup = ({ onSubmit, data }) => {
  const [agree, setAgree] = useState(false);
  const { loading, error, user } = data;

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <StyliedForm>
          <h1>Create an Account:</h1>
          <Username error={error.username || errors.username} touched={touched.username} />
          <Password error={errors.password} touched={touched.password} />
          <Email error={error.email || errors.email} touched={touched.email} />
          <TermsCheck setCheck={setAgree} check={agree} />
          <button disabled={!agree} className="btn button is-link">
            Submit
          </button>
          {loading && <progress className="progress is-small is-primary" max="100" />}
        </StyliedForm>
      )}
    </Formik>
  );
};

export default Signup;
