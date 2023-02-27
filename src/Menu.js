
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Menu() {
    const navigate=useNavigate();
const babysiter=()=>{
  
  navigate("/BabySiterGetById",{replace:false})
}
    return (<div>
    <button onClick={babysiter}>babysiter</button>


    </div>);
};

