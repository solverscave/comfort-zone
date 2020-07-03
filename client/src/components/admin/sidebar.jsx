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
            <NavLink className='nav-item nav-link' to='/dashboard/users'>
              Users
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dashboard/complains'>
              Complains
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dashboard/funds'>
              Funds
            </NavLink>
            <NavLink className='nav-item nav-link' to='/dashboard/ads'>
              Ads
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
            <NavLink className='nav-item nav-link' to='/dashboard/adsmembers'>
              Your Ads
            </NavLink>
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
          </div>
        </div>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default SideBar;
