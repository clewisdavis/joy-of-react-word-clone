import React from "react";

function PreviousGuesses({ guesses }) {
  return <>
    <div className="guess-results">
      <p className="guess">{ guesses.toString() }</p>
    </div>
  </>;
}

export default PreviousGuesses;
