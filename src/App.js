import logo from './logo.svg';
import { BrowserRouter, renderMatches, Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Menu from './Menu';
import BabySiterGetById from './BabySiterGetById';

import RegisterBabySiter from './RegisterBabySiter';
import SearchBabySiterGetById from './SearchBabySiterGetById';
import RegisterSearchBabySiter from './RegisterSearchBabySiter'; 
import PostTime from './PostTime';
import GetallBaby from './GetallBaby';
import AddReqeust from './AddReqeust'; 
import Opinion from './Opinion';
import About from './About';
const App = () => (


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Menu/>} />
    <Route path="/BabySiterGetById" element={<BabySiterGetById/>} />
    <Route path="/RegisterBabySiter" element={<RegisterBabySiter/>} />
    <Route path="/SearchBabySiterGetById" element={<SearchBabySiterGetById/>} />
    <Route path="/RegisterSearchBabySiter" element={<RegisterSearchBabySiter/>} />
    <Route path="/PostTime" element={<PostTime/>} />
    <Route path="/GetallBaby" element={<GetallBaby/>} />
    <Route path="/AddReqeust" element={<AddReqeust/>} />
    <Route path="/Opinion" element={<Opinion/>} />
    <Route path="/About" element={<About/>}></Route>

  </ Routes>
</BrowserRouter>



)


export default App;
