import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Home() {

  const[big,setBig]=useState(0)
  return (
    

    <div className='Home'>
      <NavLink to = "who_is_hakan_ozdabak" style={{ textDecoration: 'none', color: 'black' }}><p className = "who" style={{fontFamily: "Times New Roman",fontWeight: "bold",position:"absolute",top:"150px"}} onMouseEnter={(e) => setBig(1)} onMouseLeave={(e) => setBig(0)} big = {big}>WHO IS HAKAN ÖZDABAK</p></NavLink>
      <p className = "projects" style={{fontFamily: "Times New Roman",fontSize: "50px",color: "black",fontWeight: "bold",position:"absolute",top:"400px",left:"42%"}}>PROJECTS</p>
      <p className = "contacts" style={{fontFamily: "Times New Roman",fontSize: "50px",color: "black",fontWeight: "bold",position:"absolute",top:"700px",left:"41.5%"}}>CONTACTS</p>
      
    </div>
  )
}
