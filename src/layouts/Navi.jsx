import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Navi() {
    return (
        <div >
            <Navbar className='Navbar' expand="lg"  >
                
                    <Navbar.Brand style={{ fontWeight: 'bold' }}><NavLink to = "home" style={{ textDecoration: 'none', color: 'black' }}>Who is HAKAN ÖZDABAK?</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown style={{ fontWeight: 'bold' }} title="Menus" id="basic-nav-dropdown">
                                <NavDropdown.Item style={{ fontWeight: 'bold' }}><NavLink to = "projects" style={{ textDecoration: 'none', color: 'black' }}>Projects</NavLink></NavDropdown.Item>
                                <NavDropdown.Item style={{ fontWeight: 'bold' }}><NavLink to = "contact" style={{ textDecoration: 'none', color: 'black' }}>Contacs</NavLink></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}
