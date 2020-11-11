/** @jsx jsx */
import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { FaCheck } from 'react-icons/fa';
import structural from '../../constants/viewSkeleton';
import { connect } from 'react-redux';
import getUserDatabyIdAction from '../../actions/getUserDatabyIdAction';
import Loading from '../../components/loading';
import UserShowcase from './userShowcase';

const lay = css({
  ...structural,
});

const AccountSetttings = ({ loggedUser, userOverview, getUserDatabyIdAction }) => {
  const { id } = loggedUser;
  const { user, loading, error } = userOverview;

  useEffect(() => {
    getUserDatabyIdAction(id);
  }, [userOverview, getUserDatabyIdAction, id]);

  return (
    <main css={lay}>
      <h1>User Settings</h1>
      {loading && <Loading />}
      {error && <p class="help is-danger">{error}</p>}
      {user && <UserShowcase user={user} />}
    </main>
  );
};
const mapStateToProps = state => {
  return {
    loggedUser: state.login.user,
    userOverview: state.userOverview,
  };
};

export default connect(mapStateToProps, { getUserDatabyIdAction })(AccountSetttings);
