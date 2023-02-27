import logo from './logo.svg';
import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Menu from './Menu';
import BabySiterGetById from './BabySiterGetById';
const App = () => (


  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Menu/>} /> */}
    <Route path="/" element={<BabySiterGetById/>} />
    BabySiterGetById
  </ Routes>
</BrowserRouter>



)


export default App;
