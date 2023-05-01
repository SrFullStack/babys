import React, { useState } from "react"
import PostTime from "./PostTime"
import {  useEffect } from "react";
import axios from "axios";
import { Checkbox } from 'primereact/checkbox';
        
const AddTimeForm = ( { addBabysitterTime }) => {
    // const [day, setDay] = useState("");
    // const [TimeOfDay, setTimeOfDay] = useState("");
    // const [rate, setrate] = useState("");
    // const [neighborhood, setNeighborhood] = useState("");
    
    const [timeToAdd, setTimeToAdd] = useState({ day:"", timeOfDay: [], neighborhood: [], rate:"" })
    const neighborhoods = [{ id: 1, name: "רמות" },{id: 2, name: "רמת שלמה" }]
    const [id, setId] = useState(0);
    const [isChecked, setIsChecked] = useState([]);
    
    const [ingredients, setIngredients] = useState([]);

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
  const PostTimeB = async () => {

// console.log(timeToAdd);
// console.log(props.id)

    let rat1 = JSON.parse(timeToAdd.rate);
//צריך לבדוק איך מעבירים את id
    //let id1 = JSON.parse(id);

    alert(timeToAdd.timeOfDay[0]);
    const time = { BabysiterId: 1, DAY: "timeToAdd.day", PartOfDay: timeToAdd.timeOfDay[0], PRICE: rat1 };
    try {
      await axios.post(`https://localhost:44312/api/Time`, time)
        .then(response => (console.log(response.data.DAY)));

      alert("הפרטים נוספו בהצלחה")


    //   for (let index = 0; index < isChecked.length; index++) {
    //     const i = JSON.parse(isChecked[index]);
    //     const neighborhoodbaby = { BabysiterId: id1, NeighborhoodId: i }

    for (let index = 0; index < timeToAdd.neighborhood.length; index++) {
        const i = JSON.parse(timeToAdd.neighborhood[index]);
        const neighborhoodbaby = { BabysiterId: 14, NeighborhoodId: i }

        await axios.post(`https://localhost:44312/api/NeighborhoodBabysiter`, neighborhoodbaby)
          .then(response => (console.log(response.data.DAY)));

      }
    }
    catch (err) {
      console.log(err);
    }
  }

// const func=()=>{
//     <PostTime timeToAdd={timeToAdd}></PostTime>
// }
    return <div>
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
                {/* <input className="input"  placeholder='rate'  onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}/> */}
                <select defaultValue={'DEFAULT'}  onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}>
            <option value="DEFAULT" disabled>Choose a rate...</option>
            <option value="20" >20 </option>
            <option value="30">30</option>
            <option value="40">40</option>
            
        </select>

        <select defaultValue={'DEFAULT'}  onChange={e => setTimeToAdd({ ...timeToAdd, day: [...timeToAdd.day, e.target.value] })}>
            <option value="DEFAULT" disabled>Choose a day...</option>
            <option value="Sunday" >Sunday </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
        </select>


        <select defaultValue={'DEFAULT'}  onChange={e => setTimeToAdd({ ...timeToAdd, timeOfDay: [...timeToAdd.timeOfDay, e.target.value] })} >

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
{neighborhoods.map((n, index) =>
        (<div key={index}> <label>{n.name}</label>
            <input type="checkbox" id="topping" name="topping" value={n.id} onChange={e => {
           return setTimeToAdd({ ...timeToAdd, neighborhood: [...timeToAdd.neighborhood, e.target.value] })
              
            }} /></div>))}

        {/* <label>רמות</label>
        <input type="checkbox" id="topping" name="topping" value="1" onChange={e => setIsChecked([...isChecked, e.target.value])} />
        <label>רמת שלמה</label>
        <input type="checkbox" id="topping" name="topping" value="2" onChange={e => setIsChecked([...isChecked, e.target.value])} />
        <label>בית וגן</label>
        <input type="checkbox" id="topping" name="topping" value="3" onChange={e => setIsChecked([...isChecked, e.target.value])} /> */}
        <button onClick={() => addBabysitterTime(timeToAdd)}>submit</button>
        {/* <button  onClick={func}>ok</button> */}

        <button onClick={PostTimeB}>PostTimeB</button>
        <button  onClick={handleOnChange}>handleOnChange</button>

    </div>
}

export default AddTimeForm