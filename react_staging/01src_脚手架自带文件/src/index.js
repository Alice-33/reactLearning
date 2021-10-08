import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面上的性能的
import reportWebVitals from './reportWebVitals';

//  <React.StrictMode>能够检查App以及App中所有的子组件写的东西是否合理，eg ref='demo'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
