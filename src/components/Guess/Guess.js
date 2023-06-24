import React from "react";
import { range } from "../../utils";

import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {

  const result = checkGuess(value, answer);
  console.log( {answer} );

  return (
    <>
      <p className="guess">
        {
          // range utility to render the guess boxes
          range(5).map((num) => (
            <span key={num} className="cell">
              { // condition to show the value
                value ? value[num] : undefined
              }
            </span>
          ))
        }
      </p>
    </>
  )
}

export default Guess;
