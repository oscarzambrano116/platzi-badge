import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badges from './pages/Badges'

const container = document.querySelector('#app');

ReactDOM.render(<Badges />, container);