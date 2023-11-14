// MultipleChoice.js
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import '../Questions/questions.css';

const MultipleChoice = ({ currentIndex, 
    question, 
    options, 
    selectedOptions, 
    handleAnswerChange, 
    toggleBookmark, 
    bookmarkedQuestions }) => 
    
    {
  console.log('currentIndex:', currentIndex);
  console.log('options:', options);
  console.log('selectedOptions:', selectedOptions);

  const isBookmarked = bookmarkedQuestions && bookmarkedQuestions.includes(currentIndex);

  return (
    <div>
      <p className="question-text">
        {question}
        <span
          onClick={() => toggleBookmark(currentIndex)}
          className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`}
        >
          <FaBookmark />
          <span className="flag-text">Flag for later</span>
        </span>
      </p>

      <label className="answer-label">Select one or more options:</label>

      {options.map((option, index) => (
        <div key={index} className="checkbox-option">
          <input
            type="checkbox"
            id={`option${index}`}
            name={`answer${currentIndex}`}
            value={option}
            checked={selectedOptions && selectedOptions.includes(option)}
            onChange={() => handleAnswerChange(currentIndex, option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
