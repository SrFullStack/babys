import { useState } from 'react';
import axios from "axios";
import React from 'react';

export default function BabySiterGetById() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
   
    const BabySiterGetById =async ()=>{
   try{

      
     await axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${password}&Email=${email}`)
   
        .then(response =>{
            alert(response.data.firstName);  
        })
      
    }        
    
    catch (err) {
        console.error(err);
    }
}
    return (
      
      <div>

       <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
       <input className="input" type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
       <button onClick={BabySiterGetById}>GetById</button>
      </div>
    )
  }


