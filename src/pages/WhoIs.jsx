import React from 'react'
import Figure from 'react-bootstrap/Figure';
export default function WhoIs() {
    return (
        <div>
            
            <Figure>
                <Figure.Image 
                    className='Avatar'
                    width={320}
                    height={320}
                    alt="171x180"
                    src="https://avatars.githubusercontent.com/u/127786293?s=400&u=8fdbca885f2a451162d02cacd5d143343308a7c6&v=4"
                
                />
                    <p style={{fontSize : "30px"}}>Hello visitor, I am Hakan ÖZDABAK</p>
                    <p style={{fontSize : "20px"}}>I was born in Adana at 01/02/2000. 
                    I was graduated from Piri Reis Anatolian High School. 
                    I have studied for 5 years with Preparatory Class at Electric and Electronic Engineering of Akdeniz University
 </p>
            </Figure>
        
        </div>
    )
}
