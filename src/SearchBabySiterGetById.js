import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBabySiterGetById.css";
import { ReactComponent as O } from "./logocircel.svg";
import { ReactComponent as T } from "./textt.svg";
import { ReactComponent as E } from "./em.svg";
import { ReactComponent as K } from "./kod.svg";
import { ReactComponent as P } from "./t.svg";
import { ReactComponent as R } from "./kitov.svg";
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
const Opinion=()=>{
  navigate("/Opinion")
}
const babysiterr = () => {
   
  navigate("/BabySiterGetById", { replace: false })
}
const searchBabySiter = () => {
  navigate("/SearchBabySiterGetById", { replace: false })
}
    return (

      <div>
        <O id='O'></O>
        <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
   
    
   </div >
   <T id='T'></T>
   <E id="email"></E>
<K id='K'></K>
<P id='pi'></P>
        <h1>ytt</h1>
       <input id="p" className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
       <input id='e' className="input" type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
       <button id="s" onClick={SearchBabySiterGetById}>התחבר</button>
       <a id="a" href="http://localhost:3000/RegisterSearchBabySiter">אין לך חשבון? הרשם עכשיו</a>
<div id='divblue'>
   <a id="as" href="http://localhost:3000/About">?זקוק לעזרה</a>
   <a id="href" href="http://localhost:3000/About">אודותינו</a>
   <R id='r'></R>
   </div>
       <button onClick={RegisterSearchBabySiter}>RegisterSearchBabySiter</button>
              <button onClick={Opinion}>Opinion</button>

      </div>
    )
  }


