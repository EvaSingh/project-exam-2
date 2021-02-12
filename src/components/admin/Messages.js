import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";


function Messages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const url = BASE_URL + "contacts";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // handle error
        if (json.error) {
          setMessages([]);
          setError(json.message);
        } else {
          setMessages(json);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (

  <>
  <Heading 
    title="Messages" 
    subtitle="Your messages are listed here" />
  <Container>
    {error && <div className="error">{error}</div>}
    <ul>
      {messages.map((message) => {
        return (
          <li key={message.id}>
            <NavLink to={`/admin/messages/view/${message.id}`}>{message.name}</NavLink>
          </li>
        );
      })}
    </ul>
  </Container>
  </>
      
  );
}

export default Messages;