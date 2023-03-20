import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WhoIs from '../pages/WhoIs'

export default function Dashboard() {
  return (
    <div >
      <Routes>
        <Route path="/home" element={<WhoIs />} />
      </Routes>
    </div>
  )
}
