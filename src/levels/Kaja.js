import React, { useEffect } from "react";
import image from "../kaja.jpeg";
import scream from "../scream.mp3";

function Kaja() {
  let audio = new Audio(scream);
  const PlayIt = () => {
    audio.play();
  };

  useEffect(() => PlayIt(), []);

  return (
    <div>
      <img className="kaja" src={image} alt="**** *****" />
      <audio src={audio}></audio>

      <h1 className="restart">
        <a href="/maze">Restart?</a>
      </h1>
    </div>
  );
}

export default Kaja;
