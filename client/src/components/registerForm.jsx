import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
  state = {
    data: { email: '', password: '', name: '', role: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
    role: Joi.string().required().label('Role'),
  };

  doSubmit = async () => {
    // Call the server
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className='container my-5'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'text', 'Enter your email')}
          {this.renderInput(
            'password',
            'Password',
            'password',
            'Enter your password'
          )}
          {this.renderInput('name', 'Name', 'text', 'Enter your name')}
          {this.renderInput('role', 'Role', 'text', 'Enter your role')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
