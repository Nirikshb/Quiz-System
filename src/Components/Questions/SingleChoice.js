// SingleChoice.js

import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import '../Questions/questions.css';

const SingleChoice = ({ currentIndex, question, options, selectedOption, handleAnswerChange, toggleBookmark, bookmarkedQuestions }) => {
  console.log('currentIndex:', currentIndex);
  console.log('options:', options);
  console.log('selectedOption:', selectedOption);

  const isBookmarked = bookmarkedQuestions && bookmarkedQuestions.includes(currentIndex);

  const handleBookmarkClick = () => {
    if (typeof toggleBookmark === 'function') {
      toggleBookmark(currentIndex);
    }
  };

  return (
    <div>
       <p className="question-text">
        {question}
        <span
          onClick={handleBookmarkClick}
          className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}
        >
          <FaBookmark />
          <span className="flag-text">Flag for later</span>
        </span>
      </p>
      <label className="answer-label">Select an option:</label>
      {options.map((option, index) => (
        <div key={index} className="radio-option">
          <input
            type="radio"
            id={`option${index}`}
            name={`answer${currentIndex}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleAnswerChange(currentIndex, option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default SingleChoice;
