import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";


import "./RegisterBabySiter.css";
import { ReactComponent as E } from "./ershame.svg";
import { ReactComponent as D} from "./datils.svg";
import { ReactComponent as D2} from "./datils2.svg";

import { ReactComponent as O } from "./logocircel.svg";
import { ReactComponent as T } from "./textt.svg";



import { ReactComponent as R } from "./kitov.svg";
import { ReactComponent as L } from "./logo2.svg";
export default function RegisterBabySiter() {
    const [password, setPassword] = useState("");

    const [email, setEmail] = useState("");
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const [age,setAge]=useState(0);
    const [phone,setPhone]=useState("");
    const [description,setDescription]=useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
const navigate=useNavigate()

const Register= async()=>{
     let age1=JSON.parse(age);
     var babysiter;
    const babysiterr = {FirstName:firstName,LastName:lastName,Phone:phone,Age:age1, Email:email,Password:password,Description:description};
try{
   await axios.post(`https://localhost:44312/api/BabySiter`, babysiterr)
   .then(response =>{
    babysiter= response.data;  
  
})


navigate("/PostTime", { state: {babysiter:babysiter}});
}
catch(err){
    console.log(err);
}
}
const registerOptions = {
    firstName: {
      required: "שדה חובה",
      minLength: {
        value: 2,
        message: "שם פרטי חייב להכיל לפחות 2 אותיות",
      },
    },
    password: {
        required: "שדה חובה",
        minLength: {
          value: 2,
          message: "מספר זהות חייב להכיל 9 ספרות",
        },
        maxLength: {
          value: 2,
          message: "מספר זהות חייב להכיל 9 ספרות בלבד ",
        },
      },
      email:{
        required: "שדה חובה",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "כתובת המייל לא תקינה",
      },
      },
      phone:{
        required: "שדה חובה",
        minLength: {
          value: 10,
          message: "פלאפון  חייב להכיל  10 תווים",
        },
        maxLength: {
          value: 10,
          message: "פלאפון  חייב להכיל  10 תווים",
        },
      },
}

 
const babysiterr = () => {
   
  navigate("/BabySiterGetById", { replace: false })
}
const searchBabySiter = () => {
  navigate("/SearchBabySiterGetById", { replace: false })
}


    return (<div>
         <O id='O'></O>
        <div id="towbt">
   <button id="btbabisiter" onClick={babysiterr}>חיפוש עבודה      </button>
    <button id="btsearchbabysiter"onClick={searchBabySiter}>חיפוש מועמדים</button>
   
    
   </div >
  

<div id='divb'>
   <a id="as" href="http://localhost:3000/About">?זקוק לעזרה</a>
   <a id="href" href="http://localhost:3000/About">אודותינו</a>
   <R id='r'></R>
   <div  id="Lo"> <L></L></div>
  
   </div>
      <div id="ershame"><E ></E></div>
      <D id="d"></D>
      <D2 id="d2"></D2>

    <input  id="password"  {...register("password", registerOptions.password)} className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input id="emaill"  class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz"  {...register("email", registerOptions.email)} className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input id="first" {...register("firstName", registerOptions.firstName)} className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input  id="last" className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input id="agee" className="input" type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} /><br></br>
    <input id="telphone"{...register("phone", registerOptions.phone)} className="input" type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <input id="reqest" className="input" type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br></br>
    <button id="register" onClick={Register}>שמירה</button>
    </div>);
};

