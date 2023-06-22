import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <>
      <p className="guess">
        {
          // split method to break it down to each letter
          range(5).map((num) => (
            <span key={num} className="cell">
              {value ? value[num] : undefined}
            </span>
          ))
        }
      </p>
    </>
  )
}

export default Guess;
