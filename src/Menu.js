
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
import { ReactComponent as Pic } from "./homePic.svg"
import { ReactComponent as P } from "./Menu.svg";
import { ReactComponent as PT } from "./MenuT.svg";
import { ReactComponent as PM  } from "./MenuM.svg";
import { ReactComponent as TM  } from "./MenuTM.svg";
import { ReactComponent as V  } from "./MenuV.svg";
import { ReactComponent as L } from "./Menulogoo.svg";
import { ReactComponent as R } from "./kitov.svg";

import axios from "axios";
import { ReactComponent as A } from "./MenuAb.svg";

import { red } from "@mui/material/colors";
import GetallBaby from "./GetallBaby";
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

const [email, setEmail] = useState("");
const [babysiter, setbabysiter] = useState("");
const checked=()=>{
  if(email==""){
    alert("נא למלא מייל מתאים")
  }
 
}


const UpdateOpinion =async ()=>{
  checked();
    try{
      
      await axios.get(`https://localhost:44312/api/BabySiter/GetByEmail?Email=${email}`)
         .then(async response =>{
            if(response.data.babysiterId!=undefined)
         {
        var NumOfOpinion=response.data.numOfOpinion+1;
              //var age =response.data.age+1;
                         const babysiter=({babysiterId:response.data.babysiterId,FirstName:response.data.firstName,LastName:response.data.lastName,Phone:response.data.phone,Age:response.data.age, Email:response.data.email,Password:response.data.password,Description:response.data.description,NumOfOpinion:NumOfOpinion});
           AddOpinion(babysiter);
        }
         else{
            alert("אין כזה ביביסיטר נסה שוב") 
         }
           
         })
        
     }        
     
     catch (err) {
         console.error(err);
     }
 }
 const AddOpinion =async (babysiter)=>{
    try{                           
        await axios.put(`https://localhost:44312/api/BabySiter/Put?id=${babysiter.babysiterId}`,babysiter)
        .then(response =>{ 
            alert("תודה רבה על ההמלצה החמה") 
            EmailForBenefits(babysiter);
      })
      }
      catch(err){
         console.log(err);
      }
 }

  const EmailForBenefits=async (babysiter)=>{
   if(babysiter.NumOfOpinion>10){
    axios.get( `https://localhost:44312/api/RequsetSearchBabysiter/GetEmail?email=${email}`)
        .then(res => {
            const data1 = res.data;
            ResetBenefits(babysiter)
            alert("נשלח מייל")
        })
    }
    else{
        alert("hhh")
    }
    }
 

 const ResetBenefits =async (babysiter)=>{       
        try{  
            var babysiterResert=({babysiterId:babysiter.babysiterId,FirstName:babysiter.FirstName,LastName:babysiter.LastName,Phone:babysiter.Phone,Age:0, Email:babysiter.Email,Password:babysiter.Password,Description:babysiter.Description});                         
            await axios.put(`https://localhost:44312/api/BabySiter/Put?id=${babysiter.babysiterId}`,babysiterResert)
            .then(response =>{ 
               
          })
          }
          catch(err){
             console.log(err);
          }
     
     }
  const babysiterr = () => {
   
    navigate("/BabySiterGetById", { replace: false })
  }
  const searchBabySiter = () => {
    navigate("/SearchBabySiterGetById", { replace: false })
  }
  
  const About = () => {
   
    navigate("/About", { replace: false })
  }
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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
  return (<div>     
  
  <div id="backGround"></div>
  <L id="L"></L>
   <Pic id="pic"></Pic> 
   <h1 id="Caption">בכל מקום</h1>
 
   <h1 id="c">אנחנו בשבילך</h1>
   {/* {RequsetSearchBabysiter.map((t) =>t.requsetSearchBabysiterId)} */}
{/* 
   {RequsetSearchBabysiter.map((rs) => {
    <h1>  fffff {rs.day} </h1>

         })
        } */}
   <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
    {/* <button onClick={RequsetSearchBabysiterr}>חיפוש RequsetSearchBabysiterr</button> */}


    
   </div >
   <div id="carousel">
   <Carousel  swipeable={false}
    // height='145%'
    // width='40%'
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
       
        {RequsetSearchBabysiter.map((t) =>{
// return <Card  sx={{
//   div: {
//         backgroundColor: 'red',
//          border: 5,
//         //  width: ['10%', '10%', '10%'],
         
//         // padding: 3,
//         // width: '20%',
//         // height: '40%'
        
//     },
//     }}>
   
return (
  <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
     
    <CardContent>
      <div></div>
    <Typography gutterBottom variant="h5" component="div"  >
        <div style={{ textAlign: 'center' }}>
          דרושה ביביסיטר
        </div>    </Typography>
    <Typography variant="body2" color="text.secondary">
     <div style={{ textAlign: 'right' }}>
  {t.day} יום 
  <br/>
  {t.partOfDay } חלק ביום 
  <br/>
  תעריף {t.price}
</div>

    
     <button id="m" onClick={babysiterr}>להגשת מועמדות</button>

    </Typography>
  </CardContent>
  <CardActions>
   
  </CardActions>
</Card>
        )})}

        {/* <Card  sx={{
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
                       firstName: 
                       <br></br>
                     age:  
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}   gutterBottom>
                       firstName: 
                       <br></br>
                     age:  
                    </Typography>
                 hhhh
                </CardContent>
            </Card> */}
    </Carousel>
    </div>
   <div>
   <PT id="PT"></PT>
   <div>
   <P id="P"></P>
   {/* <button id="About"onClick={About}>קרא עוד</button> */}
   <button id="About"onClick={About}>קרא עוד </button>

   </div>


   </div>
   <div id="news"> <GetallBaby></GetallBaby></div>
   <div id="mail">
    <PM id="PM"></PM>
    <V id="V"></V>
    <TM id="TM"></TM>
    <input id="inputemail" className="input"  placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
   <button id="up" onClick={UpdateOpinion}>ההמלצה</button>
   <a id="aml" href="http://localhost:3000/Opinion">לדף ההמלצה</a>

   </div>
   <div id="lmata">
    <div id="LO">   <L></L></div>

   <a id="ac" href="http://localhost:3000/About">?זקוק לעזרה</a>
   <a id="href" href="http://localhost:3000/About">אודותינו</a>
   <R id="r"></R>
   {/* <A id="ab"></A> */}
   {/* <div id="span">אופן השירות</div> */}
   {/* <p id="span">שירות הלוקות</p> */}
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