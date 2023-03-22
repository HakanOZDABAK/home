import React from 'react'
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StarFill as Star,FileEarmarkTextFill as File } from 'react-bootstrap-icons'

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
                <p style={{ fontSize: "30px", fontStyle: "italic" }}>Hello Visitor, I am Hakan ÖZDABAK</p>
                <p style={{ fontSize: "20px", marginTop: "30px" }}>I was born in Adana at 01/02/2000.
                    I was graduated from Piri Reis Anatolian High School.
                    I have studied for 5 years with Preparatory Class at Electric and Electronic Engineering of Akdeniz University</p>
                <p style={{ fontSize: "20px" }}>I am improving myself at Full-Stack Develeoper. I have been making API in Java and Springboot for 2 years. Also I am developing API with FastAPI in Python.
                    Besides these, I have been design website with JS/HTML/CSS for 2 years together Springboot. </p>
                <hr width="100%" color="chocolate" size="10" />
                <p style={{ fontSize: "30px", color: "black", marginBottom: "20px", fontStyle: "italic" }}> Work Experience</p>
                <Row>
                    <Col><p style={{ fontSize: "20px", color: "black" }}>Kimteks A.Ş | July 2021 - August 2021 | --{'>'} I did my first compulsory internship over electrical
                        panels, AC and DC motors, repair of PCB boards,
                        transformers and solar panels.</p></Col>

                    <Col xs={2}><div className='Vertical'></div></Col>
                    <Col><p style={{ fontSize: "20px", color: "black" }}>Alta Endüstriyel Mühendislik Ltd | July 2022 - August 2022 | --{'>'} I did my second compulsory internship over
                        Python, C languages software development and
                        data retrieval over Serial Port.</p> </Col>
                </Row>
                <hr width="100%" color="chocolate" size="10" />
                <p style={{ fontSize: "30px", color: "black", marginBottom: "20px", fontStyle: "italic" }}> Abilities</p>
                <Table striped variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ability</th>
                            <th>Competence  (<Star />/5) </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Python</td>
                            <td>{Array(4).fill(<Star />)}</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Java</td>
                            <td>{Array(4).fill(<Star />)}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>React</td>
                            <td>{Array(3).fill(<Star />)}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>C</td>
                            <td>{Array(3).fill(<Star />)}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>MySQL/PostgreSQL</td>
                            <td>{Array(3).fill(<Star />)}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Proteus</td>
                            <td>{Array(4).fill(<Star />)}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>English</td>
                            <td>{Array(4).fill(<Star />)}</td>
                        </tr>
                    </tbody>
                </Table>
                <hr width="100%" color="chocolate" size="10" />
                <p style={{ fontSize: "30px", color: "black", marginBottom: "20px", fontStyle: "italic" }}> Certicates</p>
                
                <Row><Col><File size={"25px"} style={{marginRight: "10px"}} /><a>Basic and Advanced Excel Training</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px"}} /><a>Digital Financial Literacy Education</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px"}} /><a>13th National Entrepreneurship Summit</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px"}} /><a>Engineering Summit</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px",left: "0%"}} /><a>KOSGEB Entrepreneurial Education</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px",left: "0%"}} /><a>Advanced Python Programming From Zero</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign:"center"}}><File size={"25px"} style={{marginRight: "10px"}} /><a>React + Redux from SoloLearn</a></Col></Row>
                <Row><Col style={{marginTop: "10px",textAlign: "center"}}><File size={"25px"} style={{marginRight: "10px"}} /><a>JavaScript from SoloLearn</a></Col></Row>

            </Figure>

        </div>
    )
}
