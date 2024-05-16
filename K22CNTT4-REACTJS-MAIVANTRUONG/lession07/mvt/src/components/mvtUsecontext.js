import { useState } from "react";
import React, ( createContext, useContext) from 'react'
export const ThemeContext = createContext();//tao ngu canh de chia se

export default function mvtUsecontext() {
    //state
    const [them,settheme] = useState('red');
 // ham thay doi theme
    const mvtHandlechange = (toggle)=>{
        settheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <h2>Demo useContext</h2>
            <mvtUsecotext1 />
            <button onClick={mvtHandlechange}>change bgcolor</button>      
        </div>
     </ThemeContext.Provider >  
  )
}
