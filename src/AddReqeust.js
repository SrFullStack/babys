
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
export default function AddReqeust() {
    const location=useLocation();
    const {SearchBabysiter} = location.state;
    const [TimeOfDay,setTimeOfDay]=useState("");
    const [day,setDay]=useState("");
    const [rate,setrate]=useState("");
    const [Neighborhood,setNeighborhood]=useState("");
    const [id,setid]=useState("");

    useEffect(() => {

        try {
            axios.get(`https://localhost:44312/api/SearchBabySiter/Get?password=${SearchBabysiter.password}&Email=${SearchBabysiter.email}`)
                .then( (response) => {
               
                   setid(response.data.searchBabysiterId);
                });


        }


        catch (err) {
            console.error(err);
        }

    }, []);
    
const PostSearchBabySiter= async()=>{

   const SearchBabysiter = {SearchBabysiterId:id,NeighborhoodId:Neighborhood,Day:day,PartOfDay:TimeOfDay,Price:rate};
try{
  await axios.post(`https://localhost:44312/api/RequsetSearchBabysiter`, SearchBabysiter)
  .then(response =>{
   //babysiter= response.data;  
})
}
catch(err){
   console.log(err);
}
}

    return (<div>
        ll
{SearchBabysiter.email}
<select  defaultValue={'DEFAULT'} value={TimeOfDay} onChange={e => setTimeOfDay(e.target.value)} >

<option value="DEFAULT" disabled>Choose a time of the day...</option>
<option  value="morning" >morning </option>
<option value="noon">noon</option>
<option  value="afternoon">afternoon</option>

<option  value="evening">evening</option>
<option value="night">night</option>
</select>

<select  defaultValue={'DEFAULT'} value={day}  onChange={e => setDay(e.target.value)} >
    <option value="DEFAULT" disabled>Choose a day...</option>
  <option  value="Sunday" >Sunday </option>
  <option value="Monday">Monday</option>
  <option  value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option  value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
</select>


<select  defaultValue={'DEFAULT'} value={Neighborhood}  onChange={e => setNeighborhood(e.target.value)} >
    <option value="DEFAULT" disabled>Choose a day...</option>
  <option  value="1" >רמת שלמה </option>
  <option value="2">בית וגין</option>
  <option  value="3">רמות</option>

</select>

<input className="input" type="number" placeholder='rate' onChange={(e) => setrate(e.target.value)} /><br></br>
<button onClick={PostSearchBabySiter}>PostSearchBabySiter</button>

    </div>);
};

