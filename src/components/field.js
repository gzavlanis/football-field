import React from "react";
import SoccerLineUp from "react-soccer-lineup";
import { Container } from "react-bootstrap";

export default function Field() {
  return (
    <Container className="my-5 shadow-lg">
      <SoccerLineUp size="responsive" color="green" pattern="lines" />
    </Container>
  );
}
