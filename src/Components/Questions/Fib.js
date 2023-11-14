// Components/Questions/Fib.js
import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Fib = ({ currentIndex, answers, handleAnswerChange, toggleBookmark, bookmarkedQuestions, currentQuestion }) => {
  const isBookmarked = bookmarkedQuestions.includes(currentIndex);

  return (
    <div className="fill-in-blank-container">
      {currentQuestion.question.split(/({[^}]+})/).map((part, index) => (
        part.startsWith('{') ? (
          <React.Fragment key={`input-${index}`}>
            <div className="fib-input-container">
              <input
                type="text"
                className="fill-in-blank-input"
                value={answers[currentIndex][index] || ''}
                onChange={(e) => {
                  const updatedAnswers = [...answers];
                  updatedAnswers[currentIndex][index] = e.target.value;
                  handleAnswerChange(currentIndex, updatedAnswers);
                }}
              />
              <span
                onClick={() => toggleBookmark(currentIndex)}
                className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}
              >
                <FaBookmark />
                <span className="flag-text">Flag for later</span>
              </span>
            </div>
          </React.Fragment>
        ) : (
          <span key={`part-${index}`}>{part}</span>
        )
      ))}
    </div>
  );
};

export default Fib;