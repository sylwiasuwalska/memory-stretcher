import React from "react";
import Grid from "./Grid";
import "../styles/App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <header>
            <h1>memory stretcher</h1>
            <h4>
              Randomly chosen nodes are displayed for short amount of time.{" "}
            </h4>
            <h4>
              Player's task is to memorize and find them all in a less than
              three attempts.
            </h4>
          </header>
        </Col>
      </Row>

      <Grid sizeArray={5} />
    </Container>
  );
}

export default App;
