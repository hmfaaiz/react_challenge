import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {Component1,Component2} from './components/TwoComponent';
import ClickEvent from './components/ClickEvent';
import Form from './components/Form';
import Login from './components/Login';
import UseEffect from './components/UseEffect';
import Bootstrap from './components/Bootstrap';
import Array from './components/Array';
import ListWithinList from './components/ListWithinList';
import UseMemo from './components/UseMemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    {/* <Component2/>
    <Component1/> */}
     {/* <ClickEvent/> */}
  {/* <Form/> */}
  {/* <Login/> */}
  {/* <UseEffect/> */}
  {/* <Bootstrap/> */}
  {/* <Array/> */}
  {/* <ListWithinList/> */}
  <UseMemo/>

  </React.StrictMode>
);

