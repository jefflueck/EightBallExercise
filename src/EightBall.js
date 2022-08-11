import React, { useState } from 'react';
import './EightBall.css';
import answers from './answers';

const EightBall = () => {
  const [answer, setAnswer] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  const [guess, setGuess] = useState(0);
  const newAnswer = () => {
    const { msg, color } = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(msg);
    setColor(color);
    setGuess(guess + 1);
  };
  const reset = () => {
    setAnswer('Think of a Question');
    setColor('black');
    setGuess(0);
  };
  return (
    <>
      <h1 className="EightBall-header">The Magic Eight Ball!</h1>
      <p className="EightBall-guesses">
        It checked the wisdom of the EightBall{' '}
        <span className="EightBall-guess-number">{guess}</span> times!
      </p>
      <div className="EightBall" style={{ backgroundColor: color }}>
        <b className="EightBall-text">{answer}</b>
      </div>
      <div className="EightBall-button-group">
        <button className="EightBall-button-guess" onClick={newAnswer}>
          Ask the EightBall!
        </button>
        <button className="EightBall-button-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default EightBall;
