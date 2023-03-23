import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import EmotionsClassification from './projects/EmotionsClassification';
import UserandItemAPI from './projects/UserandItemAPI';

export default function Projects() {
  const [color1, setColor1] = useState("white")
  const [color2, setColor2] = useState("white")
  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item key={1} as="li" style={{backgroundColor:color1}} onMouseEnter={(e)=>setColor1("blue")} onMouseLeave={(e)=>setColor1("white")}>
          <EmotionsClassification/>
        </ListGroup.Item>
        <ListGroup.Item key={2} as="li"style={{backgroundColor:color2}} onMouseEnter={(e)=>setColor2("blue")} onMouseLeave={(e)=>setColor2("white")}> <UserandItemAPI/></ListGroup.Item>
      </ListGroup>

    </div>
  )
}
