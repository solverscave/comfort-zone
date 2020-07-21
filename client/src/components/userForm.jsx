import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import { apiUrl } from '../config.json';
import axios from 'axios';
import auth from '../services/authService';
import { min } from 'lodash';

export default class UserForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      name: '',
      phone: '',
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
    address: Joi.string().required().label('Address'),
    role: Joi.string().required().label('Role'),
  };

  //SUBMITTING A NEW USER
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      let newUser = response.data;

      if (response) {
        toast.success('User has been successfully added!');
        console.log(newUser);
        this.addNewBill(newUser);
      }

      //RESET FORM AFTER SUBMISSION
      const data = {
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
        role: '',
      };

      this.setState({ data });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
        toast.error('Oh something went wrong');
      }
    }
  };

  addNewBill = async (newUser) => {
    console.log(newUser._id);
    const newBill = await axios.post(apiUrl + '/bills/', {
      dateOfIssue: new Date(),
      dueDate: new Date(),
      arrearAmount: 0,
      waterCharges: 0,
      conservancyCharges: 300,
      streetLightCharges: 300,
      roadMaintenanceCharges: 300,
      graveyardCharges: 0,
      electricityCharges: 1120,
      totalAmount: 1890,
      dueAmount: 3000,
      userId: newUser._id,
      userImage: newUser.imageUrl,
      userName: newUser.name,
      isPaid: 'false',
    });
    console.log(newBill);
  };

  render() {
    return (
      <div className='container my-5'>
        <ToastContainer />
        <button
          onClick={() => this.props.history.goBack()}
          className='btn btn-cz'
        >
          Go Back
        </button>
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
