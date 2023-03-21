import React from 'react'
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <p style={{ fontSize: "30px" }}>Hello Visitor, I am Hakan ÖZDABAK</p>
                <p style={{ fontSize: "20px", marginTop: "30px" }}>I was born in Adana at 01/02/2000.
                    I was graduated from Piri Reis Anatolian High School.
                    I have studied for 5 years with Preparatory Class at Electric and Electronic Engineering of Akdeniz University</p>
                <p style={{ fontSize: "20px" }}>I am improving myself at Full-Stack Develeoper. I have been making API in Java and Springboot for 2 years. Also I am developing API with FastAPI in Python.
                    Besides these, I have been design website with JS/HTML/CSS for 2 years together Springboot. </p>
                <hr width="100%" color="chocolate" size="10" />
                <p style={{ fontSize: "30px", color: "black", marginBottom: "20px", textUnderlinePosition: 'under' }}> Work Experience</p>
                <Row>
                    <Col><p style={{ fontSize: "20px", color: "black" }}>Kimteks A.Ş | July 2021 - August 2021 | --> I did my first compulsory internship over electrical
                        panels, AC and DC motors, repair of PCB boards,
                        transformers and solar panels.</p></Col>
                    <Col xs={1}><div class="vl"></div></Col>
                    <Col><p style={{ fontSize: "20px", color: "black" }}>Alta Endüstriyel Mühendislik Ltd | July 2022 - August 2022 | --> I did my second compulsory internship over
                        Python, C languages software development and
                        data retrieval over Serial Port.</p> </Col>
                </Row>
                <hr width="100%" color="chocolate" size="10" />




            </Figure>

        </div>
    )
}
