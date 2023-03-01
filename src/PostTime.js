import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Checkbox } from 'primereact/checkbox';


export default function PostTime() {
const [day,setDay]=useState("");
const [TimeOfDay,setTimeOfDay]=useState("");
const [rate,setrate]=useState("");
const [neighborhood,setNeighborhood]=useState("");
const location=useLocation();
const {babysiter} = location.state;
const [isChecked, setIsChecked] = useState([]);
const [id,setId] = useState(0);

useEffect(() => {
    try{
       
         axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${babysiter.password}&Email=${babysiter.email}`)
      
           .then(response =>{

            
           })
         
       }        
       
       catch (err) {
           console.error(err);
       }
      
  }); 


const PostTimeB= async()=>{
    let rat1=JSON.parse(rate);

   const time = {BabysiterId:19, DAY:day,PartOfDay:TimeOfDay,PRICE:rat1};
try{
  await axios.post(`https://localhost:44312/api/Time`, time)
       .then(response => (console.log(response.data.DAY)));
   alert("הפרטים נוספו בהצלחה") 
}
catch(err){
   console.log(err);
}}
const handleOnChange = () => {
  setIsChecked(!isChecked);
};
    return (<div>
       
    <h1>hello  {babysiter.firstName}!!!!!!!!! enter time</h1>

    {babysiter.babysiterId}

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

<label>רמות</label>
<input type="checkbox" id="topping" name="topping" value="ramot" onChange={e =>setIsChecked([...isChecked,e.target.value])}/>
<label>רמות</label>
<input type="checkbox" id="topping" name="topping" value="t" onChange={e => setIsChecked([...isChecked,e.target.value])}/>
<label>רמות</label>
<input type="checkbox" id="topping" name="topping" value="y" onChange={e => setIsChecked([...isChecked,e.target.value])}/>  
<button onClick={PostTimeB}>PostTimeB</button>

    </div>);
};

// onChange={e => setChecked(e.checked)} checked={checked}


// const handleOnChange = () => {
//   setIsChecked(!isChecked);
// };

// return (
//   <div className="App">
//     Select your pizza topping:
//     <div className="topping">
//       <input
//         type="checkbox"
//         id="topping"
//         name="topping"
//         value="Paneer"
//         checked={isChecked}
//         onChange={handleOnChange}
//       />