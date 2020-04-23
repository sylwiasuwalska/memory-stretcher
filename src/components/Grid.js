import React, { useEffect, useState } from "react";
import "../styles/Grid.css";
import { Col, Row } from "react-bootstrap";
import Scores from "./Scores";

function Grid(props) {
  const gridSize = [...Array(props.sizeArray)];
  const [randomNodes, setRandomNodes] = useState([]);
  const [howManyNodes, setHowManyNodes] = useState(
    Math.floor(props.sizeArray * props.sizeArray * 0.35)
  );

  const [isShowing, setIsShowing] = useState(false);
  const [correctlyClicked, setCorrectlyClicked] = useState(0);
  const [wronglyClicked, setWronglyClicked] = useState(0);
  const [isWinning, setIsWinning] = useState(false);
  const [isLosing, setIsLosing] = useState(false);

  const [clear, setClear] = useState(false);

  const [totalWins, setTotalWins] = useState(0);
  const [totalDefeats, setTotalDefeats] = useState(0);

  const between = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomNodes = (size) => {
    const randomNodes = Array.from(Array(size * size), () => 0);
    for (let i = 1; i <= howManyNodes; i++) {
      let indexOfCurrentNode = between(1, size * size) - 1;
      while (randomNodes[indexOfCurrentNode] === 1) {
        indexOfCurrentNode = between(1, size * size);
      }
      randomNodes[indexOfCurrentNode] = 1;
    }
    setRandomNodes(randomNodes);
  };

  const showingRandomNodes = (indicator, isShowing) => {
    if (isShowing) {
      if (indicator === 1) {
        return "chosen";
      } else {
        return "";
      }
    } else if (indicator === 2) {
      return "clicked";
    }
  };

  const renderGrid = (array, isShowing, clear) => {
    let counterID = -1;
    return array.map((row, index) => {
      return (
        <div key={index} className="grid-row">
          {array.map(() => {
            counterID++;
            return (
              <div
                key={counterID}
                data-index={counterID}
                className={
                  clear
                    ? `square`
                    : `square ${showingRandomNodes(
                        randomNodes[counterID],
                        isShowing
                      )}`
                }
                onClick={(e) => handleClick(e)}
                onAnimationEnd={(e) => e.target.classList.remove("missed")}
              >
                {/*{randomNodes[counterID]}*/}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const startGame = () => {
    getRandomNodes(props.sizeArray);
    setClear(false);
    setIsWinning(false);
    setIsLosing(false);
    setIsShowing(true);
    setCorrectlyClicked(0);
    setWronglyClicked(0);
    const timer = setTimeout(() => {
      setIsShowing(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  //TODO improve: add class multiple times

  const handleClick = (event) => {
    if (isShowing || isWinning || isLosing) {
      return;
    }
    let nodeID = event.target.getAttribute("data-index");
    if (randomNodes[nodeID] === 1) {
      randomNodes[nodeID] = 2;
      setCorrectlyClicked(correctlyClicked + 1);
    } else if (randomNodes[nodeID] === 2) {
      event.target.classList.add("missed");
    } else {
      event.target.classList.add("missed");
      setWronglyClicked(wronglyClicked + 1);
    }
  };

  useEffect(() => {
    if (correctlyClicked === howManyNodes) {
      setIsWinning(true);
      setIsShowing(true);
      setTotalWins((t) => t + 1);
      setTimeout(() => {
        return setClear(true);
      }, 2000);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);

  useEffect(() => {
    if (wronglyClicked === 3) {
      setIsLosing(true);
      setTotalDefeats((t) => t + 1);
      setTimeout(() => {
        return setClear(true);
      }, 100);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);

  return (
    <Row>
      <Col className={`grid-container ${isLosing ? "missed" : ""}`}>
        {renderGrid(gridSize, isShowing, clear)}
        <button onClick={startGame}>START</button>
      </Col>
      <Col className="scores">
        <Scores
          scores={[
            correctlyClicked,
            howManyNodes,
            wronglyClicked,
            totalWins,
            totalDefeats,
            isWinning,
            isLosing,
          ]}
        />
      </Col>
    </Row>
  );
}

export default Grid;
