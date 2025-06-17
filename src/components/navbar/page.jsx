"use client"
import React from 'react'
import { Links } from '../../data.js'

const Navbar = () => {
   
    
  return (
    <div>
      <nav className=''>
        <div className="">
            LOGO
        </div>
        <ul className=''>
         {
            Links.map((link)=>{
                 const {id, url, name}= link
                 return(
                    <div className="" key={id}>           
                        <a href={url}>{name}</a>
                    </div>
                 )
            })
         }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
