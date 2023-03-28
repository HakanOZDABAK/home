import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import WhoIs from '../pages/WhoIs'
import EmotionsClassification from '../pages/projects/EmotionsClassification'
import UserandItemAPI from '../pages/projects/UserandItemAPI'
export default function Dashboard() {
  return (
    <div >
      <Routes >
        <Route  path="" element={<Home/>}/>
        <Route path="who_is_hakan_ozdabak" element={<WhoIs/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects/emotions_classification" element={<EmotionsClassification/>}/>
        <Route path="projects/users_items_api" element={<UserandItemAPI/>}/>
      </Routes> 
    </div>
  )
}
