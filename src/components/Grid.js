import React, { useEffect, useState } from "react";
import "../styles/Grid.css";

function Grid(props) {

  const gridSize = [...Array(props.sizeArray)];
  const [isShowing, setIsShowing] = useState(false);
  const [randomNodes, setRandomNodes] = useState([]);
  const [correctlyClicked, setCorrectlyClicked] = useState(0);
  const [howManyNodes, setHowManyNodes] = useState(Math.floor(props.sizeArray * props.sizeArray * 0.35))
  const [initialClass, setInitialClass] = useState(false);

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

  const showingRandomNodes = (indicator, isShowing, initialClass) => {
    if (initialClass) {
      return "";
    }
    if (isShowing) {
      if (indicator === 1) {
        return "black";
      } else {
        return "";
      }
    } else {
      return "";
    }
  };


  const renderGrid = (array, isShowing, initialClass) => {
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
                className={`square ${showingRandomNodes(
                  randomNodes[counterID],
                  isShowing, initialClass
                )}`}
                onClick={(e)=>handleClick(e)}
              >
                {randomNodes[counterID]}
              </div>
            );
          })}
        </div>
      );
    });
  };


  const startGame = () => {
    getRandomNodes(props.sizeArray);

    setIsShowing(true)
    const timer = setTimeout(() => {
      setIsShowing(false);
    }, 1500);
    return () => clearTimeout(timer);
  };

  const handleClick = (event) => {
    let nodeID = event.target.getAttribute("data-index");
    if (randomNodes[nodeID]===1) {
      randomNodes[nodeID]=0;
      setCorrectlyClicked(correctlyClicked+1)
      event.target.classList.add("blue")
    }
  }

  const displayScores = () => {
    if (correctlyClicked=== howManyNodes) {
      return "Win! Start again."
    } else {
    return `Correctly clicked: ${correctlyClicked} Remain: ${howManyNodes-correctlyClicked}`
    }
  }



  return (
    <div>
      <button onClick={startGame}>Start</button>
      <div>{displayScores()}</div>


      <div className="grid-container">
        {renderGrid(gridSize, isShowing, initialClass)}
      </div>
    </div>
  );
}

export default Grid;
