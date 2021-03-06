import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

axios.defaults.baseURL = 'https://breakingbadapi.com/api'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);