import React from "react";
import Nav from "react-bootstrap/Nav";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Nav.Link to="/">Go to the home page</Nav.Link>
      </p>
    </div>
  );
}

export default NoMatch;
