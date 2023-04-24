import React, { useState } from "react"

const AddTimeForm = ({ addBabysitterTime }) => {
    // const [day, setDay] = useState("");
    // const [TimeOfDay, setTimeOfDay] = useState("");
    // const [rate, setrate] = useState("");
    // const [neighborhood, setNeighborhood] = useState("");
    const [timeToAdd, setTimeToAdd] = useState({ day:"", timeOfDay: [], neighborhood: [], rate:"" })
    const neighborhoods = [{ id: 1, name: "רמות" },{id: 2, name: "רמת שלמה" }]

    return <div>
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
    </div>
}

export default AddTimeForm