import "./App.css";
import Butoon from "./Butoon.jsx";
import Count from "./Count.jsx";
import { useState } from "react";

function App() {
  const [number,setNumber]=useState(0)
  return <>
    <div className="app">
      {number>0? <Count number={number}/> : <p>number is 0</p>}
      
      <Butoon setNumber={setNumber}/>
    </div>
  
  </>;
}

export default App;
