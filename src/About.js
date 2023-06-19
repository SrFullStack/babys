
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//https://www.npmjs.com/package/react-multi-carousel
//
import { ReactComponent as O } from "./logocircel.svg";

import { ReactComponent as E } from "./em.svg";
import { ReactComponent as K } from "./kod.svg";

import { ReactComponent as R } from "./kitov.svg";

import { useNavigate, useLocation } from "react-router-dom";

import "./About.css";
import axios from "axios";
import { red } from "@mui/material/colors";
import GetallBaby from "./GetallBaby";
import { ReactComponent as A } from "./Aboutab.svg"
import { ReactComponent as L } from "./Aboutalino.svg"
import { ReactComponent as P } from "./Aboutp.svg"
import { ReactComponent as T } from "./Abouttpp.svg"
export default function About() {
  
  const navigate=useNavigate();
 
  const babysiterr = () => {
     
    navigate("/BabySiterGetById", { replace: false })
  }
  const searchBabySiter = () => {
    navigate("/SearchBabySiterGetById", { replace: false })
  }
  

  return (<div>     
 <O id='O'></O>
        <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
   
    
   </div >
  

<div id='divblu'>
   <a id="as" href="http://localhost:3000/About">?זקוק לעזרה</a>
   <a id="href" href="http://localhost:3000/About">אודותינו</a>
   <R id='r'></R>
  
   </div>
      
  
   <div id="cx"><A></A></div>

<div id="sgol"></div>
<div id="alino"><L></L></div>
<P id="picture"></P>
<T id="tip"></T>
    </div>);
};

      // return <Card sx={{ minWidth: 2 }} sx={{color:'red'}}   sx={{ border: 15 }}sx={{  width: ['100%', '50%', '25%'], }}
        //     return <Card  sx={{
        //     div: {
        //           backgroundColor: 'red',
        //           border: 5,
        //           width: ['100%', '50%', '25%'],
        //           padding: 3,
        //         },
        //       }}
        //      >
        //         <CardContent>
        //             <Typography sx={{ fontSize: 12 }}   gutterBottom>
        //                firstName: kkk
        //                <br></br>
        //              age:  
        //             </Typography>
                    
                   
                 
        //         </CardContent>
        //     </Card>