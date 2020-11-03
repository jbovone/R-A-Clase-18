import React from 'react';
import { FaCheck, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import { Field } from 'formik';

const Username = ({ error, touched }) => {
  return (
    <div className="field">
      <label htmlFor="username" className="label">
        Username
      </label>
      <div className="control has-icons-left has-icons-right">
        <Field
          focus
          id="username"
          className={!touched ? 'input' : error ? 'input is-danger' : 'input is-success'}
          name="username"
        />
        {!touched ? null : error ? (
          <p className="help is-danger">{error}</p>
        ) : (
          <p className="help is-success">Has min lenght of 6 and max lenght of 12.</p>
        )}
        <span className="icon is-small is-left">
          <FaUser />
        </span>
        <span className="icon is-small is-right">
          {error ? <FaExclamationTriangle style={{ fill: 'red' }} /> : <FaCheck />}
        </span>
      </div>
    </div>
  );
};

export default Username;
