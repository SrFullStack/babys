
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import React from 'react';
import Stack from '@mui/material/Stack';
import "./BaByStack.css";
import { ReactComponent as T } from "./telphoe.svg";
//https://www.npmjs.com/package/react-multi-carousel
//
import { useNavigate, useLocation } from "react-router-dom";

export default function BaByStack(data) {
  

    // const s = () => {
    //    alert(data.obj.firstName)
    //   }

  

  return (<div>  
       <div  dir="rtl">
        <div id="cardd"> <p id="name">{data.obj.firstName} {data.obj.lastName}</p></div>
        <T></T>
         </div>
                      
                   
    










        


    </div>);
};