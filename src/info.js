import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios
  .get('http://localhost:3001/api/persons')
  .then( response => {
    console.log(response);
  })

ReactDOM.render(
  <p>Phonebook has info </p>,
  document.getElementById('root')
);