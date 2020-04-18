import React from "react";
import Grid from "./Grid";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memory Stretcher</h1>
      </header>
      <Grid sizeArray={4} />
    </div>
  );
}

export default App;
