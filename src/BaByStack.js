
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import React from 'react';
import Stack from '@mui/material/Stack';
import "./BaByStack.css";
import { ReactComponent as T } from "./telphoe.svg";
import { ReactComponent as F } from "./Menuframe.svg";
//https://www.npmjs.com/package/react-multi-carousel
//
import { useNavigate, useLocation } from "react-router-dom";

export default function BaByStack(data) {
  

    const s = () => {

       alert(data.obj.neighborhoodId)
      }

  

  return (<div>  
       <div  dir="rtl">
        <div id="cardd"> <p id="name">{data.obj.firstName} {data.obj.lastName}</p></div>
        <div id="talphone">        <T></T>
</div>
<button  onClick={s}>חפש</button>
<div>kkkk{data.obj.Neighborhood.map((t) => {t.neighborhoodId})}
</div>
<div id="neboord"><F></F></div>

         </div>
                      
                   
    










        


    </div>);
};