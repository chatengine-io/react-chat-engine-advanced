import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, logout } from '../../Actions/Accounts';

import { HTTP_URL, PROJECT_ID } from '../../consts';

import ChatEngine from './ChatEngine';

const HomePage = (props) => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSecret, setUserSecret] = useState('');

  function submit() {
    setLoading(true);

    props.login(
      { rootUrl: HTTP_URL, projectID: PROJECT_ID, userName, userSecret },
      () => setLoading(false),
      (error) => console.log(error)
    );
  }

  if (!props.accounts.userName) {
    return (
      <div>
        <input
          type="text"
          placeholder="User Name"
          id="home-page-username-input"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          id="home-page-password-input"
          onChange={(e) => setUserSecret(e.target.value)}
        />

        <button
          onClick={() => submit()}
          id="home-page-login-button"
          style={{ backgroundColor: loading ? '#f0f0f0' : '#91d5ff' }}
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        style={{ position: 'absolute', right: '4px', top: '4px' }}
        id="home-page-logout-button"
        onClick={() => props.logout()}
      >
        Logout
      </button>

      <ChatEngine />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
