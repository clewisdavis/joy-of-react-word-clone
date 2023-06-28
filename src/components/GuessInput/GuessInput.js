import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {

  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    // Prevent the default browser behavior 
    event.preventDefault();
    // log to console, the {} renders in console as a object
    console.log({ tentativeGuess });
    // pass value up
    handleSubmitGuess(tentativeGuess);
    // reset the input
    setTentativeGuess('');
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
          disabled={gameStatus !== 'running'}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={ (event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          />
    </form>
    </>
  );
}

export default GuessInput;
