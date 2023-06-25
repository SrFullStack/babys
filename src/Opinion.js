
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React from 'react';
import Basis from "./Basis";
import { ReactComponent as TM  } from "./MenuTM.svg";
import "./Opinion.css";
import { ReactComponent as PM  } from "./MenuM.svg";
import { ReactComponent as V  } from "./MenuV.svg";
export default function Opinion() {
   
    const [email, setEmail] = useState("");
    const [babysiter, setbabysiter] = useState("");



    const UpdateOpinion =async ()=>{
        try{
          await axios.get(`https://localhost:44312/api/BabySiter/GetByEmail?Email=${email}`)
             .then(async response =>{
                if(response.data.babysiterId!=undefined)
             {
            
            var age =response.data.age+1;
               const babysiter=({babysiterId:response.data.babysiterId,FirstName:response.data.firstName,LastName:response.data.lastName,Phone:response.data.phone,Age:age, Email:response.data.email,Password:response.data.password,Description:response.data.description});
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
if(babysiter.Age>10){
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
    return (<div>
        <Basis></Basis>
        <div id="sgol">  <PM id="PMM"></PM><TM id="t"></TM><V id="v"></V>
        <input id="mmmail" className="input"  placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>

        </div>
    
   
   
   <button id="UpdateOpinion" onClick={UpdateOpinion}>ההמלצה</button>

    </div>);
};

