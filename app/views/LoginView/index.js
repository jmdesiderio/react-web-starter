import React, { Component } from 'react';

import LoginForm from '../../forms/LoginForm';

import s from './styles.scss';

export default class LoginView extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={s.root}>
        <LoginForm />
      </div>
    );
  }
}
