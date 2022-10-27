import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Cookies from 'components/Cookies';
import Contacts from 'components/Contacts';
import Help from 'components/Help';
import Partnership from 'components/Partnership';
import Agreement from 'components/Agreement';
import Privacy from 'components/Privacy';
import AboutUs from 'components/AboutUs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TriPlanner">
      <App />
    </BrowserRouter>
    <BrowserRouter basename="/Cookies">
      <Cookies />
    </BrowserRouter>
    <BrowserRouter basename="/Contacts">
      <Contacts />
    </BrowserRouter>
    <BrowserRouter basename="/Help">
      <Help />
    </BrowserRouter>
    <BrowserRouter basename="/Partnership">
      <Partnership />
    </BrowserRouter>
    <BrowserRouter basename="/Agreement">
      <Agreement />
    </BrowserRouter>
    <BrowserRouter basename="/Privacy">
      <Privacy />
    </BrowserRouter>
    <BrowserRouter basename="/AboutUs">
      <AboutUs />
    </BrowserRouter>
  </React.StrictMode>
);
