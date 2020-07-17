import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import auth from '../services/authService';
import { min } from 'lodash';

export default class UserForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      name: '',
      phone: '',
      sector: '',
      address: '',
      role: '',
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
    phone: Joi.string().required().min(11).label('Phone'),
    sector: Joi.string().required().label('Sector'),
    address: Joi.string().required().label('Address'),
    role: Joi.string().required().label('Role'),
  };

  doSubmit = async () => {
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
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'text', 'Enter your email')}
          {this.renderInput(
            'password',
            'Password',
            'password',
            'Enter user password'
          )}
          {this.renderInput('name', 'Name', 'text', 'Enter user name')}
          {this.renderInput('phone', 'Phone', 'text', 'Enter user phone')}
          {this.renderInput('sector', 'Sector', 'text', 'Enter user sector')}
          {this.renderInput('address', 'Address', 'text', 'Enter user address')}
          {this.renderSelect('role', 'Role', [
            { name: 'Admin', _id: 'Admin' },
            { name: 'Member', _id: 'Member' },
          ])}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}
