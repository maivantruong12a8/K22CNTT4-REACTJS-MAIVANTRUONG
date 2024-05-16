import React, { useContext } from "react";
import React, { useContext, useEffect, useState } from 'react'

export default function mvt() {
    // stater
    const [count, setCount] = useState(0);
    //ham su li su kien
    count mvthandeleclick = ()=>{
        setCount(prev => prev + 1);
    }
    //su dung ham useffect
    useEffect(()=>{
        document.title = `mai văn trường: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    })
    //useeffect : tham so thu2 laf mangr rong
    useEffect(()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])
    //[deps]
    useEffect(()=>{
        return (`useEffect const Click`,count)
    },[count])
  return (
    <div>
      <h2>
        demo - useEffect: You clicked {count} times
      </h2>
      <button onClick={mvthandeleclick}>
        Click me
      </button>
    </div>
  )
}export default function mvtUsecontext() {
    //state
    const [theme, settheme] = useContext('red');

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h2>demo useContext();</h2>
            </div>
            )
            }
        </>);
}

