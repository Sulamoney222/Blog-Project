"use client"
import React, { createContext, useContext, useState } from 'react'
  
const AppContext = createContext()

export const AppProvider = ({children})=>{
     
    const [openMenu, setOpenMenu] = useState()
    
    const navToggle = ()=>{
        setOpenMenu((prev)=>!prev)
    }

    return(
        <AppContext.Provider value={{
    openMenu,
    navToggle
    }}>
        {children}
    </AppContext.Provider>
    )
}

export const UseGlobalContext = () =>{
    return useContext(AppContext)
}
