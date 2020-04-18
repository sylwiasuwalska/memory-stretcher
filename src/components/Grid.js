import React, { Fragment, useEffect, useRef, useState } from "react";
import "../styles/Grid.css";
import { Col, Row } from "react-bootstrap";

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
    } else {
      return "";
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
    }, 1500);
    return () => clearTimeout(timer);
  };

  const handleClick = (event) => {
    if (isShowing || isWinning || isLosing) {
      return;
    }
    let nodeID = event.target.getAttribute("data-index");
    if (randomNodes[nodeID] === 1) {
      randomNodes[nodeID] = 0;
      setCorrectlyClicked(correctlyClicked + 1);
      event.target.classList.add("clicked");
    } else {
      setWronglyClicked(wronglyClicked + 1);
    }
  };

  const displayScores = () => {
    if (isWinning) {
      return (
        <div>
          <p className={`${isWinning ? "scaling" : ""}`}>success!</p>
          <p> start again.</p>
        </div>
      );
    } else if (isLosing) {
      return (
        <div>
          <p>defeat!</p>
          <p> start again.</p>
        </div>
      );
    }
  };

  useEffect(() => {
    if (correctlyClicked === howManyNodes) {
      setIsWinning(true);
      setIsShowing(true);
      setTotalWins(totalWins + 1);
      setTimeout(() => {
        setCorrectlyClicked(0);
        return setClear(true);
      }, 2000);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);

  useEffect(() => {
    if (wronglyClicked === 3) {
      setIsLosing(true);
      setTotalDefeats(totalDefeats + 1);
      setTimeout(() => {
        setCorrectlyClicked(0);
        return setClear(true);
      }, 1000);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);

  return (
    <Row>
      <Col className="grid-container">
        {renderGrid(gridSize, isShowing, clear)}
        <button onClick={startGame}>START</button>
      </Col>
      <Col className="scores">
        <p>{`${correctlyClicked} nodes exposed. `} </p>
        <p>{`${howManyNodes - correctlyClicked} nodes remain to win. `}</p>
        <p>{`${wronglyClicked}  missed shots. `} </p>
        <p>{`${3 - wronglyClicked} shots left. `}</p>
        <p className="total">{`total wins ${totalWins} : ${totalDefeats} total defeats `}</p>
        {displayScores()}
      </Col>
    </Row>
  );
}

export default Grid;
