import React from 'react';
import { MyLink } from './shared/MyLink';

export const NavigationPanel = () => (
  <nav>
    <MyLink to="/" text="Home" />
    <MyLink to="users" text="Users" />
    <MyLink to="shop" text="Shop" />
    <MyLink to="currencyConverter" text="Currency" />
    <MyLink to="teams" text="Teams" />
  </nav>
);
