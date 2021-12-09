import React from 'react';
import { NavigationPanel } from './NavigationPanel';
import { Pages } from './Pages';

export const App = () => (
    <div className="wrapper">
      <NavigationPanel />
      <Pages />
    </div>
);
