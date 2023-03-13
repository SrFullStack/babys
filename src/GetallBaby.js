import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GetallBaby() {

    const [employee, setEmployee] = useState({
        name: '',
        salary: 0,
        times:[
            {
                shhs:''
            }
        ],
      });
const [babySitters,setBabySitters]= useState({BabysiterId:0,FirstName:"",LastName:"",Age:0,Email:"",Password:"",Description:"",Phone:""
,times:[{TimeId:0,BabysiterId:0,Day:"",PartOfDay:"",Price:0}],NeighborhoodBabysiter:[{NeighborhoodBabysiterId:0,BabysiterId:0,NeighborhoodId:0}]})
const [baby,setbaby]=useState([])

useEffect(() => {
    try{
        var w;
      
         axios.get(`https://localhost:44312/api/BabySiter/GetAll`)
           .then(response =>{
     
w=response.data;
w.forEach(w => {
    setbaby([...baby,{BabysiterId:w.babysiterId,FirstName:w.firstName,LastName:w.lastName,Age:w.age,Email:w.email,Password:w.password,Description:w.description,Phone:w.phone}]);
    console.log(baby);  
    })

    console.log(baby);  
});

            
}    
        
       
       catch (err) {
           console.error(err);
       }
      
  });
 
    return (<div>


    </div>);
};
