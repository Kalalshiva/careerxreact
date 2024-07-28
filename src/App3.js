import React from 'react'

export default function App3() {
    const greet =() =>{
        alert("Hello world")
    };
    const greet1 =(value) =>{
        alert(value)
    };
    const greet2 =(value) =>{
        alert(value)
    };
  return (
    <div>
        <button onClick={greet}>Greet</button>
        <button onClick={() => greet1("Hi john")}>Greet</button>
        <input type='text' onChange={(e)=>greet2(e.target.value)}/>
    </div>
  )
}
