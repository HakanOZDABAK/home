import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navi() {
    return (
        <div>
            <Navbar className='Navbar' expand="lg">
                <Container>
                    <Navbar.Brand style={{ fontWeight: 'bold' }} href="#/">Who is HAKAN ÖZDABAK?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Menus" id="basic-nav-dropdown">
                                <NavDropdown.Item style={{ fontWeight: 'bold' }} href="#action/3.1">Projects</NavDropdown.Item>
                                <NavDropdown.Item style={{ fontWeight: 'bold' }} href="#action/3.2">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
