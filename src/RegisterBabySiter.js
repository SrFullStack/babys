
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function RegisterBabySiter() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const [age,setAge]=useState(0);
    const [phone,setPhone]=useState(0);
    const [description,setDescription]=useState("");

const Register=()=>{
    // const article = { email:'ema'};
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => setArticleId(response.data.id));
}
// https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

    return (<div>
    <h1>RegisterBabySiter</h1>
    <input className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input className="input" type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} /><br></br>
    <input className="input" type="number" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <input className="input" type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br></br>
    <button onClick={Register}>Register</button>
    </div>);
};

