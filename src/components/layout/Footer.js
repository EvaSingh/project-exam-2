import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Footer() {
  const { user } = useContext(AuthContext);

  return (
   
      
      
     
        <Nav className="mr-auto">
        
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
      
  );
}

export default Footer;