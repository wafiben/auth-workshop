import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ elt, operation }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {operation === "getArticle" && (
          <Card.Title> {elt.nameOfArticle} </Card.Title>
        )}
        {operation === "getUsers" && (
          <>
            <Card.Title> {elt.userName} </Card.Title>
            <Card.Title> {elt.email} </Card.Title>
          </>
        )}

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
