import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Game state variable, running / won / lost are the three options
  const [gameStatus, setGameStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]

    setGuesses(nextGuesses);

    // check game status
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return <>
    <p>My Word Game!</p>
    {gameStatus}
    <PreviousGuesses
      guesses={guesses}
      answer={answer}
    />
    <GuessInput
      handleSubmitGuess={handleSubmitGuess}
      gameStatus={gameStatus}
    />
    {gameStatus !== 'running' && (
      <GameOverBanner 
        gameStatus={gameStatus} 
        numOfGuesses={guesses.length} 
        answer={answer}  
      />
    )}
  </>;
}

export default Game;
