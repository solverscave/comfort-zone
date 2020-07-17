import React from 'react';

export default function Footer() {
  return (
    <footer className='p-5 bg-cz text-white'>
      <div className='row'>
        <div className='col-4 '>
          <h3>About</h3>
          <p>
            Comfort Zone is a facilitating system, specifically designed for the
            Airport Housing Society, Rawalpindi. Using this system. Admin can
            add users, get their complains, keep an eye on the bill payments,
            accept or reject their funding compaigns etc. Similarly, society
            members can print their bills, submit complains, use forum to
            discuss issues, post an ad or a funding compain.
          </p>
        </div>
        <div className='col-4'>
          <h3>Contact us</h3>
          <p>Address: Housing Society, Rawalpindi</p>
        </div>
      </div>
    </footer>
  );
}
