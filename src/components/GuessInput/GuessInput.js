import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  return (
    <>
     <form 
       className="guess-input-wrapper"
       onSubmit={ (event) => {
        event.preventDefault();
        setGuess('');
        console.log(guess);
       }
      }
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input"
          type="text"
          value={guess}
          onChange={ (event) => {
            const inputValue = event.target.value.toUpperCase();
            setGuess(inputValue);
          }}
          />
    </form>
    </>
  );
}

export default GuessInput;
