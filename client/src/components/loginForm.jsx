import React from 'react';
import Joi from 'joi-browser';
import auth from '../services/authService';

import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { membershipNumber: '', password: '' },
    errors: {},
  };

  schema = {
    membershipNumber: Joi.string().required().label('Membership Number'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.membershipNumber, data.password);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.membershipNumber = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className='container my-5'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('membershipNumber', 'Membership Number')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
