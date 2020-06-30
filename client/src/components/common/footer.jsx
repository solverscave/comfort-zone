import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='p-5 bg-cz text-white'>
      <div className='row'>
        <div className='col-4 '>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus sit
            amet risus sollicitudin tristique sed vitae metus. Vestibulum
            ultricies ligula vitae porta blandit.
          </p>
        </div>
        <div className='col-4'>
          <h3>Contact us</h3>
          <p>Address: Housing Society, Rawalpindi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
