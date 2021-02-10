import React, {useState} from "react";
import { Link } from "react-router-dom";
//import Proptypes from "prop-types";
import { BASE_URL, headers } from "../../constants/api";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

export default function SearchBarTypeahead(){
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const url = BASE_URL + "establishments";
  const options = { headers };
  
    const handleSearch = () => {
      setIsLoading(true);
  
      fetch(url, options)
        .then((resp) => resp.json())
        .then((results) => {
          const hotels = results.map((i) => ({
            name: i.name,
            id: i.id,
            
          }));
  
          setHotels(hotels);
          setIsLoading(false);
        });
   
      };
  

	return (
    
    <AsyncTypeahead
      isLoading={isLoading}
      labelKey="name"
      minLength={1}
      onSearch={handleSearch}
      options={hotels}
      placeholder="Find a hotel in Bergen..."
      renderMenuItemChildren={(hotel) => (
        <Link to={"hotel/" + hotel.id}>{hotel.name}</Link>
      )}
    />        
	);

};