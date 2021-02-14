import React from "react";
import Proptypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function SearchBar({handleSearch}) {
  return (
    <InputGroup className="search">        
      <FormControl 
        className="input-rounded shadow-sm"
        placeholder="Find a hotel in Bergen..." 
        onChange={ event => handleSearch(event) }
      />
    </InputGroup>
    
  );
};

SearchBar.propTypes = {
  handleSearch: Proptypes.func.isRequired
};