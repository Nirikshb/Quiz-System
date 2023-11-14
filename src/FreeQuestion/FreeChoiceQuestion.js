// FreeChoiceQuestion.js
import React, { useState } from 'react';
import './FreeChoiceQuestion.css';
import NavigationButtons from './NavigationButton';
import QuestionDisplay from './QuestionDisplay';
import BookmarkControls from './BookmarkControls';
import FlaggedQuestions from './FlaggedQuestions';
import { questions } from '../data/Question';

const FreeChoiceQuestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem('freeChoiceQuestionAnswers');
    if (storedAnswers) {
      return JSON.parse(storedAnswers);
    }

    // Initialize state with an array of arrays
    return Array(questions.length).fill([]);
  });

  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(
    JSON.parse(localStorage.getItem('bookmarkedQuestions')) || []
  );
  const [showBookmarkedQuestions, setShowBookmarkedQuestions] = useState(false);
  const [currentBookmarkIndex, setCurrentBookmarkIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');

  const handleAnswerChange = (index, value) => {
    setAnswers((prevAnswers) => {
      
      const updatedAnswers = [...prevAnswers];
      
      // Toggle the selected value in the array for the specific question index
      if (updatedAnswers[index].includes(value)) {
        updatedAnswers[index] = updatedAnswers[index].filter((option) => option !== value);
      } else {
        updatedAnswers[index] = [...updatedAnswers[index], value];
      }

      return updatedAnswers;
    });
  };

  const toggleBookmark = (index) => {
    if (bookmarkedQuestions.includes(index)) {
      setBookmarkedQuestions(bookmarkedQuestions.filter((item) => item !== index));
    } else {
      setBookmarkedQuestions([...bookmarkedQuestions, index]);
    }
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
  
    if (!currentQuestion || currentQuestion.correctAnswer === undefined) {
      console.error('Invalid question data for current index:', currentIndex);
      return;
    }
  
    const correctAnswers = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer
      : [currentQuestion.correctAnswer];
  
    console.log('Correct Answers (Formatted):', correctAnswers);
  
    const userAnswers = answers[currentIndex];
  
    console.log('User Answers:', userAnswers);
  
    // Check if all correct answers are selected
    const allCorrectSelected = correctAnswers.every(correct => userAnswers.includes(correct));
  
    if (allCorrectSelected) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => {
      setAnswerStatus('');
      return prevIndex > 0 ? prevIndex - 1 : prevIndex;
    });
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => {
      setAnswerStatus('');
      return prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const showNextBookmark = () => {
    setAnswerStatus('');
    if (bookmarkedQuestions.length > 0) {
      setCurrentIndex(bookmarkedQuestions[currentBookmarkIndex]);
      setCurrentBookmarkIndex((prevIndex) => (prevIndex + 1) % bookmarkedQuestions.length);
    }
  };

  return (
    <div className="free-choice-container">
      <QuestionDisplay
        currentIndex={currentIndex}
        questions={questions}
        bookmarkedQuestions={bookmarkedQuestions}
        toggleBookmark={toggleBookmark}
        answers={answers}
        handleAnswerChange={handleAnswerChange}
        answerStatus={answerStatus}
        checkAnswer={checkAnswer}
      />

      <NavigationButtons
        goPrev={goPrev}
        goNext={goNext}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
      />

      <BookmarkControls
        showNextBookmark={showNextBookmark}
        bookmarkedQuestions={bookmarkedQuestions}
      />

      <FlaggedQuestions
        showBookmarkedQuestions={showBookmarkedQuestions}
        currentIndex={currentIndex}
        questions={questions}
      />
      
      


    </div>
  );
};

export default FreeChoiceQuestion;
