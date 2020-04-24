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
            <h5>
              Randomly chosen nodes are displayed for short amount of time.{" "}
            </h5>
            <h5>
              Player's task is to memorize and find them all in a less than
              three attempts.
            </h5>
          </header>
        </Col>
      </Row>

      <Grid sizeArray={5} />
    </Container>
  );
}

export default App;
