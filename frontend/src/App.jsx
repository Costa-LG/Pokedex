import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Tipos from "./components/Tipos"
import Header from './components/Header'

function App() {
  return (
    <>
    <div className='App'>
      <Header/>
      
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Tipos" element={<Tipos/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
