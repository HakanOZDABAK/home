import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import WhoIs from '../pages/WhoIs'
export default function Dashboard() {
  return (
    <div >
      <Routes >
        <Route  path="" element={<WhoIs/>}/>
        <Route path="home" element={<WhoIs/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes> 
    </div>
  )
}
