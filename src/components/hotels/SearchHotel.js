import React from "react";
import Proptypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function SearchHotel({handleSEarch}) {
  return (
    <InputGroup>
      <FormControl 
        placeholder="Search by hotel name.." 
        onChange={ event => handleSEarch(event) }
      />
    </InputGroup>
  );
};

SearchHotel.propTypes = {
    handleSEarch: Proptypes.func.isRequired
};