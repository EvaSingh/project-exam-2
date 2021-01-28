import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL, headers } from "../../constants/api";
import HotelItem from "./HotelItem";
import SearchHotel from "./SearchHotel";

function HotelList() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [filteredHotels, setFilteredHotels] = useState([]);
	const url = BASE_URL + "establishments";

	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
        console.log(json);
        // handle error
        if (json.error) {
          setHotels([]);
          setError(json.message);
        } else {
            setHotels(json);
            setFilteredHotels(json);
          }
			})
			.catch((error) => console.log(error));
	}, []);

	const filterHotels = function(e) {
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = hotels.filter(function(g) {

			const lowerCaseName = g.name.toLowerCase();

			if (lowerCaseName.includes(searchValue)) {
				return true;
			}
			return false;
		});

		setFilteredHotels(filteredArray);
};

	return (
    <>
    {error && <div className="error">{error}</div>}

    <SearchHotel handleSEarch={filterHotels} />
    
    <Row>
      {filteredHotels.map((hotel) => {
        const {id, name, image, price } = hotel;

        return (
          <>     
          <Col xs={6} md={4} lg={3} key={id}>
            <HotelItem id={id}  hotelName={name} image={image} price={price}/>
          </Col>      
          </>
        );       
      })}
    </Row>
    </>
	);
}

export default HotelList;