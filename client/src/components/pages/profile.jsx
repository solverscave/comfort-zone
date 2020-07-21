import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config.json';

export default class Profile extends Component {
  state = {
    user: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      apiUrl + '/users/' + this.props.match.params.id
    );
    const user = data[0];
    console.log(user);
    this.setState({ user });
  }

  render() {
    console.log(this.state.user.length);
    if (this.state.user.length === 0)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    else
      return (
        <div className='container my-5'>
          <button
            onClick={() => this.props.history.goBack()}
            className='btn btn-cz'
          >
            Back
          </button>
          <h1>Profile</h1>
          <div className='row align-self-center justify-content-center text-center w-0'>
            <div
              className='card text-left mt-4 pt-5 pb-5'
              style={{
                boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
                border: '0px',
              }}
            >
              <div className='card-body' style={{ width: '500px' }}>
                <h4
                  className='card-title'
                  style={{
                    marginBottom: '2px',
                    fontFamily: 'Proxima Nova',
                    fontSize: '30px',
                    color: '#159570',
                  }}
                >
                  <img
                    style={{
                      boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
                      // border: '0px',
                      // width: '100%',
                      height: '10rem',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                    src={this.state.user.imageUrl}
                    className='mx-auto d-block'
                    alt='...'
                  />
                </h4>
                <div className='row mt-3 ml-2'>
                  <div className='col-5'>
                    <p
                      className='card-text text-right'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        color: '#343434',
                      }}
                    >
                      Name:
                    </p>
                  </div>
                  <div className='col-6'>
                    <p
                      className='card-text text-left'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        color: '#159570',
                      }}
                    >
                      {this.state.user.name}
                    </p>
                  </div>
                </div>
                <div className='row mt-1 ml-2'>
                  <div className='col-5'>
                    <p
                      className='card-text text-right'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        color: '#343434',
                      }}
                    >
                      Phone:
                    </p>
                  </div>
                  <div className='col-6'>
                    <p
                      className='card-text text-left'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        color: '#159570',
                      }}
                    >
                      {this.state.user.phone}
                    </p>
                  </div>
                </div>
                <div className='row mt-1 ml-2'>
                  <div className='col-5'>
                    <p
                      className='card-text text-right'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        color: '#343434',
                      }}
                    >
                      Address:
                    </p>
                  </div>
                  <div className='col-6'>
                    <p
                      className='card-text text-left'
                      style={{
                        marginBottom: '2px',
                        fontFamily: 'Proxima Nova',
                        fontSize: '20px',
                        color: '#159570',
                      }}
                    >
                      {this.state.user.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
