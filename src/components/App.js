import React from "react";
import Grid from "./Grid";
import "../styles/App.css";
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <header>
            <h1>memory stretcher</h1>
          </header>
        </Col>
      </Row>

      <Grid sizeArray={5} />

    </Container>
  );
}

export default App;
