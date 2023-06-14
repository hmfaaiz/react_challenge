import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { Component1, Component2 } from './components/TwoComponent';
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
import User from "./components/User"
import Filter from "./components/Filter"
import Contact from "./components/Contact"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Viavideo from './components/Viavideo';
import Viacall from './components/Viacall';

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
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/*" element={<h1>Page not found </h1>} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/contact/" element={<Contact />} >
          <Route path="viavideo" element={<Viavideo />} />
          <Route path="viacall" element={<Viacall />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
);

