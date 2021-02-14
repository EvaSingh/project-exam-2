import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Footer() {
  const { user } = useContext(AuthContext);
  
  return (
    <footer>
      <Container>
        <Row>
        <Nav>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>

        {user ? (
          <>
            <NavLink to="/admin">Admin</NavLink>
            <Logout />
          </>
        ) : (
            <NavLink to="/login">Admin login</NavLink>
        )}
        </Nav>
        </Row>
        <Row>
          <p>holidaze</p>
        </Row>
      </Container>
      
    </footer> 
  );
}

export default Footer;