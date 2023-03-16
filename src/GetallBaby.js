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

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// const Time = ({ babysitterTime }) => <>{babysitterTime.map((t) => <Typography>{t.day}</Typography>)}</>


export default function GetallBaby() {
    const [price, Setprice] = useState(-1)
    const [age, SetAge] = useState(-1)
    const [PartOfDay, SetPartOfDay] = useState("t")
    const [neighborhood, Setneighborhood] = useState("t")
    const [day, SetDay] = useState("t")
   
    // const [babySitters, setBabySitters] = useState([{BabysiterId:-1,FirstName:"",LastName:"",Age:0,Email:"",Password:"",Description:"",Phone:""
    // ,times:[{TimeId:0,BabysiterId:0,Day:"",PartOfDay:"",Price:0}],NeighborhoodBabysiter:[{NeighborhoodBabysiterId:0,BabysiterId:0,NeighborhoodId:0}]}])
    const [baby, setbaby] = useState([])
    const [loading, setLoading] = useState(false);
    const [babySitters, setBabySitters] = useState([]);
    const [babysittersBySearch, setBabysittersBySearch] = useState([])

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
    const filteredByPrice = babySitters.filter(bs => (bs.time.some(t => t.price <= price)||price==-1)&&((bs.age==age ||age==-1))&& (bs.time.some(t => t.day <= day || day=="t"))
    &&((bs.time.partOfDay==PartOfDay ||PartOfDay=="t")))
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

    return (<div>
        {/* {babySitters.map((babySiter, index) => <div key={index}>{babySiter.firstName}שם:{babySiter.age}age{babySiter.time.map((t, i) => <div key={i}>{t.day}יום:</div>)}
            {babySiter.Neighborhood.map((n, i) => <div key={i}>{n.neighborhoodId}id:</div>)}</div>)} */}
        {babysittersBySearch.map((bs) => {
            // return <Card sx={{ minWidth: 2 }} sx={{color:'red'}}   sx={{ border: 15 }}sx={{  width: ['100%', '50%', '25%'], }}
            return <Card  sx={{
            div: {
                  backgroundColor: 'red',
                  border: 5,
                  width: ['100%', '50%', '25%'],
                  padding: 3,
                },
              }}
             >
                <CardContent>
                    <Typography sx={{ fontSize: 12 }}   gutterBottom>
                        {bs.firstName}
                      <h1>age</h1>  {bs.age}
                    </Typography>
                    {bs.time.map((t) => <Typography>{t.day}</Typography>)}
                    {bs.Neighborhood.map((t) => <Typography>{t.neighborhoodId}</Typography>)}
                 
                </CardContent>
            </Card>
        })}



<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 200 }}
renderInput={(params) => <TextField {...params} label="price" onChange={(e) => Setprice(e.target.value)}/>}

/>

        {/* <input className="input" type="number" placeholder='price' onChange={(e) => Setprice(e.target.value)} /><br></br> */}
        <input className="input" type="number" placeholder='age' onChange={(e) => SetAge(e.target.value)} /><br></br>
        <input className="input" type="text" placeholder='day' onChange={(e) => SetDay(e.target.value)} /><br></br>
        <input className="input" type="text" placeholder='PartOfDay' onChange={(e) => SetPartOfDay(e.target.value)} /><br></br>
         <input className="input" type="text" placeholder='neighborhood' onChange={(e) => Setneighborhood(e.target.value)} /><br></br>   
         <button onClick={filter}>חפש</button>
         </div>);

};

const top100Films = [
    { label: '2'},
    { label: '10'},
]