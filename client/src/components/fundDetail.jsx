import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import thousandRupees from '../assets/img/PKR_Rs_1000.jpg';
import FundDetailProgress from '../../src/components/pages/fundDetailProgress';
import auth from '../services/authService';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl } from '../config.json';
const apiEndpoint = apiUrl + '/funds/';

class FundDetail extends Component {
  constructor(props) {
    super(props);
    this.getParams = this.getParams.bind(this);
    this.state = {
      fund: { title: '' },
      user: {},
      loggedUser: {},
      params: this.getParams,
    };
    const params = '1';
    console.log(params);
  }

  async componentDidMount() {
    let loggedUser = auth.getCurrentUser();
    this.setState({ loggedUser });

    const { data: funds } = await axios.get(
      apiEndpoint + '/' + this.props.match.params.id
    );

    const fund = funds[0];
    this.setState({ fund });

    const { data } = await axios.get(
      `${apiUrl}/users/${this.state.fund.userId}`
    );
    const user = data[0];
    console.log(user);
    this.setState({ user });
  }

  // getParams = (props) => {
  //   return this.props.match.params.id;
  // };
  getParams(props) {
    return this.props.match.params.id;
  }

  renderAmount = (fund) => {
    if (fund.requiredAmount === 1000)
      return (
        <h3>
          <img src={thousandRupees} alt='thousandRupees' width='100px' /> x 1
        </h3>
      );
  };
  handleToken100 = async (token) => {
    let user = auth.getCurrentUser();

    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
      this.setState({ user });
    } else if (!user) {
      user = {
        _id: null,
      };
      this.setState({ user });
      console.log(user);
    }

    const { data: funds } = await axios.get(
      apiEndpoint + '/' + this.props.match.params.id
    );

    const fund = funds[0];

    const response = await axios.post(apiUrl + '/pay/', {
      token,
      product: {
        name: 'Fund',
        price: 100,
        description:
          'Mem# ' +
          user.membershipNumber +
          ' has donated Rs. 100 for Fund ID# ' +
          fund._id,
      },
    });
    const { status } = response.data;
    console.log('Response:', response.data);

    if (status === 'success') {
      toast('Success donated 100 to the Fund# ' + fund._id, {
        type: 'success',
      });
      await axios.put(apiEndpoint + '/' + this.props.match.params.id, {
        raisedAmount: fund.raisedAmount + 100,
        donations: fund.donations + 1,
      });
      window.location.reload();
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  };
  handleToken500 = async (token) => {
    let user = auth.getCurrentUser();

    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
      this.setState({ user });
    } else if (!user) {
      user = {
        _id: null,
      };
    }

    const { data: funds } = await axios.get(
      apiEndpoint + '/' + this.props.match.params.id
    );

    const fund = funds[0];

    const response = await axios.post(apiUrl + '/pay/', {
      token,
      product: {
        name: 'Fund',
        price: 500,
        description:
          'Mem# ' +
          user.membershipNumber +
          ' has donated Rs. 500 for Fund ID# ' +
          fund._id,
      },
    });
    const { status } = response.data;
    console.log('Response:', response.data);

    if (status === 'success') {
      toast('Success donated Rs. 500 to the Fund# ' + fund._id, {
        type: 'success',
      });
      await axios.put(apiEndpoint + '/' + this.props.match.params.id, {
        raisedAmount: fund.raisedAmount + 500,
        donations: fund.donations + 1,
      });
      window.location.reload();
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  };
  handleToken1000 = async (token) => {
    let user = auth.getCurrentUser();

    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
    } else if (!user) {
      user = {
        _id: null,
      };
    }

    const { data: funds } = await axios.get(
      apiEndpoint + '/' + this.props.match.params.id
    );

    const fund = funds[0];

    const response = await axios.post(apiUrl + '/pay/', {
      token,
      product: {
        name: 'Fund',
        price: 1000,
        description:
          'Mem# ' +
          user.membershipNumber +
          ' has donated Rs. 1000 for Fund ID# ' +
          fund._id,
      },
    });
    const { status } = response.data;
    console.log('Response:', response.data);

    if (status === 'success') {
      toast('Success donated 1000 to the Fund# ' + fund._id, {
        type: 'success',
      });
      await axios.put(apiEndpoint + '/' + this.props.match.params.id, {
        raisedAmount: fund.raisedAmount + 1000,
        donations: fund.donations + 1,
      });
      window.location.reload();
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  };
  render() {
    const { fund } = this.state;

    if (fund.title === '')
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../assets/icons/loading.gif')} alt='' />
        </div>
      );
    return (
      <div className='container my-5'>
        <Link className='btn btn-cz mb-3' to='/fundraising'>
          Go Back
        </Link>

        <div className='row'>
          <div className='col-8'>
            <img
              style={{
                boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
                border: '0px',
                width: '45.7rem',
                height: '20.7rem',
                objectFit: 'cover',
              }}
              src={fund.imageUrl}
              className='rounded mx-auto d-block'
              alt='...'
            />
            <div
              className='card text-left mt-4'
              style={{
                boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
                border: '0px',
              }}
            >
              <div className='card-body'>
                <h4
                  className='card-title'
                  style={{
                    marginBottom: '2px',
                    fontFamily: 'Proxima Nova',
                    fontSize: '30px',
                    color: 'apple.com159570',
                  }}
                >
                  {fund.title}
                </h4>
                <p
                  className='card-text'
                  style={{
                    marginBottom: '2px',
                    fontFamily: 'Proxima Nova',
                    fontSize: '18px',
                    color: 'apple.com2e2e2e',
                  }}
                >
                  {fund.description}
                </p>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='row align-self-center justify-content-center text-center'>
              <FundDetailProgress
                requiredAmount={fund.requiredAmount}
                raisedAmount={fund.raisedAmount}
                donations={fund.donations}
              />
            </div>
            <div className='row align-self-center justify-content-center text-center'>
              <div className='mr-2'>
                <StripeCheckout
                  style={{ float: 'left' }}
                  stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
                  token={this.handleToken100}
                  amount={10000}
                  name='Comfort Zone'
                  image='http://localhost:3000/uploads/payment-logo.jpg'
                  label='Rs. 100'
                />
              </div>
              <div className='mr-2'>
                <StripeCheckout
                  style={{ float: 'left' }}
                  stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
                  token={this.handleToken500}
                  amount={50000}
                  name='Comfort Zone'
                  image='http://localhost:3000/uploads/payment-logo.jpg'
                  label='Rs. 500'
                />
              </div>
              <div>
                <StripeCheckout
                  style={{ float: 'left' }}
                  stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
                  token={this.handleToken1000}
                  amount={100000}
                  name='Comfort Zone'
                  image='http://localhost:3000/uploads/payment-logo.jpg'
                  label='Rs. 1000'
                />
              </div>
            </div>
            <ToastContainer />
            <div className='row align-self-center justify-content-center text-center w-0'>
              <div
                className='card text-left mt-4 pt-5 pb-5'
                style={{
                  boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
                  border: '0px',
                }}
              >
                <div className='card-body' style={{ width: '385px' }}>
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
                          fontSize: '20px',
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
                          fontSize: '20px',
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
                          fontSize: '20px',
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
                          fontSize: '20px',
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
                          fontSize: '20px',
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
        </div>
      </div>
    );
  }
}

export default FundDetail;
