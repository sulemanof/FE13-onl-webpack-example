import React from 'react';
import './Button.scss';

export const Button = ({ name, surname, active }) => (
  <button className={`button ${active ? 'active' : ''}`}>
    {name}, {surname}
  </button>
);
