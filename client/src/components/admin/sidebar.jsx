import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ user }) => {
  if (user.role === 'Admin') {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <nav className='navbar navbar-expand-lg navbar-cz'>
        <Link to='/dashboard/desc' className='navbar-brand'>
          Dashboard
        </Link>
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/bills'>
              <i className='fa fa-file-text'></i> Bills
            </NavLink>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/complains'
            >
              <i className='fa fa-meh-o'></i> Complains
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/funds'>
              <i className='fa fa-money'></i> Funds
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/ads'>
              <i className='fa fa-audio-description'></i> Ads
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/members'>
              <i className='fa fa-users'></i> Members
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/drivers'>
              <i className='fa fa-truck'></i> Drivers
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/guards'>
              <i className='fa fa-shield'></i> Guards
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/workers'>
              <i className='fa fa-briefcase'></i> Workers
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
  if (user.role === 'Member') {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <nav className='navbar navbar-expand-lg navbar-cz'>
        <Link to='/dashboard/desc' className='navbar-brand'>
          Dashboard
        </Link>
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav'>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/billsmembers'
            >
              <i className='fa fa-file-text'></i> Your Bills
            </NavLink>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/complainsmembers'
            >
              <i className='fa fa-meh-o'></i> Your Complains
            </NavLink>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/fundsmembers'
            >
              <i className='fa fa-money'></i> Your Funds
            </NavLink>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/adsmembers'
            >
              <i className='fa fa-audio-description'></i> Your Ads
            </NavLink>
          </div>
        </div>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default SideBar;
