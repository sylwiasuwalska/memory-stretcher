import React, { useEffect, useState } from "react";
import "../styles/Grid.css";

function Grid(props) {
  const gridSize = [...Array(props.sizeArray)];
  const [isShowing, setIsShowing] = useState(true);
  const [randomNodes, setRandomNodes] = useState([]);

  const between = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomNodes = (size) => {
    const howManyNodes = Math.floor(size * size * 0.35);

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
        return "black";
      } else {
        return "";
      }
    } else {
      return "";
    }
  };

  const renderGrid = (array, isShowing) => {
    let counterID = -1;
    return array.map((row, index) => {
      return (
        <div key={index}>
          {array.map(() => {
            counterID++;
            return (
              <div
                key={counterID}
                className={`square ${showingRandomNodes(
                  randomNodes[counterID],
                  isShowing
                )}`}
              >
                {" "}
                {randomNodes[counterID]}
              </div>
            );
          })}
        </div>
      );
    });
  };

  useEffect(() => {
    getRandomNodes(props.sizeArray);
  },[]);

  return (
    <div className="grid-container">

      {renderGrid(gridSize, isShowing)}
      {setTimeout(()=>{setIsShowing(false)},3000 )}

    </div>
  );
}

export default Grid;
