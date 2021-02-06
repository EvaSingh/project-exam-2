import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL, headers } from "../../constants/api";
import HotelItem from "../hotels/HotelItem";
import SearchHotel from "../hotels/SearchHotel";

function HomePage() {
  return (
    
    <div className="homepage-wrapper">
      <SearchHotel/>
    </div>
         
	);
}

export default HomePage;