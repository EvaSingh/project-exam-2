import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";


function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Holidaze</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink to="/hotels" exact>
            Hotels
        </NavLink>
        <NavLink to="/contact" exact>
            Contact
        </NavLink>

        {user ? (
            <>
                <NavLink to="/admin">Admin</NavLink>
                <Logout />
            </>
        ) : (
            <NavLink to="/register">Login</NavLink>
        )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>   
  );
}

export default Navigation;