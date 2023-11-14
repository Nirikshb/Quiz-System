import React from 'react';

const FlaggedQuestions = ({ showBookmarkedQuestions, 
  currentIndex, 
  questions }) => 
  {
  const isQuestionValid = questions[currentIndex];

  return showBookmarkedQuestions && isQuestionValid && 
  (
    <div className="flagged-questions">
      <h2>Flagged Questions</h2>
      <p>{questions[currentIndex].question}</p>
    </div>
  );
};

export default FlaggedQuestions;
