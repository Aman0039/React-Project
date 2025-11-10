import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
    theme : "light",
    toggleTheme : ()=> {},
})

const ThemeProvider = () => {
    const [theme,setTheme] = useState("light");
   const toggleTheme = ()=>{
    setTheme((prevTheme) => {
        if(prevTheme === "light"){
            
        }
        });
    }
}

useEffect(()=>{
    document.body.style.backgroundColor === "light" ? "#242424" : "bg-li"
},[theme])

export default ThemeContext;