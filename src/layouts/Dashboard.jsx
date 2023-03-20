import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Deneme from '../pages/deneme'
import WhoIs from '../pages/WhoIs'

export default function Dashboard() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<WhoIs />} />
          <Route path="/home2" element={<Deneme />} />
        </Routes>
  
    </div>
  )
}
