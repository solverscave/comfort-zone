import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Home from "./components/pages/home";
import UserForm from "./components/userForm";
import Users from "./components/users";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Billing from "./components/pages/billing";
import Forum from "./components/pages/forum";
import ForumIssue from "./components/forumIssue";
import Fundraising from "./components/pages/fundraising";
import FundDetail from "./components/fundDetail";
import FundForm from "./components/fundForm";
import Complaint from "./components/pages/complaint";
import ComplainDetail from "./components/complainDetail";
import FacilityCorner from "./components/pages/facilityCorner";
import GarbageTracking from "./components/pages/garbageTracking";
import Security from "./components/pages/security";
import Elections from "./components/pages/elections";
import Tendor from "./components/pages/tendor";
import AdDetail from "./components/adDetail";
import Advertisement from "./components/pages/advertisement";
import NotFound from "./components/not-found";
import Payment from "./components/payment";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import Dashboard from "./components/admin/dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/users/:id" component={UserForm} />
            <Route path="/users" component={Users} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/billing/payment" component={Payment} />
            <Route path="/billing" component={Billing} />
            <Route path="/forum/:id" component={ForumIssue} />
            <Route path="/forum" component={Forum} />
            <Route path="/complaint/:id" component={ComplainDetail} />
            <Route path="/complaint" component={Complaint} />
            <Route path="/fundraising/form" component={FundForm} />
            <Route path="/fundraising/:id" component={FundDetail} />
            <Route path="/fundraising" component={Fundraising} />
            <Route path="/facility-corner" component={FacilityCorner} />
            <Route path="/garbage-tracking" component={GarbageTracking} />
            <Route path="/security" component={Security} />
            <Route path="/elections" component={Elections} />
            <Route path="/tendor" component={Tendor} />
            <Route path="/advertisement" component={Advertisement} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
