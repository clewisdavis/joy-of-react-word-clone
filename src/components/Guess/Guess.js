import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
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
