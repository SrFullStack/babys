import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PostTime() {
const [day,setDay]=useState("");
const [TimeOfDay,setTimeOfDay]=useState("");
const [rate,setrate]=useState("");
const location=useLocation();
const {babysiter} = location.state;
const [users, setUsers] = useState([]);

useEffect(() => {
    try{
       
         axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${ babysiter.password}&Email=${babysiter.email}`)
      
           .then(response =>{
               alert(response.data.babysiterId);  
           })
         
       }        
       
       catch (err) {
           console.error(err);
       }
      
  }, []); 
}

const PostTimeB= async()=>{
    let rat1=JSON.parse(rate);
    
   const time = {DAY:day,PartOfDay:TimeOfDay,PRICE:rat1};
try{
  await axios.post(`https://localhost:44312/api/Time`, time)
       .then(response => (console.log(response.data.DAY)));
    
}
catch(err){
   console.log(err);
}

    return (<div>
       
    <h1>hello  {babysiter.FirstName}!!!!!!!!! enter time</h1>

    {babysiter.BabysiterId}

    <select  defaultValue={'DEFAULT'} value={day}  onChange={e => setDay(e.target.value)} >
    <option value="DEFAULT" disabled>Choose a day...</option>
  <option  value="Sunday" >Sunday </option>
  <option value="Monday">Monday</option>
  <option  value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option  value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
</select>

    
    <select  defaultValue={'DEFAULT'} value={TimeOfDay} onChange={e => setTimeOfDay(e.target.value)} >

    <option value="DEFAULT" disabled>Choose a time of the day...</option>
  <option  value="morning" >morning </option>
  <option value="noon">noon</option>
  <option  value="afternoon">afternoon</option>

  <option  value="evening">evening</option>
  <option value="night">night</option>
</select>
<input className="input" type="number" placeholder='rate' onChange={(e) => setrate(e.target.value)} /><br></br>

<button onClick={PostTimeB}>PostTimeB</button>

    </div>);
};

