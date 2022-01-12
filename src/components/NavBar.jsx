import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../css/header.css'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";


export default function NavBar () {

const { _id } = useParams();




    return (
        
          <div className="header2">
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="/graduate/:id">
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
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to={`/graduate/${_id}/edit`}>Edit Profile</Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"></NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        );
    
}