import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.querySelector('#app');

ReactDOM.render(<App />, container);