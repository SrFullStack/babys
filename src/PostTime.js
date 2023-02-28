
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function PostTime() {

const location=useLocation();

    const {firstName} = location.state;
    const {email} = location.state;
    return (<div>
    

{firstName}
{email} 
    </div>);
};

