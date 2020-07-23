import React, { Component } from 'react';
import SideBar from './sidebar';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './../users';
import DashboardDesc from './dashboardDesc';
import Complains from '../complains';
import ComplainDetail from '../complainDetail';
import Bills from './bills';
import Ads from './ads';
import Funds from './funds';
import Members from './members';
import Drivers from './drivers';
import Guards from './guards';
import Workers from './workers';
import AdsMembers from './members/ads.members';
import BillsMembers from './members/bills.members';
import ComplainsMembers from './members/complains.members';
import FundsMembers from './members/funds.members';
import auth from '../../services/authService';
import axios from 'axios';
import { apiUrl } from '../../config.json';

export default class Dashboard extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
    }
    this.setState({ user });
  }

  render() {
    return (
      <div className='container my-5'>
        <div className='mb-5'>
          <SideBar user={this.state.user} />
        </div>
        <Switch>
          <Route exact path='/dashboard/desc' component={DashboardDesc} />
          <Route exact path='/dashboard/users' component={Users} />
          <Route exact path='/dashboard/members' component={Members} />
          <Route exact path='/dashboard/drivers' component={Drivers} />
          <Route exact path='/dashboard/guards' component={Guards} />
          <Route exact path='/dashboard/workers' component={Workers} />
          <Route
            exact
            path='/dashboard/complain/:id'
            component={ComplainDetail}
          />
          <Route path='/dashboard/bills' component={Bills} />
          <Route path='/dashboard/complains' component={Complains} />
          <Route path='/dashboard/ads' component={Ads} />
          <Route path='/dashboard/funds' component={Funds} />
          <Route path='/dashboard/billsmembers' component={BillsMembers} />
          <Route path='/dashboard/adsmembers' component={AdsMembers} />
          <Route
            path='/dashboard/complainsmembers'
            component={ComplainsMembers}
          />
          <Route path='/dashboard/fundsmembers' component={FundsMembers} />
        </Switch>
        <Redirect from='/dashboard' to='/dashboard/desc' />
      </div>
    );
  }
}
