// Freeform.js
import React from 'react';

const Freeform = ({ currentIndex, answers, handleAnswerChange }) => (
  
  <input
    type="text"
    id={`answer${currentIndex}`}
    className="freeform-input"
    value={answers[currentIndex]}
    onChange={(e) => handleAnswerChange(currentIndex, e.target.value)}
  />
);

export default Freeform;
