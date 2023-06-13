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
// import ListWithinList from './components/ListWithinList';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
   {/* <App/> */}
    {/* <Component2/>
    <Component1/> */}
     {/* <ClickEvent/> */}
  {/* <Form/> */}
  {/* <Login/> */}
  {/* <UseEffect/> */}
  {/* <Bootstrap/> */}
  {/* <Array/> */}
  {/* <ListWithinList/> */}
  {/* <UseMemo/> */}
  {/* <UseRef/> */}
  < BrowserRouter>
  <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>

      </>
);

