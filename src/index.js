/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// ReactDom.render(<App />, document.querySelector('#root'))
  
  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const jsxLink = <a href='https://reactjs.org'>linkid</a>

// ReactDom.render(jsxLink, document.querySelector('#root'))