import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Footer() {
  const { user } = useContext(AuthContext);
  
  return (
    <Container className="footer">
      <Nav className="footer__nav">
        <strong className="footer__text">&copy;2021 Holidaze AS</strong>

        <NavLink to="/contact" exact>
          Contact
        </NavLink>

      {user ? (
        <>
          <NavLink to="/admin">Admin</NavLink>
          <Logout />
        </>
      ) : (
          <NavLink to="/register">Admin login</NavLink>
      )}
      </Nav>
    </Container>
   
  );
}

export default Footer;