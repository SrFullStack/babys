import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Checkbox } from 'primereact/checkbox';
import AddTimeForm from "./AddTimeForm";


export default function PostTime(props) {
  const emptyDay = { day: '', timeOfDay: [], rate: '', neighborhood: [] }
  const [babysitterTimes, setBabysitterTimes] = useState([emptyDay])
  const [day, setDay] = useState("");
  const [TimeOfDay, setTimeOfDay] = useState("");
  const [rate, setrate] = useState("");
  const [neighborhood, setNeighborhood] = useState({ name: ""});
      // const [timeToAdd, setTimeToAdd] = useState({  neighborhood: "", rate: "" })
      const [neighborhoodd, setNeighborhoodd] = useState({ namee:"" ,idd:""})
      const[v,sv]=useState({f:"",g:""});
      const [timeToAdd, setTimeToAdd] = useState({ timeOfDay: "", rate: "",d:"" })

  const location = useLocation();
  const { babysiter } = location?.state;
  const [isChecked, setIsChecked] = useState([]);
  const [id, setId] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState([])
  const [m, setm] = useState("wer");
  //const [neighborhoods,setNeighborhood] = [{ id: 1, name: "רמות" }, { id: 2, name: "רמת שלמה" }]
  useEffect(() => {
    console.log({ id });
    setNumberOfForms([<AddTimeForm babysiterId={id} m={m} key={0} />])
  }, [id])

  // const filterDinamic=(object,value)=>{
  //   return babysiter.filter((b)=>{b[object]==value});
  // }
  // filterDinamic("adress","shalom sivan");
  //   const func=()=>{
  //     <AddTimeForm id={id}></AddTimeForm>
  // }
  useEffect(() => {
    
    try {
      axios.get(`https://localhost:44312/api/BabySiter/Get?Password=${babysiter.password}&Email=${babysiter.email}`)
        .then(response => {

          setId(response.data.babysiterId)

          // alert(id)

        })
    }
    catch (err) {
      console.error(err);
    }
    
//idh();
  });



  // const PostTimeB = async () => {
  //   alert(rate);
  //   let rat1 = JSON.parse(rate);
  //   let id1 = JSON.parse(id);
  //   const time = { BabysiterId: id1, DAY: day, PartOfDay: TimeOfDay, PRICE: rat1 };
  //   try {
  //     await axios.post(`https://localhost:44312/api/Time`, time)
  //       .then(response => (console.log(response.data.DAY)));

  //     alert("הפרטים נוספו בהצלחה")


  //     for (let index = 0; index < isChecked.length; index++) {
  //       const i = JSON.parse(isChecked[index]);
  //       const neighborhoodbaby = { BabysiterId: id1, NeighborhoodId: i }

  //       await axios.post(`https://localhost:44312/api/NeighborhoodBabysiter`, neighborhoodbaby)
  //         .then(response => (console.log(response.data.DAY)));

  //     }
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const finisha = () => {
    //sets({ ...s, id: [...s.id, 3] })
    //setNeighborhoodd({...neighborhoodd,name:[...neighborhoodd.name,"oo"]})
    // setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate,"rate"] })
    // setTimeToAdd({ ...timeToAdd, neighborhood: [...timeToAdd.neighborhood,"neboord"] })
    // sv({...v,f:[...v.f,"cd"]});
    // sv({...v,g:[...v.g,"sari"]});
    setTimeToAdd({ ...timeToAdd, d: [...timeToAdd.d,"d"] })
   

  }
  const idh = () => {
    setTimeToAdd({ ...timeToAdd, timeOfDay: [...timeToAdd.timeOfDay," e.target.value"] })
   
    
    // const [timeToAdd, setTimeToAdd] = useState({ day: [], timeOfDay: [], neighborhood: [], rate: "" })
    // <select defaultValue={'DEFAULT'} onChange={e => setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, e.target.value] })}>

    try {
      axios.get(`https://localhost:44312/api/Neighborhood`)
        .then(response => {
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            
            //alert(element.neighborhoodName)
            setNeighborhoodd({ ...neighborhoodd, namee: [...neighborhoodd.namee, element.neighborhoodName] })
           
            //setNeighborhood({ ...neighborhood, id: [...neighborhood.id, element.neighborhoodId] })
            
            //setNeighborhood({...neighborhood,id:[...neighborhood.id,element.neighborhoodId]})
            // neighborhood[index].name=element.neighborhoodName;
            // neighborhood[index].id=element.neighborhoodId;

            //setNeighborhood([...element])
          }
       alert(response.data.length)
//alert(neighborhood[0].id)
          // alert(id)
         
        })
    }
    catch (err) {
      console.error(err);
    }
  }
  const finish = () => {
    //setTimeToAdd({ ...timeToAdd, rate: [...timeToAdd.rate, "e.target.value"] })
    setNumberOfForms((prev) => [...prev, <AddTimeForm babysiterId={id} key={prev.length} />])
  }
  return (

    <div>
      {/* <h1>{babySitters.map((b)=>{return <p>{b.name}</p>})}</h1> */}
      <h1>hello  {babysiter.firstName}!!!!!!!!! enter time</h1>

      {id}
      {/* {Array(numberOfForms).map((_, index) => <AddTimeForm key={index} addBabysitterTime={(bt) => setBabysitterTimes([...babysitterTimes, bt])} />)} */}
      {numberOfForms}
      {/* <select defaultValue={'DEFAULT'} value={day} onChange={e => setDay(e.target.value)} >
      <option value="DEFAULT" disabled>Choose a day...</option>
      <option value="Sunday" >Sunday </option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
    </select>


    <select defaultValue={'DEFAULT'} value={TimeOfDay} onChange={e => setTimeOfDay(e.target.value)} >

      <option value="DEFAULT" disabled>Choose a time of the day...</option>
      <option value="morning" >morning </option>
      <option value="noon">noon</option>
      <option value="afternoon">afternoon</option>

      <option value="evening">evening</option>
      <option value="night">night</option>
    </select>

    <label>רמות</label>
    <input type="checkbox" id="topping" name="topping" value="1" onChange={e => setIsChecked([...isChecked, e.target.value])} />
    <label>רמת שלמה</label>
    <input type="checkbox" id="topping" name="topping" value="2" onChange={e => setIsChecked([...isChecked, e.target.value])} />
    <label>בית וגן</label>
    <input type="checkbox" id="topping" name="topping" value="3" onChange={e => setIsChecked([...isChecked, e.target.value])} />
    <input className="input" type="number" placeholder='rate' onChange={(e) => setrate(e.target.value)} /><br></br> */}

      {/* <button onClick={PostTimeB}>PostTimeB</button> */}
      <button onClick={idh}>id</button>
      <button onClick={finish}>finish</button>
      {/* <button  onClick={func}>ok</button> */}
      <button onClick={finisha}>בדיקה</button>

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