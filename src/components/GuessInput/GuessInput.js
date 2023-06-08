import React from "react";

function GuessInput({ guess, setGuess}) {

  function handleSubmit(event) {
    // Prevent the default browser behavior 
    event.preventDefault();
    // log to console, the {} renders in console as a object
    console.log({ guess });
    // reset the input
    setGuess('');
  }

  return (
    <>
     <form 
       className="guess-input-wrapper"
       onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          onChange={ (event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          />
    </form>
    </>
  );
}

export default GuessInput;
