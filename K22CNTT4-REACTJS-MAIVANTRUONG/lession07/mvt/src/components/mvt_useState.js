import { useState } from "react";
import React,(useState) from 'react'

export default function mvt_useState() {
     // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
    //mang
    const [list, setlist]=useState([1,5]);
    //ham su li su kien
    const mvtHandlelist = ()=>{
        let num = parseInt(Math.random()*100);
        setlist([
            ...list,
            num
        ])
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
    
      <h3>
        list: {list.toString()}
      </h3>
        <button onClick={mvtHandlelist}>them nghau nhien</button>
    </div>
  )
}
