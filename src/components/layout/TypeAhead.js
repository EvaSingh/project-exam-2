import React from "react";
import Proptypes from "prop-types";
import { Typeahead } from 'react-bootstrap-typeahead';

export default function TypeAhead({handleSEarch}) {

  return (
    <Typeahead
    multiple
    placeholder="Search hotels in Bergen.." 
    onChange={ event => handleSEarch(event) }
    options={""}
    />
  );

    
};

Typeahead.propTypes = {
  handleSEarch: Proptypes.func.isRequired
};