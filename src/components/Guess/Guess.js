import React from "react";
import { range } from "../../utils";

function Guess({ numRows, numCols, guesses, value }) {
  return (
    <>
      <p className="guess">
        {
          // slit method to break it down to each letter
          value.split('').map((letter, index) => (
            <span key={index} className="cell">{letter}</span>
          ))
        }
      </p>
    </>
  )
}

export default Guess;
