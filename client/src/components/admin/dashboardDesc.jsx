import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userImg from '../../assets/img/dashboard/users.jpg';
import complainImg from '../../assets/img/dashboard/complains.jpg';
import fundImg from '../../assets/img/dashboard/funds.jpg';
import billImg from '../../assets/img/dashboard/billing-100.jpg';
import adImg from '../../assets/img/dashboard/ads.jpg';
import driverImg from '../../assets/img/dashboard/drivers.jpg';
import guardImg from '../../assets/img/dashboard/guards.jpg';
import workerImg from '../../assets/img/dashboard/workers.jpg';
import auth from '../../services/authService';
import axios from 'axios';
import { apiUrl } from '../../config.json';

class DashboardDesc extends Component {
  state = {
    user: {
      role: 'None',
    },
  };

  async componentWillMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
    }
    this.setState({ user });
  }

  render() {
    if (this.state.user.role === 'Admin') {
      return (
        <div className='my-5 text-center'>
          <h1>Welcome! Admin</h1>
          <p>
            We are glad that you are here. Lets manage some people, events and
            other stuff. Are you ready?
          </p>
          <div className='row mt-5'>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/bills'>
                  <Card.Img variant='top' src={billImg} />
                </Link>

                <Card.Body>
                  <Card.Title>Bills</Card.Title>
                  <Card.Text>
                    Manage all the bills from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/bills'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/complains'>
                  <Card.Img variant='top' src={complainImg} />
                </Link>

                <Card.Body>
                  <Card.Title>Complains</Card.Title>
                  <Card.Text>
                    Manage all the complains from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/complains'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/funds'>
                  <Card.Img variant='top' src={fundImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Funds</Card.Title>
                  <Card.Text>
                    Manage all the funds from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/funds'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/ads'>
                  <Card.Img variant='top' src={adImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Ads</Card.Title>
                  <Card.Text>Manage all the ads from the dashboard.</Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/ads'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/members'>
                  <Card.Img variant='top' src={userImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Members</Card.Title>
                  <Card.Text>
                    Manage all the members from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/members'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/drivers'>
                  <Card.Img variant='top' src={driverImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Drivers</Card.Title>
                  <Card.Text>
                    Manage all the drivers from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/drivers'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/guards'>
                  <Card.Img variant='top' src={guardImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Guards</Card.Title>
                  <Card.Text>
                    Manage all the guards from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/guards'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/workers'>
                  <Card.Img variant='top' src={workerImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Workers</Card.Title>
                  <Card.Text>
                    Manage all the workers from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/workers'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.user.role === 'Member') {
      return (
        <div className='my-5 text-center'>
          <h1>Welcome! Member</h1>
          <p>
            We are glad that you are here. Lets manage your ads, bills and other
            stuff. Are you ready?
          </p>
          <div className='row my-5'>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/billsmembers'>
                  <Card.Img variant='top' src={billImg} />
                </Link>

                <Card.Body>
                  <Card.Title>Your Bills</Card.Title>
                  <Card.Text>View all your view from the dashboard.</Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/billsmembers'
                    variant='primary'
                  >
                    View now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/complainsmembers'>
                  <Card.Img variant='top' src={complainImg} />
                </Link>

                <Card.Body>
                  <Card.Title>Your Complains</Card.Title>
                  <Card.Text>
                    Manage all your complains from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/complainsmembers'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/fundsmembers'>
                  <Card.Img variant='top' src={fundImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Your Funds</Card.Title>
                  <Card.Text>
                    Manage all your funds from the dashboard.
                  </Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/fundsmembers'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '17rem' }}>
                <Link to='/dashboard/adsmembers'>
                  <Card.Img variant='top' src={adImg} />
                </Link>
                <Card.Body>
                  <Card.Title>Your Ads</Card.Title>
                  <Card.Text>Manage all your ads from the dashboard.</Card.Text>
                  <Link
                    className='btn btn-cz'
                    to='/dashboard/adsmembers'
                    variant='primary'
                  >
                    Manage now
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
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

export default DashboardDesc;
