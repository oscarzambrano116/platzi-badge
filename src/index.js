import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'


const container = document.querySelector('#app');

ReactDOM.render(
  <Badge 
    firstName={'Oscar'}
    lastName={'Zambrano'}
    jobTitle={'Frontend Engineer'}
    twitter={'oscarzz116'}
    avatarUrl={'https://www.gravatar.com/avatar?d=identicon'}
  />, 
container);