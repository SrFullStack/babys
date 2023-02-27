
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Menu() {
    const navigate=useNavigate();
const babysiter=()=>{
  
  navigate("/BabySiterGetById",{replace:false})
}
const searchBabySiter=()=>{
  navigate("/SearchBabySiterGetById",{replace:false})
}
    return (<div>
    <button onClick={babysiter}>babysiter</button>
<button onClick={searchBabySiter}>searchBabySiter</button>

    </div>);
};

