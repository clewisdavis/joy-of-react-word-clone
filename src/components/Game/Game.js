import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  //lift up state
  const [guess, setGuess] = React.useState('');

  return <>
    <p>My Word Game!</p>
    <PreviousGuesses
      guess={guess}
    />
    <GuessInput
      guess={guess}
      setGuess={setGuess}
    />
  </>;
}

export default Game;
