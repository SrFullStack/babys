import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


// or

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
import "./GetallBabyMenu.css";

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

// const Time = ({ babysitterTime }) => <>{babysitterTime.map((t) => <Typography>{t.day}</Typography>)}</>


export default function GetallBabyMenu() {
    const [price, Setprice] = useState(-1)
    const [age, SetAge] = useState(-1)
    const [PartOfDay, SetPartOfDay] = useState("")
    const [neighborhood, Setneighborhood] = useState("")
    const [day, SetDay] = useState("")
    const navigate=useNavigate();
    // const [babySitters, setBabySitters] = useState([{BabysiterId:-1,FirstName:"",LastName:"",Age:0,Email:"",Password:"",Description:"",Phone:""
    // ,times:[{TimeId:0,BabysiterId:0,Day:"",PartOfDay:"",Price:0}],NeighborhoodBabysiter:[{NeighborhoodBabysiterId:0,BabysiterId:0,NeighborhoodId:0}]}])
    const [baby, setbaby] = useState([])
    const [loading, setLoading] = useState(false);
    const [babySitters, setBabySitters] = useState([]);
    const [babysittersBySearch, setBabysittersBySearch] = useState([])

    const [size1, setSize1] = useState(1);
    const countOfLfs = 4;
    const [smallAd, setSmallAd] = useState(babysittersBySearch.slice(0, countOfLfs));
  
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    useEffect(() => {


        try {
            const updateUsers = [];
            var babySiterList = [];
            var time = [];
            var Neighborhood = []

            axios.get(`https://localhost:44312/api/BabySiter/GetAll`)
                .then(async (response) => {
                    babySiterList = response.data;
                    for (let index = 0; index < response.data.length; index++) {
                        let id = response.data[index].babysiterId
                        time = await axios.get(`https://localhost:44312/api/Time/Get?BabysiterId=${id}`)
                            .then(response => response.data)
                        Neighborhood = await axios.get(`https://localhost:44312/api/NeighborhoodBabysiter/Get?id=${id}`)
                            .then(respon => respon.data)

                        babySiterList[index].Neighborhood = Neighborhood;
                        babySiterList[index].time = time


                        console.log(babySitters);
                    }
                    setBabySitters(babySiterList);
                    setBabysittersBySearch(babySiterList);

                    // setBabySitters((prev)=>[
                    //         ...b
                    //     ]);
                });


        }


        catch (err) {
            console.error(err);
        }

    }, []);

const filter=()=>{
    // if (!price) setBabysittersBySearch(babySitters)
    const filteredByPrice = babySitters.filter(bs => (bs.time.some(t => t.price <= price)||price==-1)&&((bs.age==age ||age==-1))&& (bs.time.some(t => t.day <= day || day==""))
    &&((bs.time.partOfDay==PartOfDay ||PartOfDay=="")))
    // const filteredByPrice = babySitters.filter(bs => (bs.time.some(t => t.price <= price)||price==-1)&&((bs.age==age ||age==-1))
    // )
    
    // && ((bs.time.some(t => t.day <= day)||day==null ) )&&(bs => bs.age=age)||age==null)
    setBabysittersBySearch(filteredByPrice)
    // const filteredByPrice = babySitters.filter(bs => (bs.time.some(t => t.price <= price) || price==null))
    
    
    // setBabysittersBySearch(filteredByPrice)
    // const filteredByAge = babySitters.filter(bs => bs.age=age)
    // setBabysittersBySearch(filteredByAge)
    // const filteredByDay = babySitters.filter(bs => bs.time.some(t => t.day <= day))
    // setBabysittersBySearch(filteredByDay)
    // const filteredByPartOfDay = babySitters.filter(bs => bs.time.some(t => t.price <= price))
    // setBabysittersBySearch(filteredByPartOfDay)
    // setBabysittersBySearch(filteredByAge,filteredByPrice,filteredByDay,filteredByPartOfDay)
    // console.log(babysittersBySearch);
}

    // useEffect(() => {       
    //      if (!price) setBabysittersBySearch(babySitters)
    //     const filteredByPrice = babySitters.filter(bs => bs.time.some(t => t.price <= price))
        
    //     const filteredByAge = babySitters.filter(bs => bs.age=age)
    //     setBabysittersBySearch(filteredByAge,filteredByPrice)
    //     const filteredByDay = babySitters.filter(bs => bs.time.some(t => t.day <= day))
    //     setBabysittersBySearch(filteredByDay)
    //     const filteredByPartOfDay = babySitters.filter(bs => bs.time.some(t => t.price <= price))
    //     setBabysittersBySearch(filteredByPartOfDay)
    //     // const filteredByPrice = babySitters.filter(bs => bs.time.some(t => t.price <= price))
    //     // setBabysittersBySearch(filteredByPrice)
    // }, [price,age,PartOfDay,day,neighborhood])
  
    const RegisterSearchBabySiter=()=>{
        navigate("/SearchBabySiterGetById")
      }
      const babysiterr = () => {
   
        navigate("/BabySiterGetById", { replace: false })
      }
      const searchBabySiter = () => {
        navigate("/SearchBabySiterGetById", { replace: false })
      }

      const handleChangePagination = (event,value) => {
        setSize1(value)
        let x = babysittersBySearch.slice((size1 - 1) * countOfLfs, size1 * countOfLfs);
        setSmallAd(x);
      };
    
    
    return (
  
        <div> 
            <div id="w"><L id="L"></L>
   <div id="towbt">
  <button id="btbabisiterget" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
 
   
   </div></div>    
  
   <div id="div">
 

   {/* <span class="sp">חיפוש</span> */}
     <div id="g">חיפוש</div>
     {/* תמונה לתןף */}
     {/* <D></D> */}
     <input id="price" placeholder=" price" className="input" label="price" onChange={(e) => Setprice(e.target.value)} /><br></br>
     <input id="age" className="input" type="number" placeholder='age' onChange={(e) => SetAge(e.target.value)} /><br></br>
     <input id="day" className="input" type="text" placeholder='day' onChange={(e) => SetDay(e.target.value)} /><br></br>
     <input id="part" className="input" type="text" placeholder='PartOfDay' onChange={(e) => SetPartOfDay(e.target.value)} /><br></br>
         <input id="ne" className="input" type="text" placeholder='neighborhood' onChange={(e) => Setneighborhood(e.target.value)} /><br></br>   
         <button id="filter" onClick={filter}>חפש</button>
   </div>
<div id="t"> תוצאות שהתקבלו</div>

      <div ><p id="za">חדשים</p></div>
   
      {smallAd.length > 0 ? (

smallAd.map((data) => (

 <BaByStack obj={data}></BaByStack>
  

))
) : (
<Stack sx={{ width: "100%" }} spacing={2}>
  <h1>hhh</h1>
</Stack>
)}

<Stack>
    <div id="pagination">
        חחחחחח
<Pagination 
  count={Math.ceil(babysittersBySearch.length / countOfLfs)}
  color="secondary"
  onChange={handleChangePagination}
/></div>
</Stack>



         
         </div>);

};

const top100Films = [
    { label: '2'},
    { label: '10'},
]