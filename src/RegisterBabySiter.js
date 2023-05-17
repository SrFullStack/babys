import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
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
    


    return (<div>
    <h1>RegisterBabySiter</h1>
    <input  {...register("password", registerOptions.password)} className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input {...register("email", registerOptions.email)} className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input {...register("firstName", registerOptions.firstName)} className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input className="input" type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} /><br></br>
    <input {...register("phone", registerOptions.phone)} className="input" type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <input  className="input" type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br></br>
    <button onClick={Register}>Register</button>
    </div>);
};

