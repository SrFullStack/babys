
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function PostTime() {

const location=useLocation();
const {babysiter} = location.state;
const g= ()=>{
alert(babysiter.Age);
}
    // const {firstName} = location.state;
    // const {email} = location.state;
    return (<div>
    <h1>hello  {babysiter.FirstName}!!!!!!!!!</h1>
    <button onClick={g}>age</button>


    </div>);
};

