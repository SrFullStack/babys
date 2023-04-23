import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchBabySiterGetById() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
   
    const SearchBabySiterGetById =async ()=>{
   try{
     await axios.get(`https://localhost:44312/api/SearchBabySiter/Get?Password=${password}&Email=${email}`)
        .then(response =>{
            alert(response.data.firstName+"את שמורה במערכת");  
            navigate("/AddReqeust", { state: {SearchBabysiter:response.data}});
          
        })
     
    }        
    
    catch (err) {
        console.error(err);
    }
}
const RegisterSearchBabySiter=()=>{
  navigate("/RegisterSearchBabySiter")
}
    return (

      <div>
        <h1>ytt</h1>
       <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
       <input className="input" type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
       <button onClick={SearchBabySiterGetById}>SearchBabySiterGetById</button>
       <button onClick={RegisterSearchBabySiter}>RegisterSearchBabySiter</button>
      </div>
    )
  }


