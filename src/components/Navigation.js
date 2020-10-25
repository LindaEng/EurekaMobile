import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
    return(
       <Navbar expand="md">
           <Navbar.Brand href="#">Eureka</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav" >
               <Nav className="justify-content-end">
                   <Nav.Item>
                       <Nav.Link href="#">Canvas</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link href="#">Login</Nav.Link>
                   </Nav.Item>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    )
}

export default Navigation;