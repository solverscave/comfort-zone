import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config.json';
import Joi from 'joi-browser';
import Popup from 'reactjs-popup';
import Form from './common/form';
const apiEndpoint = apiUrl + '/complains';

export default class ComplainDetail extends Form {
  state = {
    complain: { title: '' },
    data: {
      complainHandlerName: '',
      complainHandlerPhone: '',
    },
    errors: {},
  };

  schema = {
    complainHandlerName: Joi.string().required().min(5).label('Name'),
    complainHandlerPhone: Joi.string()
      .required()
      .min(11)
      .max(11)
      .label('Phone'),
  };

  async componentDidMount() {
    const { data } = await axios.get(
      apiEndpoint + '/id/' + this.props.match.params.id
    );
    const complain = data[0];
    this.setState({ complain });
  }

  renderButton1(complain) {
    if (complain.status === 'Resolved!')
      return (
        <button
          className='btn btn-danger'
          onClick={() => this.handleStatus(complain)}
        >
          Update to Pending...
        </button>
      );
    else
      return (
        <button
          className='btn btn-cz'
          onClick={() => this.handleStatus(complain)}
        >
          Update to Resolved!
        </button>
      );
  }

  handleStatus = async (complain) => {
    if (complain.status === 'Pending...') {
      await axios.put(apiEndpoint + '/' + complain._id, {
        status: 'Resolved!',
      });

      const { data } = await axios.get(apiEndpoint + '/id/' + complain._id);
      const updatedComplain = data[0];
      this.setState({ complain: updatedComplain });

      toast.success('This complain is successfully resolved!');
    } else {
      await axios.put(apiEndpoint + '/' + complain._id, {
        status: 'Pending...',
      });

      const { data } = await axios.get(apiEndpoint + '/id/' + complain._id);

      const updatedComplain = data[0];
      this.setState({ complain: updatedComplain });

      toast.error('This complain is now added to the pending...');
    }
  };

  doSubmit = async () => {
    const data = await axios.put(
      apiEndpoint + '/' + this.props.match.params.id,
      {
        complainHandlerName: this.state.data.complainHandlerName,
        complainHandlerPhone: this.state.data.complainHandlerPhone,
      }
    );

    console.log(data.status);
    const complain = data.data;
    if (data.status === 200) {
      toast.success(
        this.state.data.complainHandlerName +
          ' is successfully assigned to this complain!'
      );
      this.setState({ complain });

      this.state.data = {
        complainHandlerName: '',
        complainHandlerPhone: '',
      };
    }

    // const { data } = await axios.get(apiEndpoint + '/id/' + complain._id);
    // const updatedComplain = data[0];
    // this.setState({ complain: updatedComplain });

    // toast.success('This complain is successfully resolved!');
  };

  render() {
    const { complain } = this.state;
    if (this.state.complain.title === '')
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '10px' }}
        >
          <img src={require('../assets/icons/loading.gif')} alt='' />
        </div>
      );
    return (
      <React.Fragment>
        <div className='container'>
          <ToastContainer />
          <Link className='btn btn-cz mb-3' to='/dashboard/complains'>
            Go Back
          </Link>
          <div className='row'>
            <div className='col-9'>
              <h3 style={{ color: '#159570' }}>{complain.title}</h3>
              <h6
                style={{
                  color: '#2E2E2E',
                  marginBottom: 50,
                }}
              >
                {complain.description}
              </h6>
              <Popup
                trigger={<button className='btn btn-cz mb-3'> Assign</button>}
                position='top left'
              >
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput(
                    'complainHandlerName',
                    'Complain Handler Name',
                    'text',
                    'Enter the complain handler name'
                  )}
                  {this.renderInput(
                    'complainHandlerPhone',
                    'Complain Handler Phone',
                    'text',
                    'Enter the complain handler phone'
                  )}
                  {/* {this.renderTextArea(
                            'description',
                            'Description',
                            'text',
                            'Enter the description of the issue'
                          )} */}
                  <div className='row'>
                    <div className='col-3'></div>
                  </div>
                  {this.renderButton('Submit')}
                </form>
              </Popup>
              <h3 style={{ color: '#159570' }}>Assigned to </h3>
              <h6
                style={{
                  color: '#2E2E2E',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>Name:</span>{' '}
                {complain.complainHandlerName}
              </h6>
              <h6
                style={{
                  color: '#2E2E2E',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>Phone:</span>{' '}
                {complain.complainHandlerPhone}
              </h6>
            </div>
            <div className='col-3'>
              <h1 style={{ color: '#159570' }}>Status</h1>
              <h1 style={{ color: '#2E2E2E' }}>{complain.status}</h1>
              <div className='my-3'>{this.renderButton1(complain)}</div>
              <div className='my-3'>
                <div className='col-3'></div>
              </div>
            </div>
            <div className='col-9'></div>
            <div className='col-3'></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
