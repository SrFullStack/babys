import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function RegisterSearchBabySiter() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");

    const [phone,setPhone]=useState("");


    const Register= async()=>{
       
       const searchbabysiterr = {FirstName:firstName,LastName:lastName,Phone:phone, Email:email,Password:password};
   try{
      await axios.post(`https://localhost:44312/api/SearchBabySiter`, searchbabysiterr)
      .then(response =>{
        // searchbabysiterr= response.data;  
      
   })
   alert("ברוכים הבאים נרשמת בהצלחה");
   
//    navigate("/PostTime", { state: {babysiter:babysiter}});
   }
   catch(err){
       console.log(err);
   }
    }

   // https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

    return (<div>
    <h1>RegisterSearchBabySiter</h1>
    <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <button onClick={Register}>Register</button>
    </div>);
};

