import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import HotelList from "./HotelList";

export function HotelsPage() {
  return (
    <Container>
    <Heading title="Hotels" />
    <HotelList />
    </Container>
  );
}

export default HotelsPage;