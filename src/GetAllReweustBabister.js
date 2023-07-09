import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";



import React from 'react';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import "./Menu.css";
import "./GetAllReweustBabister.css";

import { ReactComponent as D } from "./pn.svg";
import { ReactComponent as N } from "./Aboutnew.svg"

import { ReactComponent as L } from "./Menulogoo.svg";
import { ReactComponent as Pic } from "./homePic.svg"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddReqeust from "./AddReqeust";
import { Stack } from "@mui/material";
import {Pagination} from "@mui/material";
import BaByStack from "./BaByStack";
import PostTime from "./PostTime";



export default function GetAllReweustBabister() {
    const navigate = useNavigate();
    const location = useLocation();

    const [arr, setArr] = useState([{day :""}])
    const numbers = [1, 2, 3, 4, 5];
    const { babysiterId } = location?.state;
    const idh = () => {
        var f;
        alert(babysiterId)
        //setTimeToAdd({ ...timeToAdd, timeOfDay: [...timeToAdd.timeOfDay," e.target.value"] })
        // const [timeToAdd, setTimeToAdd] = useState({ day: [], timeOfDay: [], neighborhood: [], rate: "" })
        // <select defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}>

        try {

          axios.get(`https://localhost:44312/api/Time/Get?BabysiterId=${babysiterId}`)
            .then(response => {
                setArr(response.data)
                getbabister();
            })
             alert(arr);
        }
       
        catch (err) {
          console.error(err);
        }

      }
      const getbabister = async () => {


        try {

//             await axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${password}&Email=${email}`)
//             .then(response => {
// //                 const babysiterr = {FirstName:firstName,LastName:lastName
// //                     ,Phone:phone,Age:age1, Email:email,Password:password,Description:description};
                  
// // navigate("/PostTime", { state: {babysiter:babysiter}}); 
             
//             })
            
        }
       
        catch (err) {
          console.error(err);
        }

      }
      const PostTime = () => {

        navigate("/PostTime")
      }
    
    return (
  
        <div> 
<h1>ttttttt</h1>
<button onClick={idh}>id</button>
<button onClick={PostTime}>PostTime</button>
{numbers.map((number) =>
  <li>{number}</li>
)}

{arr.map((data)=>
<div className="getall">  {data.day}
{data.partOfDay}
{data.price}
</div>


)}
         
        </div> );

};

