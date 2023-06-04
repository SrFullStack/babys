import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import React from 'react';
import "./GetallBaby.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactComponent as T } from "./telphoe.svg";
import { ReactComponent as F } from "./Menuframe.svg";
import { ReactComponent as M } from "./GetAllBabyMail.svg";

// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddReqeust from "./AddReqeust";

// const Time = ({ babysitterTime }) => <>{babysitterTime.map((t) => <Typography>{t.day}</Typography>)}</>


export default function GetallBaby() {
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
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
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
 
    setBabysittersBySearch(filteredByPrice)
    // const filter
 
}

   
    const RegisterSearchBabySiter=()=>{
        navigate("/SearchBabySiterGetById")
      }
    return (<div>
      
<div id="Carousel" >
   <Carousel  swipeable={false}
    // height='145%'
    // width='40%'
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
       
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
       
        {babysittersBySearch.map((t) =>{

   
return (
  <Card id="cd"  sx={{ maxWidth: 200, maxHeight: 200 }}>
     
  <CardContent  >
    <Typography gutterBottom variant="h5" component="div">
      
    <p id="pid">{t.firstName} {t.lastName}</p>
    <div id="fs"><F></F></div>
    
    <p id="f">רמת שלמה</p>
    <div id="T"><T></T></div>
<p id="pt">{t.phone}</p>
<div id="ma"><M></M></div>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {/* {t.firstName}  {t.age} */}
   
      {/* {t.Neighborhood.map((t) => <Typography>neighborhood:{t.neighborhoodId}</Typography>)} */}
    

    </Typography>
  
  </CardContent>
  <CardActions>
   
  </CardActions>
</Card>
        )})}

    </Carousel>
    </div>


        
         
         </div>);

};
