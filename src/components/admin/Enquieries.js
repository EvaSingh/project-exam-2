import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import NavLink from "react-bootstrap/NavLink";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";


function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState(null);

  const url = BASE_URL + "enquiries";

  const options = { headers };

  useEffect(() => {
      fetch(url, options)
          .then((response) => response.json())
          .then((json) => {
              console.log(json);
              // handle error
              if (json.error) {
                setEnquiries([]);
                  setError(json.message);
              } else {
                setEnquiries(json);
              }
          })
          .catch((error) => console.log(error));
  }, []);

  return (
  <>
  <Heading title="Enquiries" subtitle="Your enquiries are listed here"/>
  <Container>
          {error && <div className="error">{error}</div>}
          <ul>
              {enquiries.map((enquiry) => {
                  return (
                      <li key={enquiry.id}>
                          <NavLink to={`/admin/hotels/enquiry/view/${enquiry.id}`}>{enquiry.name}</NavLink>
                      </li>
                  );
              })}
          </ul>
      </Container></>
      
  );
}

export default Enquiries;