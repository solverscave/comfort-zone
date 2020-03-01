import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ user }) => {
	return (
		// <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
		<nav className='navbar navbar-expand-lg navbar-cz sticky-top'>
			<Link to='/' className='navbar-brand'>
				<img src={require('../../assets/img/logo-01.png')} alt='' />
			</Link>
			<div className='collapse navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink className='nav-item nav-link' to='/billing'>
						Billing
					</NavLink>
					<NavLink className='nav-item nav-link' to='/forum'>
						Forum
					</NavLink>
					<NavLink className='nav-item nav-link' to='/complaint'>
						Complaint
					</NavLink>
					<NavLink className='nav-item nav-link' to='/fundraising'>
						Fundraising
					</NavLink>
					<NavLink className='nav-item nav-link' to='/advertisement'>
						Advertisement
					</NavLink>
					{/* <NavLink className='nav-item nav-link' to='/facility-corner'>
						Facility Corner
					</NavLink>
					<NavLink className='nav-item nav-link' to='/garbage-tracking'>
						Garbage Tracking
					</NavLink>
					<NavLink className='nav-item nav-link' to='/security'>
						Security
					</NavLink>
					<NavLink className='nav-item nav-link' to='/elections'>
						Elections
					</NavLink>
					<NavLink className='nav-item nav-link' to='/tender'>
						Tender
					</NavLink> */}
					<NavLink className='nav-item nav-link' to='/dashboard'>
						Dashboard
					</NavLink>
					{!user && (
						<React.Fragment>
							<NavLink className='nav-item nav-link' to='/login'>
								Login
							</NavLink>
							<NavLink className='nav-item nav-link' to='/register'>
								Register
							</NavLink>
						</React.Fragment>
					)}
					{user && (
						<React.Fragment>
							<NavLink className='nav-item nav-link' to='/profile'>
								{user._id}
							</NavLink>
							<NavLink className='nav-item nav-link' to='/logout'>
								Logout
							</NavLink>
						</React.Fragment>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
