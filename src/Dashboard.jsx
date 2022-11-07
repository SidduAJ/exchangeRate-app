import axios from "axios";
import "./Dashboard.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Display from "./Display";

export default function Dashboard() {
  const [ratesList, setRatesList] = useState({});
  const [label,setlabel]=useState([])
  const [bardata,setbardata]=useState([]);
  const [label2,setlabel2]=useState([]);
  const [bardata2,setbardata2]=useState([]);
  let interval;

  useEffect(() => {  
    //to call API each 3 seconds
      interval=setInterval(getRates,3000)
      return ()=>clearInterval(interval);   
    //getRates();
  }, []);

  const getRates = async () => {
    const res = await axios.get("https://api.exchangerate.host/latest");
    const {rates} = res.data;
    console.log(rates);
    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    //console.log(ratesTemp);
    let filtered = ratesTemp.filter((item, i) => {
      return (
        item.symbol === "INR" ||
        item.symbol === "AED" ||
        item.symbol === "JPY" ||
        item.symbol === "MXN" ||
        item.symbol === "NPR"
      );
    });
    //higher than USD
    let filtered2= ratesTemp.filter((item, i) => {
      return (
        item.symbol === "USD" ||
        item.symbol === "GBP" ||
        item.symbol === "KYD" ||
        item.symbol === "JOD" ||
        item.symbol === "BHD"
      );
    });
    setRatesList(filtered);
    let mappedlebel= filtered.map((item)=>{return(item.symbol)})
    setlabel(mappedlebel)
    // console.log(mappedlebel);
    let mappeddata= filtered.map((item)=>{return(item.rate)})
    setbardata(mappeddata)
    // console.log(mappeddata);
    //More than USD
    let mappedlebel2= filtered2.map((item)=>{return(item.symbol)})
    setlabel2(mappedlebel2)
    // console.log(mappedlebel);
    let mappeddata2= filtered2.map((item)=>{return(item.rate)})
    let mappeddata3=mappeddata2;
    setbardata2(mappeddata3)
    // console.log(mappeddata);
  };

  return (
    <div>
   <Display lebeldata={bardata} lebel={label} lebeldata2={bardata2} lebel2={label2}/>
    </div>
  );
}
