
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import React from 'react';
import Stack from '@mui/material/Stack';
import "./BaByStack.css";
import { ReactComponent as T } from "./telphoe.svg";
import { ReactComponent as M } from "./GetAllBabyMail.svg";

import { ReactComponent as F } from "./Menuframe.svg";
//https://www.npmjs.com/package/react-multi-carousel
//
import { useNavigate, useLocation } from "react-router-dom";

export default function BaByStack(data) {


    const s = () => {
console.log(data)
        alert(data.obj.Neighborhood[0].neighborhoodId)
    }



    return (<div>
        <div dir="rtl">
            <div id="cardd"> <p id="name">{data.obj.firstName} {data.obj.age}</p></div>
            <div id="talphone">        <T></T>
                <div>  <p id="phone">{data.obj.phone} </p></div>
                <div>  <p id="hh">{data.obj.partOfDay} </p></div>

            </div>

            <div id="neboord"><F></F></div>
            <div id="neb">רמת שלמה נווה יעקב
            </div>
            <div id="mai">  <p>{data.obj.email} </p></div>
            <h1>{data.obj.Neighborhood.map((t) => { t.neighborhoodId })}</h1>
        </div>
        <div id="ma"><M></M></div>















    </div>);
};