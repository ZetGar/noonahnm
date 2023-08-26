import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameClass from './page/GameClass';
import CounterClass from './page/CounterClass';
import Counter from './page/Counter';
import Weather from './page/Weather';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
// import store from './redux/store'
import phonestore from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <Provider store={phonestore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
