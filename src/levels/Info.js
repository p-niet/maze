import React from "react";

export const Info = ({ setIsInfoShown }) => {
  return (
    <div className="lost-screen">
      <div className="info-message">
        <h1>Instrukcja</h1>
        <br />
        <p>
          Witaj w Halloweenowej parodii Maze Game! <br />
          <br />
          Aby przejść do kolejnego poziomu najedź kursorem na pole START i
          przesuń kursor do pola FINISH bez najechania na granice labiryntu.
          <br />
          <br />
          Powodzenia!
          <br />
          <br />
          <br />
          <span
            className="go-back"
            onClick={() => {
              setIsInfoShown(false);
            }}
          >
            powrót
          </span>
        </p>
      </div>
    </div>
  );
};
