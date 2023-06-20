import React from "react";
import { range } from "../../utils";

function Guess({ numRows, numCols, guesses }) {
  return (
    <>
      <div className="guess-results">
        { // render the rows, map over
          range(numRows).map(num => (
            <p key={num} className="guess">
              { // render the columns, map over
                range(numCols).map(num => (
                  <span className="cell">{ guesses }</span>
                ))
              }
            </p>
          ))
        }
      </div>
    </>
  )
}

export default Guess;
