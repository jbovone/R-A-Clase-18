import React from 'react';
import { FaCheck, FaPassport } from 'react-icons/fa';
import { Field } from 'formik';

const Password = ({ error, touched }) => {
  return (
    <div className="field">
      <label htmlFor="password" className="label">
        Password
      </label>
      <div className="control has-icons-left has-icons-right">
        <Field
          id="password"
          type="password"
          className={!touched ? 'input' : error ? 'input is-danger' : 'input is-success'}
          name="password"
        />
        {!touched ? null : error ? (
          <p className="help is-danger">{error}</p>
        ) : (
          <p className="help is-success">Has min lenght of 8 and max lenght of 15.</p>
        )}
        <span className="icon is-small is-left">
          <FaPassport />
        </span>
        <span className="icon is-small is-right">
          <FaCheck />
        </span>
      </div>
    </div>
  );
};
export default Password;
