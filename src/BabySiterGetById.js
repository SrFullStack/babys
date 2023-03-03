import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BabySiterGetById() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
   
    const BabySiterGetById =async ()=>{
   try{

      
     await axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${password}&Email=${email}`)
   
        .then(response =>{
          if(response.data.babysiterId!=undefined)
            alert(response.data.babysiterId+"אתה שמור במערכת");  
            else{
              alert("הקוד או השם משתמש שגואים אם אינך קים אתה רשאי להרשם")
            }
        })
      
    }        
    
    catch (err) {
        console.error(err);
    }
}
const RegisterBabySiter=()=>{
  navigate("/RegisterBabySiter")
}
    return (
      
      <div>

       <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
       <input className="input" type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
       <button onClick={BabySiterGetById}>GetById</button>
       <button onClick={RegisterBabySiter}>RegisterBabySiter</button>
      </div>
    )
  }


