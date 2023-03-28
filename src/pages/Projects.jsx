import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Projects() {
  const [color1, setColor1] = useState("white")
  const [color2, setColor2] = useState("white")
  return (
    <div>
      <p style={{ fontSize: "30px", color: "black", marginTop: "20px", fontStyle: "italic",textDecorationLine:"underline" }}> My Projects</p>
      <ListGroup as="ul" style={{ marginTop: "10px" }}>
        <NavLink to="/projects/emotions_classification" style={{ textDecoration: 'none', color: 'black' }}><ListGroup.Item as="li" on style={{ backgroundColor: color1 }} onMouseEnter={(e) => setColor1("green")} onMouseLeave={(e) => setColor1("white")}>
          Emotions Classification with Keras
        </ListGroup.Item></NavLink>
        <NavLink to="/projects/users_items_api" style={{ textDecoration: 'none', color: 'black' }}> <ListGroup.Item as="li" style={{ backgroundColor: color2 }} onMouseEnter={(e) => setColor2("green")} onMouseLeave={(e) => setColor2("white")}>
            Rest API for Users and Items
          </ListGroup.Item></NavLink>
      </ListGroup>

    </div >
  )
}
