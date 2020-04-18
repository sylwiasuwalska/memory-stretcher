import React, {Fragment, useEffect, useRef, useState} from "react";
import "../styles/Grid.css";

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
        <div key={index}>
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
      return <div>Win! Start again.</div>;
    } else if (isLosing) {
      return <div>You lost! Start again.</div>;
    } else {
      return (
        <Fragment>
          <div>
            {`Correctly clicked: ${correctlyClicked} Remain ${
              howManyNodes - correctlyClicked
            } nodes to win.`}
          </div>{" "}
          <div>
            {`Wrongly clicked: ${wronglyClicked} Clicks left ${
              3 - wronglyClicked
            }`}{" "}
          </div>
        </Fragment>
      );
    }
  };

  useEffect(() => {
    if (correctlyClicked === howManyNodes) {
      setIsWinning(true);
      setIsShowing(true);
      setTimeout(() => {
        setCorrectlyClicked(0);
        return setClear(true);
      }, 1000);
    }
    if (wronglyClicked === 3) {
      setIsLosing(true);
      setTimeout(() => {
        setCorrectlyClicked(0);
        return setClear(true);
      }, 1000);
    }
  }, [wronglyClicked, correctlyClicked, howManyNodes]);

  return (
    <div>
      <div className="scores">
        <button onClick={startGame}>Start</button>
        {displayScores()}
      </div>

      <div className="grid-container">
        {renderGrid(gridSize, isShowing, clear)}
      </div>
    </div>
  );
}

export default Grid;
