import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./RegisterBabySiter.css";
import { ReactComponent as D} from "./datils.svg";
import { ReactComponent as D2} from "./datils2.svg";
import { ReactComponent as E} from "./ershmafamaly.svg";
import { ReactComponent as F} from "./datilsfamily.svg";
export default function RegisterSearchBabySiter() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");

    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    // axios.get(`https://localhost:44312/api/BabySiter/GetAll`)
    // .then(async (response) => {
        const check =async ()=>{
            try{
         
              await axios.get(`https://localhost:44312/api/SearchBabySiter/Get?Password=${password}&Email=${email}`)
            
                 .then(response =>{
                    
                   if(response.data!=""){
                     alert("משתמש זה קיים אנא בחר סיסמה אחרת");  
                     
                   } 
                     else{
                        Register();
                     }
                 })
               
             }        
             
             catch (err) {
                 console.error(err);
             }
         }
    // const check=async()=>{

    // }
    const Register= async()=>{
       
       const searchbabysiterr = {FirstName:firstName,LastName:lastName,Phone:phone, Email:email,Password:password};
   try{
      await axios.post(`https://localhost:44312/api/SearchBabySiter`, searchbabysiterr)
      .then(response =>{
        // searchbabysiterr= response.data;  
        console.log(response.data);
      
   })
   alert("ברוכים הבאים נרשמת בהצלחה");
    navigate("/AddReqeust",{state:{searchbabysiterr:searchbabysiterr}})


//    navigate("/PostTime", { state: {babysiter:babysiter}});
   }
   catch(err){
       console.log(err);
   }
    }

   // https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

    return (<div>
    <h1>RegisterSearchBabySiter</h1>
    
    {/* <D id="d"></D> */}
    {/* <D2 id="d2"></D2> */}
    <E id="ershame"></E>
    <F id="d"></F>
    <input  id="passwordF"  className="input" type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
    <input id="emaill" className="input" type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
    <input  id="first" className="input" type="text" placeholder='firstName' onChange={(e) => setFirstName(e.target.value)} /><br></br>
    <input    id="last" className="input" type="text" placeholder='lastName' onChange={(e) => setLastName(e.target.value)} /><br></br>
    <input  id="telphone" className="input" type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} /><br></br>
    <button id="search" onClick={check}>Register</button>
    </div>);
};

