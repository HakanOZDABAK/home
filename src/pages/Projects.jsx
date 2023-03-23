import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

export default function Projects() {
  const [color, setColor] = useState("white")
  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" style={{backgroundColor:"color"}} onMouseEnter={(e)=>setColor("blue")} onmouseleave={(e)=>setColor("white")}>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li">
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>

    </div>
  )
}
