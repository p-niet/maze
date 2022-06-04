import React from "react";

export default function Lost() {
  return (
    <div className="lost-screen">
      <div className="lost-message">
        <h1>You've lost</h1>
        <h1>
          Try <a href="/maze">Again</a>
        </h1>
      </div>
    </div>
  );
}
