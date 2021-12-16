import React from 'react';
import { MyLink } from '../components/MyLink';

export const NavigationPanel = () => (
  <nav>
    <MyLink to="/" text="Home" />
    <MyLink to="users" text="Users" />
    <MyLink to="shop" text="Shop" />
    <MyLink to="currencyConverter" text="Currency" />
    <MyLink to="clicker" text="Clicker" />
    <MyLink to="teams" text="Teams" />
    <MyLink to="todos" text="Todos" />
  </nav>
);
