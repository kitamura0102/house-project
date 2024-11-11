import { useState } from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import React from 'react'
import Search from './Search.jsx'
import Header from "./Header.jsx"
import { propiedades } from './assets/propiedades.js'
function App() {
const cards = propiedades.map(item =>{
  return(
      <Header item={item}/>
  )
})

  return (
    <>
      <div>
        <Navbar />
        <Search />
        {cards}
        
      </div>
      
    </>
  )
}

export default App
