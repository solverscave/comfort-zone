import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import AdCard from '../adCard';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl } from '../../config.json';

const apiEndpoint = apiUrl + '/ads';

class Advertisement extends Component {
  state = {
    ads: [],
    user: {},
  };

  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

    const data = await axios.get(apiEndpoint);
    const ads = data.data;

    this.setState({ ads });
  }

  handleGetFund() {
    toast.error('Kindly login to add your ad!');
  }

  getButton() {
    if (!this.state.user)
      return (
        <button className='btn btn-cz' onClick={() => this.handleGetFund()}>
          Post an ad
        </button>
      );
    else if (this.state.user)
      return (
        <Link className='btn btn-cz' to='/advertisement/form'>
          Post an ad
        </Link>
      );
  }

  render() {
    const { ads } = this.state;
    if (!this.state.ads.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    else if (this.state.ads === 'No ad was found in the database!')
      return (
        <div>
          <div className='subheader-advertisement py-5 text-white'>
            <div className='align-self-center justify-content-center text-center'>
              <div>
                <h1>Sell anything with ease!</h1>
              </div>
              <div>
                <p>Find a cause you believe in and make good things happen</p>
              </div>
              {this.getButton()}
            </div>
          </div>
          <h1
            className='align-self-center justify-content-center text-center'
            style={{ padding: '150px' }}
          >
            No ad was found!
          </h1>
        </div>
      );
    else
      return (
        <div>
          <ToastContainer />
          <div className='subheader-advertisement py-5 text-white'>
            <div className='align-self-center justify-content-center text-center'>
              <div>
                <h1>Sell anything with ease!</h1>
              </div>
              <div>
                <p>Find a cause you believe in and make good things happen</p>
              </div>
              {this.getButton()}
            </div>
          </div>

          <div className='container my-5'>
            <div className='row'>
              {ads.map((ad) => (
                <div className='my-2' key={ad.id}>
                  <AdCard
                    _id={ad._id}
                    title={ad.title}
                    description={ad.description}
                    imageUrl={ad.imageUrl}
                    price={ad.requiredAmount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export default Advertisement;
