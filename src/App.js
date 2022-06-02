import React, { useState, useEffect } from "react";
import Level1 from "./levels/Level1";
import "./App.css";
import Lost from "./levels/Lost";
import Level2 from "./levels/Level2";
import Kaja from "./levels/Kaja";

export default function App() {
  const [isLevelOne, setIsLevelOne] = useState(true);
  const [isLost, setIsLost] = useState(false);
  const [isKaja, setIsKaja] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let status = e.target.classList.value;
      if (status === "border") {
        setIsLost(true);
      }

      if (status === "border2") {
        setIsKaja(true);
      }
      // if (status === "finish2") {
      //   setIsKaja(true);
      // }

      if (status === "finish") {
        setIsLevelOne(false);
      }
    });
  });

  return (
    <div className="maze-app">
      {isLost && <Lost />}
      {isKaja && <Kaja />}
      <div className="header">
        <h1 className="main-title">
          {isLevelOne && "Level 1"}
          {!isLevelOne && "Level 2"}
        </h1>
        <h3 className="subtitle">Make it to the finish</h3>
      </div>
      <div className="game">
        {isLevelOne && <Level1 />}
        {!isLevelOne && <Level2 />}
      </div>
      <div className="signature">
        {" "}
        <p>
          <a href="https://github.com/p-niet">visit author (please)</a>
        </p>
      </div>
    </div>
  );
}
