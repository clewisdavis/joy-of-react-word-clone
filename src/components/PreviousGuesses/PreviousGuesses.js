import React from "react";

function PreviousGuesses({ guess }) {
  return <>
    <div className="guess-results">
      <p className="guess">{ guess }</p>
      <p className="guess">GUESS</p>
    </div>
  </>;
}

export default PreviousGuesses;
