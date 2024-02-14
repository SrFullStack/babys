import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { ReactComponent as O } from "./logocircel.svg";
import { ReactComponent as T } from "./textt.svg";
import { ReactComponent as E } from "./em.svg";
import { ReactComponent as K } from "./kod.svg";
import { ReactComponent as P } from "./t.svg";
import { ReactComponent as R } from "./kitov.svg";
import { ReactComponent as L } from "./logo2.svg";
import { useNavigate } from 'react-router-dom';
import Basis from "./Basis"
export default function BabySiterGetById() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
   
    const BabySiterGetById =async ()=>{
   try{
 
      
     await axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${password}&Email=${email}`)
   
        .then(response =>{
          if(response.data.babysiterId!=undefined){
            alert("אתה שמור במערכת");
            const datils={Password:password,Email:email}  
            navigate("/", { state: {datils}})
// navigate("/PostTime", { state: {babysiter:response.data}});
          } 
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
<Basis></Basis>
<T id='T'></T>
   <E id="email"></E>
<K id='K'></K>
<P id='pi'></P>
       <input id="p" className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
       <input id='e' className="input" type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
       <button id="s"  onClick={BabySiterGetById}>התחבר</button>
       <a id="a" href="http://localhost:3000/RegisterBabySiter">אין לך חשבון? הרשם עכשיו</a>
       {/* <button onClick={RegisterBabySiter}>RegisterBabySiter</button> */}
      </div>
    )
  }


