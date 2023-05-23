
import { useState, useEffect } from "react";

import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";
import { ReactComponent as Pic } from "./homePic.svg"
import { ReactComponent as P } from "./Menu.svg";
import { ReactComponent as PT } from "./MenuT.svg";
import { ReactComponent as PM  } from "./MenuM.svg";
import { ReactComponent as TM  } from "./MenuTM.svg";
import { ReactComponent as V  } from "./MenuV.svg";

import axios from "axios";
export default function Menu() {
  const navigate = useNavigate();
  const [RequsetSearchBabysiter, setRequsetSearchBabysiter] = useState([]);

  const [f, setf] = useState(false);

  useEffect(() => {
  RequsetSearchBabysiterr()

 }, []);

const RequsetSearchBabysiterr= async()=>{

  try {


   await axios.get(`https://localhost:44312/api/RequsetSearchBabysiter/GetAll`)
        .then(response=> {
     //const y= response.data.length;
     //setRequsetSearchBabysiter(response.data)
     setRequsetSearchBabysiter(response.data)

         //pizintion
//matiralui
//primereact
  //httpsmui.commaterial-uireact-pagination        
          //   // console.log(response.data[index].day);
          //  // alert(response.data[index].day)
          // }
        })
;



}


catch (err) {
    console.error(err);
}
}
  const babysiter = () => {
   
    navigate("/BabySiterGetById", { replace: false })
  }
  const searchBabySiter = () => {
    navigate("/SearchBabySiterGetById", { replace: false })
  }
  
  const About = () => {
   
    navigate("/About", { replace: false })
  }
  return (<div>     
  
  <div id="backGround"></div>
   <Pic id="pic"></Pic> 
   <h1 id="Caption">בכל מקום</h1>
 
   <h1 id="c">אנחנו בשבילך</h1>
   {/* {RequsetSearchBabysiter.map((t) =>{t.day})} */}
{/* 
   {RequsetSearchBabysiter.map((rs) => {
    <h1>  fffff {rs.day} </h1>

         })
        } */}
   <div id="towbt">
   <button id="btbabisiter" onClick={babysiter}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
    <button onClick={RequsetSearchBabysiterr}>חיפוש RequsetSearchBabysiterr</button>


    
   </div>
   <div>
   <PT id="PT"></PT>
   <div>
   <P id="P"></P>
   {/* <button id="About"onClick={About}>קרא עוד</button> */}
   <button id="About"onClick={About}><p id="p">קרא עוד</p> </button>

   </div>
 


   </div>
   <div id="news"></div>
   <div id="mail">
    <PM id="PM"></PM>
    <V id="V"></V>
    <TM id="TM"></TM>
   </div>
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