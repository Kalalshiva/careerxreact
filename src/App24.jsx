import React from 'react'
import { useState }  from "react";
import Login from"./Login";
import Home from"./Home";
export default function App24() {
    const [flag,setFlag] = useState(true);
  return <div>{flag ? <Login/>:<Home/>}</div>;
}
