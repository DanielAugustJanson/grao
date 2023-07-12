/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./Navbar.css"

const Navbar = ({language,activeLink,setActiveLink}) => {
  
  return (
    <div className='navDiv'>
      <div className='logos'>
        
      </div>
      
      <div className='links'>

        <p onClick={()=>{
          setActiveLink("Home")
        }}
        id='Home'>Home</p>
        
        <p onClick={()=>{
          setActiveLink("About")
        }}
        id='About'>About</p>

        <p onClick={()=>{
          setActiveLink("Gallery")
        }}
        id='Gallery'>Gallery</p>

        <p onClick={()=>{
          setActiveLink("Contact")
        }}
        id='Contact'>Contact</p>

        <p onClick={()=>{
          setActiveLink("Order")
        }}
        id='Order'>Order</p>

      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
