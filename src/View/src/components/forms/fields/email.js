import React from 'react';
import { Field } from 'formik';
import { FaCheck, FaEnvelope } from 'react-icons/fa';

const Email = ({ error, touched }) => {
  return (
    <div className="field">
      <label htmlFor="email" className="label">
        Email
      </label>
      <div className="control has-icons-left has-icons-right">
        <Field
          id="email"
          className={!touched ? 'input' : error ? 'input is-danger' : 'input is-success'}
          name="email"
        />
        {!touched ? null : error ? (
          <p className="help is-danger">{error}</p>
        ) : (
          <p className="help is-success">This email is correct.</p>
        )}
        <span className="icon is-small is-left">
          <FaEnvelope />
        </span>
        <span className="icon is-small is-right">
          <FaCheck />
        </span>
      </div>
    </div>
  );
};

export default Email;
