import React, { Fragment, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import RadioList from "./RadioList";

function Options(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTimeChange = (changeEvent) => {
    props.setDisplayTime(changeEvent.target.value);
  };

  const handleDifficultyChange = (changeEvent) => {
    props.setHowManyNodes(Math.floor(changeEvent.target.value*props.arraySize*props.arraySize));
  };

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
  };

  return (
    <>
      <button onClick={handleShow}>
        OPTIONS
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col>
                <RadioList
                  title={"Set display time:"}
                  handleChange={handleTimeChange}
                  handleFormSubmit={handleFormSubmit}
                  name={"time"}
                  value1={"1000"}
                  label1={"1 sec"}
                  value2={"2000"}
                  label2={"2 sec"}
                  value3={"3000"}
                  label3={"3 sec"}
                />
              </Col>

              <Col>
                <RadioList
                  title={"Set difficulty level:"}
                  handleChange={handleDifficultyChange}
                  handleFormSubmit={handleFormSubmit}
                  name={"difficulty"}
                  value1={0.3}
                  label1={"easy"}
                  value2={0.5}
                  label2={"medium"}
                  value3={0.7}
                  label3={"hard"}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            SAVE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Options;
