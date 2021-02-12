import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";


function Dashboard() {
  return (

    <>
    <Heading title="Dashboard" />
    <Container>
      <ul>
        <li>
          <NavLink to="/admin/hotels">List Hotels</NavLink>
        </li>
        <li>
          <NavLink to="/admin/hotels/add">Add Hotel</NavLink>
        </li>
        <li>
          <NavLink to="/admin/hotels/enquieries">Enquieries</NavLink>
        </li>
        <li>
          <NavLink to="/admin/messages">Messages</NavLink>
        </li>
      </ul>
    </Container>
    </>
      
  );
}

export default Dashboard;