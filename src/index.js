import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuBar from './components/AppBar/AppBar';

ReactDOM.render(
  <React.StrictMode>
    <MenuBar />
  </React.StrictMode>,
  document.getElementById('root')
);

