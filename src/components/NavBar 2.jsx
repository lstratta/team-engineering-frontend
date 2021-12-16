import React, { Component } from 'react'
import '../css/header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src="./assets/df-logo.png" alt="Digital Futures Logo" width="50px" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"></Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}






















// import React from "react";
// import '../css/header.css';
// import { NavBar, nav, button,  } from 'react-bootstrap';
// // import { Link } from "react-router-dom";


// export default function NavBar() {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg">
//                 <div class="container-fluid">
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="/"><img src="./assets/df-logo.png" alt="Digital Futures Logo" width="50px" /></a>
//                             </li>
//                             <li class="nav-item dropdown position-absolute top-40 end-0 translate-middle-x">
//                                 <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Menu
//                                 </a>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a class="dropdown-item" href="/">Action</a></li>
//                                     <li><a class="dropdown-item" href="/">Another action</a></li>
//                                     <li><hr class="dropdown-divider" ></hr></li>
//                                     <li><a class="dropdown-item" href="/">Something else here</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }