import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../css/header.css'
import { renderMatches, Link } from 'react-router-dom'



export default class NavBar extends Component {
    render() {
        return (
            <div className='header2'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/graduate/:id"><img src="../assets/df-logo.png" alt="Digital Futures Logo" width="100px" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"></Nav.Link>
                                <Nav.Link href="/EditProfile"></Nav.Link>
                                <NavDropdown title="Menu" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/EditProfile">Edit Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}