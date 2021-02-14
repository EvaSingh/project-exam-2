import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";


function Dashboard() {
  return (
    <Container>
      <Heading title="Dashboard" />
      <ul>
        <li>
          <NavLink to="/admin/hotels">List Hotels</NavLink>
        </li>
        <li>
          <NavLink to="/admin/hotels/add">Add Hotel</NavLink>
        </li>
        <li>
          <NavLink to="/admin/hotels/enquiries">Enquiries</NavLink>
        </li>
        <li>
          <NavLink to="/admin/messages">Messages</NavLink>
        </li>
      </ul>
    </Container>   
  );
}

export default Dashboard;