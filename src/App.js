import logo from './logo.svg';
import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Menu from './Menu';
import BabySiterGetById from './BabySiterGetById';

import RegisterBabySiter from './RegisterBabySiter';
import SearchBabySiterGetById from './SearchBabySiterGetById';
import RegisterSearchBabySiter from './RegisterSearchBabySiter'; 
const App = () => (


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Menu/>} />
    <Route path="/BabySiterGetById" element={<BabySiterGetById/>} />
    <Route path="/RegisterBabySiter" element={<RegisterBabySiter/>} />
    <Route path="/SearchBabySiterGetById" element={<SearchBabySiterGetById/>} />
    <Route path="/RegisterSearchBabySiter" element={<RegisterSearchBabySiter/>} />
    
  </ Routes>
</BrowserRouter>



)


export default App;
