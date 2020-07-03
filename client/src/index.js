import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Client from './client';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from 'react-router-scroll-top';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Client />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
