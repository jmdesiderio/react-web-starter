import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form/immutable'

import { Checkbox, Input } from '../../elements/Fields'
import { Button } from '../../elements/Buttons'
import Errors from '../../components/Errors'

import s from './styles.scss'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: []
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler (input) {
    return this.props.sendRequest({ variables: input })
      .then(() => console.log('success')) // eslint-disable-line no-console
      .catch(err => this.setState({ errors: [err.message] }))
  }

  render () {
    const { handleSubmit, invalid, pristine, submitting } = this.props
    const { errors } = this.state

    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        {(errors.length) ? <Errors list={errors} /> : null}
        <Field component={Input}
          id='username'
          label='Username or Email'
          name='username' />
        <Field component={Input}
          id='password'
          label='Password'
          name='password'
          type='password' />
        <div className={s.row}>
          <Field component={Checkbox}
            label='Keep me logged in'
            name='keepLoggedIn' />
          <button className={s.forgotPassword}
            onClick={this.resetPasswordLinkHandler}>
            Forget your password?
          </button>
        </div>
        <Button disabled={invalid || pristine || submitting}
          text='Login' />
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  sendRequest: PropTypes.func,
  submitting: PropTypes.bool
}

const validate = values => {
  const errors = {}
  if (!values.get('username')) {
    errors.username = 'Username is required'
  }
  if (!values.get('password')) {
    errors.password = 'Password is required'
  } else if (values.get('password').length < 8) {
    errors.password = 'Password must be 8 or more characters'
  }
  return errors
}

export default compose(
  reduxForm({ form: 'LoginForm', validate })
)(LoginForm)
