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
        <div className='col-4' style={{ textAlign: 'left' }}>
          <h3>Contact us</h3>

          <p style={{ color: 'white' }}>
            <i class='fa fa-home'></i> Comfort Zone
          </p>
          <p>
            <i class='fa fa-envelope'></i>{' '}
            <a href='#' style={{ color: 'white' }}>
              {' '}
              admin@comfortzone.pk
            </a>
          </p>
          <p style={{ color: 'white' }}>
            <i class='fa fa-mobile'></i> +923073794329
          </p>
          <p>
            <i class='fa fa-map-marker'></i> Airport Housing Society, Rawalpindi
          </p>
        </div>
        <div className='col-4' style={{ textAlign: 'left' }}>
          <h3>Location</h3>

          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26588.23371162599!2d73.11005456305617!3d33.5915708158957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec88546ee3e5%3A0x665cba7f5f2f0b08!2sAirport%20Housing%20Society%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1594907315523!5m2!1sen!2s'
              width='300'
              height='150'
              frameborder='0'
              style={{ border: 0 }}
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
