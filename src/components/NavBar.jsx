import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../css/header.css'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";


export default function NavBar (id) {

// const { _id } = useParams();
  const userId = id.id;




    return (
      <div className="header2">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/graduate">
              <img
                src="../assets/df-logo.png"
                alt="Digital Futures Logo"
                width="100px"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="/EditProfile"></Nav.Link>

                {userId && (
                  <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to={`/graduate/${userId}`}>View Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={`/graduate/${userId}/edit`}>Edit Profile</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
    
}