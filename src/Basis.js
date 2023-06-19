import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBabySiterGetById.css";
import { ReactComponent as O } from "./logocircel.svg";
import { ReactComponent as T } from "./textt.svg";
import { ReactComponent as E } from "./em.svg";
import { ReactComponent as K } from "./kod.svg";
import { ReactComponent as P } from "./t.svg";
import { ReactComponent as R } from "./kitov.svg";
import { ReactComponent as L } from "./logo2.svg";
export default function Basis() {
    const navigate=useNavigate();
 
const babysiterr = () => {
   
  navigate("/BabySiterGetById", { replace: false })
}
const searchBabySiter = () => {
  navigate("/SearchBabySiterGetById", { replace: false })
}
    return (

      <div>
        <O id='O'></O>
        <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
   
    
   </div >
  

<div id='divblue'>
   <a id="as" href="http://localhost:3000/About">?זקוק לעזרה</a>
   <a id="href" href="http://localhost:3000/About">אודותינו</a>
   <R id='r'></R>
   <div  id="Lo"> <L></L></div>
  
   </div>
      
      </div>
    )
  }


