
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
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";
import "./About.css";
import axios from "axios";
import { red } from "@mui/material/colors";
import GetallBaby from "./GetallBaby";
import { ReactComponent as A } from "./Aboutab.svg"
import { ReactComponent as L } from "./Aboutalino.svg"
export default function About() {
  
  const babysiterr = () => {
   
    navigate("/BabySiterGetById", { replace: false })
  }
  const searchBabySiter = () => {
    navigate("/SearchBabySiterGetById", { replace: false })
  }
  

  return (<div>     
 
   <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
    {/* <button onClick={RequsetSearchBabysiterr}>חיפוש RequsetSearchBabysiterr</button> */}


   </div>
   <div id="cx"><A></A></div>

<div id="sgol"></div>
<div id="alino"><L></L></div>


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