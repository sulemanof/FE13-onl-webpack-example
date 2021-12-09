import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { Button, Dropdown } from 'react-bootstrap';
import { App } from './components/App';
import { Clock } from './components/shared/clock/Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'),
);
