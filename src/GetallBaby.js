import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GetallBaby() {

    const [search, setSearch] = useState({ typeId: -1, categoryId: -1, subCategoryId: -1, datePublished: null, startDate: null, endDate: null, common: "defaultValue" })
const [babySitters, setBabySitters] = useState([{BabysiterId:-1,FirstName:"",LastName:"",Age:0,Email:"",Password:"",Description:"",Phone:""
,times:[{TimeId:0,BabysiterId:0,Day:"",PartOfDay:"",Price:0}],NeighborhoodBabysiter:[{NeighborhoodBabysiterId:0,BabysiterId:0,NeighborhoodId:0}]}])
const [baby,setbaby]=useState([])


useEffect(() => {
   
    // setBabySitters({...babySitters,"BabysiterId":5})
    try{
        const updateUsers=[];
        var baby=[];
        var time=[];
        var Neighborhood=[];
         axios.get(`https://localhost:44312/api/BabySiter/GetAll`)
           .then(response =>{
     
baby=response.data;
// response.data.forEach(w => {
//     setbaby([...baby,10])
//     console.log(baby);  
//     })
// setbaby([...baby,10])
// setbaby([...baby,10])

//     console.log(baby); 


  


for (let index = 0; index < response.data.length; index++) {
   let id=response.data[index].babysiterId

    // setBabySitters({...babySitters,["BabysiterId"]:id})


      
console.log(babySitters);
    axios.get(`https://localhost:44312/api/Time/Get?BabysiterId=${id}`)
    .then(response =>{

time=response.data;}) 
axios.get(`https://localhost:44312/api/NeighborhoodBabysiter/Get?id=${id}`)
.then(response =>{

Neighborhood=response.data;})   
setBabySitters( [
    ...babySitters,
    {
        BabysiterId: baby[index].babysiterId,
        FirstName: baby[index].firstName,
        LastName:baby[index].lastName,
        Age:baby[index].age,
        Description:baby[index].description,
typeId:56,
    }
    
  ]);
}
   


});

            
}    
        
       
       catch (err) {
           console.error(err);
       }
      
  });
 
    return (<div>

{/* <button onClick={t}>y</button> */}
    </div>);
};
