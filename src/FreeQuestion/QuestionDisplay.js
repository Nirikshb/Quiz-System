// QuestionDisplay.js
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import './QuestionDisplay.css';
import Freeform from '../Components/Questions/Freeform';
import MultipleChoice from '../Components/Questions/MultipleChoice';
import Fib from '../Components/Questions/Fib';
import SingleChoice from '../Components/Questions/SingleChoice';
import '../data/Question';

const QuestionDisplay = ({
  currentIndex,
  questions,
  bookmarkedQuestions,
  toggleBookmark,
  answers,
  handleAnswerChange,
  answerStatus,
  checkAnswer,
}) => 

{
  if (questions.length === 0 || currentIndex < 0 || currentIndex >= questions.length) {
    // no questions available
    return <div className="question-display">No questions available</div>;
  }

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) {
    return <div>Invalid question index</div>;
  }

  return (

    <div className="question-display">
      <h3 className={currentQuestion.type === 'freeform' ? 'freeform-header' : 'fill-in-blank-header'}>
        {currentQuestion.type === 'freeform'
          ? 'Freeform Question'
          : currentQuestion.type === 'fill_in_blank'
          ? 'Fill in the Blank Question'
          : currentQuestion.type === 'single_choice'
          ? 'Single Choice Question'
          : currentQuestion.type === 'multiple_choice'
          ? 'Multiple Choice Question'
          : null}
      </h3>

      {currentQuestion.type === 'fill_in_blank' ? (
        <Fib
          currentIndex={currentIndex}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          toggleBookmark={toggleBookmark}
          bookmarkedQuestions={bookmarkedQuestions}
          currentQuestion={currentQuestion}
        />
      ) : currentQuestion.type === 'freeform' ? (
        <>
          <p>
            {currentQuestion.question}
            <span
              onClick={() => toggleBookmark(currentIndex)}
              className={`bookmark-icon ${
                bookmarkedQuestions.includes(currentIndex) ? 'bookmarked' : ''
              }`}
            >
              <FaBookmark />
            </span>
            <span style={{ marginLeft: '5px' }}>Flag for later</span>
          </p>

          <label htmlFor={`answer${currentIndex}`} className="answer-label">
            Answer:
          </label>

          {currentQuestion.type === 'freeform' && (
            <>
              {/* Freeform component */}
              <Freeform
                currentIndex={currentIndex}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
              />
            </>
          )}
        </>
      ) : currentQuestion.type === 'single_choice' ? (
        <>
          
          <SingleChoice
           currentIndex={currentIndex}
           question={currentQuestion.question}
           options={currentQuestion.options}
           selectedOption={answers[currentIndex]}
           handleAnswerChange={handleAnswerChange}
           toggleBookmark={toggleBookmark}
          />
        </>
      ) : currentQuestion.type === 'multiple_choice' ? (
        <MultipleChoice
        currentIndex={currentIndex}
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOptions={answers[currentIndex]}
        handleAnswerChange={handleAnswerChange}
        toggleBookmark={toggleBookmark}
        bookmarkedQuestions={bookmarkedQuestions}
        />
      ) : null}

      <button className="check" onClick={checkAnswer}>
        Check
      </button>

      {answerStatus && (
        <div className={`answer-${answerStatus}`}>
          {answerStatus === 'correct' ? 'Correct!' : 'Wrong answer!'}
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
