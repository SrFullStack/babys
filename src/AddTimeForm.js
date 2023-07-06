import React, { useState } from "react"
import PostTime from "./PostTime"
import { useEffect } from "react";
import axios from "axios";
import { Checkbox } from 'primereact/checkbox';
import "./PostTime.css";
import { ReactComponent as TIME } from "./time.svg";
import { ReactComponent as E } from "./eare.svg";
import { colors } from "@mui/material";
const AddTimeForm = ({ babysiterId, m }) => {
  // const [day, setDay] = useState("");
  // const [TimeOfDay, setTimeOfDay] = useState("");
  // const [rate, setrate] = useState("");

  useEffect(() => {
   
    try {
      axios.get(`https://localhost:44312/api/Neighborhood`)
        .then(response => {
          //setneighborhoods([...neighborhoods,response.data])
    
          // for (let index = 0; index < response.data.length; index++) {
          //   const element = response.data[index];
            
          //   //alert(element.neighborhoodName)
           
           
          //   //setNeighborhood({ ...neighborhood, id: [...neighborhood.id, element.neighborhoodId] })
            
          //   //setNeighborhood({...neighborhood,id:[...neighborhood.id,element.neighborhoodId]})
          //   // neighborhood[index].name=element.neighborhoodName;
          //   // neighborhood[index].id=element.neighborhoodId;

          //   //setNeighborhood([...element])
          // }
     
//alert(neighborhood[0].id)
          // alert(id)
         
        })
    }
    catch (err) {
      console.error(err);
    }
   
//idh();
  });
  console.log('m', m)

  const [timeToAdd, setTimeToAdd] = useState({ day: [], timeOfDay: [], neighborhood: [], rate: "",d:"" })
  

  const[s,sets]=useState({id:0,name:""});
  const neighborhoods = [{ id: 1, name: "רמות" }, { id: 2, name: "רמת שלמה" }]
  const [id, setId] = useState(0);
  const [isChecked, setIsChecked] = useState([]);
  //const [neighborhoods, setneighborhoods] = useState([]);
  const [ingredients, setIngredients] = useState();

  // const onIngredientsChange = (e) => {
  //     let _ingredients = [...ingredients];

  //     if (e.checked)
  //         _ingredients.push(e.value);
  //     else
  //         _ingredients.splice(_ingredients.indexOf(e.value), 1);

  //     setIngredients(_ingredients);
  // }

  const handleOnChange = () => {

    setIsChecked(!isChecked);
  };
  const CheckRequsetSearch=async(PRICE,DAY,PartOfDay,NeighborhoodId)=>{
    try {
      
      axios.get(`https://localhost:44312/api/RequsetSearchBabysiter/RequsetSearch?price=${PRICE}&day=${DAY}&part_of_day=${PartOfDay}&neighborhood_id=${NeighborhoodId}`)
        .then(response => {
  
         
        })
    }
    catch (err) {
      console.error(err);
    }
  alert(NeighborhoodId);
  }
  const PostTimeB = async () => {
    setTimeToAdd({ ...timeToAdd, d: [...timeToAdd.d,"d"] })

    // console.log(timeToAdd);
    // console.log(props.id)
    //

    console.log({ rate: timeToAdd.rate });
    let rat1 = JSON.parse(timeToAdd.rate);
    //צריך לבדוק איך מעבירים את id
    //שלא יהיה פעמים במערך 
    //SEARCHBABY DTOלסד 
    //let id1 = JSON.parse(id);

    alert(  timeToAdd.day[timeToAdd.day.length-1] );
alert(timeToAdd.timeOfDay[timeToAdd.timeOfDay.length-1]);
    const time = {
      BabysiterId: babysiterId, DAY: timeToAdd.day[timeToAdd.timeOfDay.length-1], PartOfDay: timeToAdd.timeOfDay[timeToAdd.day.length-1], PRICE: rat1
    };
    try {
      await axios.post(`https://localhost:44312/api/Time`, time)
        .then(response => (console.log(response.data.DAY)));

      alert("הפרטים נוספו בהצלחה")
      //   for (let index = 0; index < isChecked.length; index++) {
      //     const i = JSON.parse(isChecked[index]);
      //     const neighborhoodbaby = { BabysiterId: id1, NeighborhoodId: i }

      for (let index = 0; index < timeToAdd.neighborhood.length; index++) {
        const i = JSON.parse(timeToAdd.neighborhood[index]);
        const neighborhoodbaby = { BabysiterId: babysiterId, NeighborhoodId: i }

        await axios.post(`https://localhost:44312/api/NeighborhoodBabysiter`, neighborhoodbaby)
          .then(response => (console.log(response.data.DAY)));
          CheckRequsetSearch(time.PRICE,time.DAY,time.PartOfDay,neighborhoodbaby.NeighborhoodId);  
      }
    
    }
    catch (err) {
      console.log(err);
    }
  }

  // const func=()=>{
  //     <PostTime timeToAdd={timeToAdd}></PostTime>
  // }
 
  return <div style={{display:"flex",flexDirection: "column",
  // alignItems: "center",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "461px",
    width: "40%",
    marginLeft: "56%",
    marginTop: "130px"
}}>
     {/* <TIME className="time"></TIME>
     <E className="era"></E> */}
    {/* <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
          
        </div> */}
   
   <div >{/* <input className="input"  placeholder='rate'  onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}/> */}
   <label className="zmanim">תעריף</label>
   <select className="rate" defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, rate:  e.target.value })}>

    {/* <select className="rate" defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}> */}
      <option value="DEFAULT" disabled>Choose a rate...</option>
      <option value="20" >20 </option>
      <option value="30">30</option>
      <option value="40">40</option>

    </select>
