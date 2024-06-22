import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {NavbarProvider} from './Components/NavbarContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarProvider>
    <App />
  </NavbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

