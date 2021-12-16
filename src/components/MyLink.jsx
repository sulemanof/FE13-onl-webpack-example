import React from 'react';
import { NavLink } from 'react-router-dom';

const getStylesForLink = ({ isActive }) =>
  isActive
    ? { color: 'red', transition: '1s', backgroundColor: 'blue' }
    : undefined;

export const MyLink = ({ to, text }) => (
  <NavLink to={to} style={getStylesForLink}>
    {text}
  </NavLink>
);