</div> 
<label className="yamim">ימים</label>
    <select className="dayy" defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, day: [...timeToAdd.day, e.target.value] })}>
      <option value="DEFAULT" disabled>Choose a day...</option>
      <option value="Sunday" >Sunday </option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
    </select>

    <label className="time_of_day">זמן ביום</label>
    <select className="add" defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, timeOfDay: [...timeToAdd.timeOfDay, e.target.value] })} >

      <option value="DEFAULT" disabled>Choose a time of the day...</option>
      <option value="morning" >morning </option>
      <option value="noon">noon</option>
      <option value="afternoon">afternoon</option>

      <option value="evening">evening</option>
      <option value="night">night</option>
    </select>
  
    {/* {neighborhoods.map((n, index) =>
        (<div key={index}> <label>{n.name}</label>
            <input type="checkbox" id="topping" name="topping" value={n.id} onChange={e => {
                if (e.checked) return setTimeToAdd({ ...timeToAdd, neighborhood: [...timeToAdd.neighborhood, e.target.value] })
                setTimeToAdd({ ...timeToAdd, neighborhood: timeToAdd.neighborhood.filter(n => n !== e.target.value) })
            }} /></div>))} */}
                <label className="time_of_day"> שכונות</label>

    <div style={{display:"flex",
   
    justifyContent: "space-around",
    marginLeft: "28%",
    width:"230px"
  }}>{neighborhoods.map((n, index) =>
    (<div key={index}> <label className="la">{n.name}</label>
      <input  type="checkbox" className="topping" name="topping" value={n.id} onChange={e => {
        var neighborhoodsTemp = e.target.checked ? [...timeToAdd.neighborhood, e.target.value] : timeToAdd.neighborhood.filter(i => i !== e.target.value)
        // neighborhoodsTemp[index]=e.target.value
        return setTimeToAdd({ ...timeToAdd, neighborhood: neighborhoodsTemp })

      }} /></div>))}</div>


      {/* //map map */}
{/* 
{neighborhoods.map((bs) => {
           
       return
        {bs.map((t) => {t.neighborhoodName})}

          
                  
           
        })} */}



    {/* <label>רמות</label>
        <input type="checkbox" id="topping" name="topping" value="1" onChange={e => setIsChecked([...isChecked, e.target.value])} />
        <label>רמת שלמה</label>
        <input type="checkbox" id="topping" name="topping" value="2" onChange={e => setIsChecked([...isChecked, e.target.value])} />
        <label>בית וגן</label>
        <input type="checkbox" id="topping" name="topping" value="3" onChange={e => setIsChecked([...isChecked, e.target.value])} /> */}
    {/* <button onClick={() => addBabysitterTime(timeToAdd)}>submit</button> */}
    {/* <button  onClick={func}>ok</button> */}

    <button id="PostTimeB" onClick={PostTimeB}>שמירה</button>
    {/* <button onClick={handleOnChange}>handleOnChange</button> */}

  </div>
}

export default AddTimeForm