import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/pages/home';
import UserForm from './components/userForm';
import Users from './components/users';
import Billing from './components/pages/billing';
import Forum from './components/pages/forum';
import ForumIssue from './components/forumIssue';
import Fundraising from './components/pages/fundraising';
import FundDetail from './components/fundDetail';
import FundForm from './components/fundForm';
import Complaint from './components/pages/complaint';
import ComplainDetail from './components/complainDetail';
import AdDetail from './components/adDetail';
import AdForm from './components/adForm';
import Advertisement from './components/pages/advertisement';
import NotFound from './components/not-found';
import Payment from './components/payment';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import auth from './services/authService';
import Profile from './components/pages/profile';
import Dashboard from './components/admin/dashboard';

export default class Client extends Component {
  state = {};

  async componentDidMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(
        'http://localhost:5000/api/users/' + user._id
      );
      user = data[0];
    }
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <main>
          <Switch>
            <Route path='/users/:id' component={UserForm} />
            <Route path='/users' component={Users} />
            <Route path='/login' component={LoginForm} />
            <Route path='/logout' component={Logout} />
            <Route path='/billing/payment' component={Payment} />
            <Route path='/billing' component={Billing} />
            <Route path='/forum/:id' component={ForumIssue} />
            <Route path='/forum' component={Forum} />
            <Route path='/complaint/:id' component={ComplainDetail} />
            <Route path='/complaint' component={Complaint} />
            <Route path='/fundraising/form' component={FundForm} />
            <Route path='/fundraising/:id' component={FundDetail} />
            <Route path='/fundraising' component={Fundraising} />
            <Route path='/advertisement/form' component={AdForm} />
            <Route path='/advertisement/:id' component={AdDetail} />
            <Route path='/advertisement' component={Advertisement} />
            <Route path='/profile/:id' component={Profile} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/' exact component={Home} />
            <Redirect to='/not-found' />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}
