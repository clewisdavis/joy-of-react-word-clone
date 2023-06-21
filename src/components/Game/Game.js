import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    //TODO
    console.log('Received guess', tentativeGuess);
    setGuesses([...guesses, tentativeGuess]);
  }

  return <>
    <p>My Word Game!</p>
    <PreviousGuesses
      guesses={guesses}
    />
    <GuessInput
      handleSubmitGuess={handleSubmitGuess}
    />
  </>;
}

export default Game;
