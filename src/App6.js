import React from 'react'
import "./App6.css"
export default function App6() {
 const myStyle = {
    backgroundColor : "pink"
 }  
  return (
    <div>
    <h1 style={{backgroundColor:'yellow'}}>Hello world</h1>
    <hr></hr>
    <h1 style={myStyle}>Good morning</h1>
    <hr></hr>
    <h1 className="mystyle1">Good evening</h1>
    </div>
  )
}
