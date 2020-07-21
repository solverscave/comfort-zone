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
              <i classname='fa fa-file-text'></i> Bills
            </NavLink>
            <NavLink
              className='nav-item nav-link mr-3'
              to='/dashboard/complains'
            >
              <i classname='fa fa-meh-o'></i> Complains
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/funds'>
              <i classname='fa fa-money'></i> Funds
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/ads'>
              <i classname='fa fa-audio-description'></i> Ads
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/users'>
              <i classname='fa fa-users'></i> Members
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/drivers'>
              <i classname='fa fa-truck'></i> Drivers
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/guards'>
              <i classname='fa fa-shield'></i> Guards
            </NavLink>
            <NavLink className='nav-item nav-link mr-3' to='/dashboard/workers'>
              <i classname='fa fa-briefcase'></i> Workers
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
            <NavLink className='nav-item nav-link' to='/dashboard/billsmembers'>
              Your Bills
            </NavLink>
            <NavLink
              className='nav-item nav-link'
              to='/dashboard/complainsmembers'
            >
              Your Complains
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dashboard/fundsmembers'>
              Your Funds
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dashboard/adsmembers'>
              Your Ads
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
