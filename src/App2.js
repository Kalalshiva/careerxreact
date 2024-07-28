import React from 'react'
import "./App2.css"
export default function App2(props) {
  let city = 'Hyderabad'
  return (
    <div className="App2">
      <h2>Hello {props.name} Welcome to Mystore</h2>
      age:{props.age},{city}<br></br>
      <p className="txtstyle">Lorem ipsum odor amet, consectetuer adipiscing elit. Ad faucibus tempus primis finibus platea tempus adipiscing neque. Dictum vehicula pulvinar,</p>
    </div>
  )
}
