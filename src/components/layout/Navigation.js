import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";

function Navigation() {
  return (
    <Navbar className="shadow-sm" expand="lg">
      <Navbar.Brand className="logo" href="/">Holidaze</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/hotels" exact>
            All hotels
          </NavLink>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>    
  );
}

export default Navigation;