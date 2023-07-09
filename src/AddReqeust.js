
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Basis from "./Basis";
import "./AddReqeust.css";
export default function AddReqeust() {
    const location=useLocation();
    const navigate=useNavigate();
    const {searchbabysiterr} = location?.state;
    const [TimeOfDay,setTimeOfDay]=useState("");
    const [day,setDay]=useState("");
    const [rate,setrate]=useState("");
    const [Neighborhood,setNeighborhood]=useState("");
    const [id,setid]=useState("");
     const [linkTo, setLinkTo] = useState("");

    
    useEffect(() => {

        try {
            axios.get(`https://localhost:44312/api/SearchBabySiter/Get?password=${searchbabysiterr.Password}&Email=${searchbabysiterr.Email}`)
                .then( (response) => {               
                   setid(response.data.searchBabysiterId);
                });


        }


        catch (err) {
            console.error(err);
        }

    }, []);
    const sendLink = () => {
        axios.get( `https://localhost:44312/api/RequsetSearchBabysiter/GetEmail?email=${linkTo}`)
            .then(res => {
                const data1 = res.data;
            })
        }
const PostSearchBabySiter= async()=>{
let rate1=JSON.parse(rate);
   const SearchBabysiter = {SearchBabysiterId:id,NeighborhoodId:1,Day:day,PartOfDay:TimeOfDay,Price:rate1};
try{
  await axios.post(`https://localhost:44312/api/RequsetSearchBabysiter`, SearchBabysiter)
  .then(response =>{
   //babysiter= response.data;  
   alert("הפרטים נשמרו במעכת")
   navigate("/", { replace: false })
})
}
catch(err){
   console.log(err);
}
}

    return (<div>

        <Basis></Basis>
         <div id="propil"> הוספת בקשה </div>
      <p id="namee">        {searchbabysiterr.Email}
</p>
<br></br>
<div className="ttime_of_day">
<label >זמן ביום</label>
</div>
<select className="dayy1"  defaultValue={'DEFAULT'} value={TimeOfDay} onChange={e => setTimeOfDay(e.target.value)} >

<option value="DEFAULT" disabled>Choose a time of the day...</option>
<option  value="morning" >morning </option>
<option value="noon">noon</option>
<option  value="afternoon">afternoon</option>

<option  value="evening">evening</option>
<option value="night">night</option>
</select>
<label className="yamimm">ימים</label>

<select  className="addd"  defaultValue={'DEFAULT'} value={day}  onChange={e => setDay(e.target.value)} >
    <option value="DEFAULT" disabled>Choose a day...</option>
  <option  value="Sunday" >Sunday </option>
  <option value="Monday">Monday</option>
  <option  value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option  value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
</select>

<label className="time_of_dayyy"> שכונות</label>
<select className="sconoot" defaultValue={'DEFAULT'} value={Neighborhood}  onChange={e => setNeighborhood(e.target.value)} >
    <option value="DEFAULT" disabled>Choose a day...</option>
  <option  value="1" >רמת שלמה </option>
  <option value="2">בית וגין</option>
  <option  value="3">רמות</option>

</select>
<label className="zmanimm">תעריף</label>
<input className="ratee"  type="number" placeholder='rate' onChange={(e) => setrate(e.target.value)} /><br></br>
<button className="shmira" onClick={PostSearchBabySiter}>שמירה</button>
{/* //פונקצית שליחת מיל */}
{/* <button onClick={sendLink} > email שלח</button>  
<input onChange={(e)=> setLinkTo(e.target.value)} placeholder="email"></input> */}
            
           
         
           
    </div>);
};




