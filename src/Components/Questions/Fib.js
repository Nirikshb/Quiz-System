// Components/Questions/Fib.js
import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Fib = ({ currentIndex, answers, handleAnswerChange, toggleBookmark, bookmarkedQuestions, currentQuestion }) => {
  return (
    <div className="fill-in-blank-container">
      {currentQuestion.question.split(/({[^}]+})/).map((part, index) => (
        part.startsWith('{') ? (
          <React.Fragment key={`input-${index}`}>
            <input
              type="text"
              className="fill-in-blank-input"
              value={answers[currentIndex][index] || ''} // Set value to the corresponding part of the answer array
              onChange={(e) => {
                // Update the specific part of the answer array
                const updatedAnswers = [...answers];
                updatedAnswers[currentIndex][index] = e.target.value;
                handleAnswerChange(currentIndex, updatedAnswers);
              }}
            />
            <span
              onClick={() => toggleBookmark(currentIndex)}
              className={`bookmark-icon ${
                bookmarkedQuestions.includes(currentIndex) ? 'bookmarked' : ''
              }`}
            >
              <FaBookmark />
            </span>
          </React.Fragment>
        ) : (
          <span key={`part-${index}`}>{part}</span>
        )
      ))}
      <span style={{ marginLeft: '5px' }}>Flag for later</span>
    </div>
  );
};

export default Fib;
