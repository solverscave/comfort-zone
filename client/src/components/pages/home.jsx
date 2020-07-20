import React, { Component } from 'react';
import Carousels from './../common/carousels';
import auth from '../../services/authService';
import axios from 'axios';
import Dashboard from '../admin/dashboard';
import { apiUrl } from '../../config.json';

export default class Home extends Component {
  state = {
    user: { role: 'None' },
    loading: true,
  };

  async componentWillMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
    }
    if (!user) {
      user = { role: 'None' };
      this.setState({ user });
    }
    this.setState({ user, loading: false });
  }

  render() {
    const { user, loading } = this.state;
    if (user.role === 'Admin' && !loading) {
      return <Dashboard />;
    }
    if ((user.role === 'None' || user.role === 'Member') && !loading)
      return (
        <div>
          <Carousels />
          <div className='row landing-page-section-lighter'>
            <div className='col-6'>
              <h1>Billing System</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-billing.svg')}
                alt=''
              />
            </div>
          </div>
          <div className='row landing-page-section-darker'>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img src={require('../../assets/icons/icon-forum.svg')} alt='' />
            </div>
            <div className='col-6'>
              <h1>Chat Forum</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
          </div>
          <div className='row landing-page-section-lighter'>
            <div className='col-6'>
              <h1>Complaint System</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-complain.svg')}
                alt=''
              />
            </div>
          </div>
          <div className='row landing-page-section-darker'>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-fundraising.svg')}
                alt=''
              />
            </div>
            <div className='col-6'>
              <h1>Fundraising</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
          </div>
          <div className='row landing-page-section-lighter'>
            <div className='col-6'>
              <h1>Facility Corner</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-facility.svg')}
                alt=''
              />
            </div>
          </div>
          <div className='row landing-page-section-darker'>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-tracking.svg')}
                alt=''
              />
            </div>
            <div className='col-6'>
              <h1>Garbage Tracking</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
          </div>
          <div className='row landing-page-section-lighter'>
            <div className='col-6'>
              <h1>Security System</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img
                src={require('../../assets/icons/icon-facility.svg')}
                alt=''
              />
            </div>
          </div>

          <div className='row landing-page-section-darker'>
            <div className='col-6 align-self-center justify-content-center text-center'>
              <img src={require('../../assets/icons/icon-ad.svg')} alt='' />
            </div>
            <div className='col-6'>
              <h1>Advertisement</h1>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
                sit amet risus sollicitudin tristique sed vitae metus.
                Vestibulum ultricies ligula vitae porta blandit. Vestibulum
                porta arcu sed lectus aliquam eleifend. Fusce sagittis eget elit
                non euismod. Donec eu metus dictum, tempus odio nec, cursus
                eros. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce tempor finibus magna. Nunc pharetra lectus at
                turpis consequat, nec porttitor felis porta. Fusce nec quam
                fermentum, cursus mauris ac, sollicitudin dui. Pellentesque eget
                gravida nisl. Nunc quis mi rutrum, ornare leo eu, cursus ex.
                Vivamus congue sapien eget urna auctor euismod. Aenean id nisi
                in odio pretium maximus.
              </p>
            </div>
          </div>
        </div>
      );
    if (loading) {
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    }
  }
}
