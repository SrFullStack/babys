import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function RegisterBabySiter() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const [age,setAge]=useState(0);
    const [phone,setPhone]=useState("");
    const [description,setDescription]=useState("");
const navigate=useNavigate()

const Register= async()=>{
     let age1=JSON.parse(age);
     
    const babysiter = {FirstName:firstName,LastName:lastName,Phone:phone,Age:age1, Email:email,Password:password,Description:description};
try{
   await axios.post(`https://localhost:44312/api/BabySiter`, babysiter)
        .then(response => setAge(response.data.age));
        navigate("/PostTime", { state: {babysiter:babysiter}});
}
catch(err){
    console.log(err);
}
}

    return (<div>
    <h1>RegisterBabySiter</h1>
    <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input className="input" type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br></br>
    <button onClick={Register}>Register</button>
    </div>);
};

