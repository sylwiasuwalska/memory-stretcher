import React, { Fragment, useEffect, useState } from "react";
import "../styles/Grid.css";
import { Col, ProgressBar, Row } from "react-bootstrap";
import Options from "./Options";
import Scores from "./Scores";

function Grid(props) {
  const gridSize = [...Array(props.sizeArray)];
  const [nodes, setNodes] = useState([]);
  const [howManyNodes, setHowManyNodes] = useState(
    Math.floor(props.sizeArray * props.sizeArray * 0.3)
  );

  const [isShowing, setIsShowing] = useState(false);
  const [correctlyClicked, setCorrectlyClicked] = useState(0);
  const [wronglyClicked, setWronglyClicked] = useState(0);
  const [isWinning, setIsWinning] = useState(false);
  const [isLosing, setIsLosing] = useState(false);

  const [clear, setClear] = useState(false);

  const [totalWins, setTotalWins] = useState(0);
  const [totalDefeats, setTotalDefeats] = useState(0);

  const [displayTime, setDisplayTime] = useState(1000);

  const between = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomNodes = (size) => {
    const randomNodes = Array.from(Array(size * size), () => 0);

    for (let i = 1; i <= howManyNodes; i++) {
      let indexOfCurrentNode = between(1, size * size) - 1;
      while (randomNodes[indexOfCurrentNode] === 1) {
        indexOfCurrentNode = between(1, size * size) - 1;
      }
      randomNodes[indexOfCurrentNode] = 1;
    }
    setNodes(randomNodes);
  };

  const showingNodes = (indicator, isShowing, isWinning) => {
    if (isWinning) {
      return "winning";
    }
    if (isLosing) {
      return "losing";
    }
    if (isShowing) {
      if (indicator === 1) {
        return "chosen";
      } else {
        return "";
      }
    } else if (indicator === 2) {
      return "clicked";
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
                    : `square ${showingNodes(
                        nodes[counterID],
                        isShowing,
                        isWinning
                      )}`
                }
                onClick={(e) => handleClick(e)}
                onAnimationEnd={(e) => e.target.classList.remove("missed")}
                data-testid="node"
              >
                {/*{nodes[counterID]}*/}
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
    }, displayTime);
    return () => clearTimeout(timer);
  };

  const handleClick = (event) => {
    if (isShowing || isWinning || isLosing) {
      return;
    }
    let nodeID = event.target.dataset.index;
    if (nodes[nodeID] === 1) {
      nodes[nodeID] = 2;
      setCorrectlyClicked(correctlyClicked + 1);
    } else if (nodes[nodeID] === 2) {
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
      }, 1500);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);


  return (
    <Fragment>
      <ProgressBar
        now={isLosing ? 0 : (correctlyClicked / howManyNodes) * 100}
        label={`${isLosing ? 0 : `${correctlyClicked}/${howManyNodes}`}`}
      />

      <Row>
        <Col className={`grid-container ${isLosing ? "missed" : ""}`}>
          {renderGrid(gridSize, isShowing, clear)}
          <Row>
            <Col>
              <Options
                setDisplayTime={setDisplayTime}
                setHowManyNodes={setHowManyNodes}
                arraySize={props.sizeArray}
              />
            </Col>
            <Col>
              <button onClick={startGame}>START</button>
            </Col>
          </Row>
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
              displayTime,
            ]}
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Grid;
