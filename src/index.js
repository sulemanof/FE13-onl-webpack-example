import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { App } from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { todosReducer } from './features/todos/todosSlice';
import { clickerReducer } from './features/clicker/clickerSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: clickerReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
