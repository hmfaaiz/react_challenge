import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Component1,Component2} from './components/TwoComponent';
import ClickEvent from './components/ClickEvent';
import Form from './components/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    {/* <Component2/>
    <Component1/> */}
     {/* <ClickEvent/> */}
  <Form/>
  </React.StrictMode>
);

