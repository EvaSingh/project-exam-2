import React from "react";
import Proptypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function SearchBar({handleSEarch}) {
  return (
    <InputGroup className="search">
                
      <FormControl 
        className="round shadow-sm"
        placeholder="Find a hotel in Bergen..." 
        onChange={ event => handleSEarch(event) }
      />
    </InputGroup>
  );
};

SearchBar.propTypes = {
  handleSEarch: Proptypes.func.isRequired
};