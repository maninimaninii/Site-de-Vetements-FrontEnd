import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AcceuilContextProvider from './Context/AcceuilContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AcceuilContextProvider>
    <App/>
  </AcceuilContextProvider>

);

