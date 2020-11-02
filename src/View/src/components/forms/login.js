/** @jsx jsx */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Email from './fields/email';
import Username from './fields/username';
import Password from './fields/password';
import createUserAction from '../../actions/createUserAction';
import { connect } from 'react-redux';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'This name is too short.')
    .max(12, 'This name is too long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'This name is too short!')
    .max(15, 'This password is too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const formStyle = styled.form({
  margin: '20px auto',
  width: '80%',
});
const StyliedForm = formStyle.withComponent(Form);

export const Signup = ({ state, onSubmit }) => (
  <Formik
    initialValues={{
      username: 'admin',
      password: 'admin',
      email: 'admin@admin.com',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      onSubmit(values);
    }}
  >
    {({ errors, touched }) => (
      <StyliedForm>
        <Username error={errors.username} touched={touched.username} onBlur={() => console.log('changed')} />
        <Password error={errors.password} touched={touched.password} />
        <Email error={errors.email} touched={touched.email} />
        <button className="button is-link">Submit</button>
      </StyliedForm>
    )}
  </Formik>
);

function mapStatetoProps(getState) {
  return getState.login;
}
export default connect(mapStatetoProps, { onSubmit: createUserAction })(Signup);
