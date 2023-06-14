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
import GetallBabyMenu from './GetallBabyMenu';
import AddReqeust from './AddReqeust';
import Opinion from './Opinion';
import About from './About';
import BabyStack from './BaByStack'
import Example from './carusel.js'
const App = () => (


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/BabySiterGetById" element={<BabySiterGetById />} />
      <Route path="/RegisterBabySiter" element={<RegisterBabySiter />} />
      <Route path="/SearchBabySiterGetById" element={<SearchBabySiterGetById />} />
      <Route path="/RegisterSearchBabySiter" element={<RegisterSearchBabySiter />} />
      <Route path="/PostTime" element={<PostTime />} />
      <Route path="/GetallBaby" element={<GetallBaby />} />
      <Route path="/AddReqeust" element={<AddReqeust />} />
      <Route path="/Opinion" element={<Opinion />} />
      <Route path="/About" element={<About />}></Route>
      <Route path="/GetallBabyMenu" element={<GetallBabyMenu />}></Route>
      <Route path="/BaByStack" element={<BabyStack />}></Route>
    </ Routes>
    {/* <Example/> */}
  </BrowserRouter>



)


export default App;
