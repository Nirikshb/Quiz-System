// FreeChoiceQuestion.js

export const questions = [
  {
    id: 'q1',
    type: 'single_choice',
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: 'q2',
    type: 'single_choice',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    id: 'q3',
    type: 'single_choice',
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
    correctAnswer: 'Jupiter',
  },
  {
    id: 'q4',
    type: 'freeform',
    question: 'Calculate the square root of 16?',
    correctAnswer: '4',
  },
  {
    id: 'q5',
    type: 'freeform',
    question: 'What is the cube of 3?',
    correctAnswer: '27',
  },
  {
    id: 'q6',
    type: 'fill_in_blank',
    question: 'My favorite programming language is {__}',
    correctAnswer: ['JavaScript'],
  },
  {
    id: 'q7',
    type: 'fill_in_blank',
    question: 'I enjoy listening to {___} music',
    correctAnswer: ['jazz'],
  },
  {
    id: 'q8',
    type: 'fill_in_blank',
    question: 'The capital of France is {__}',
    correctAnswer: ['paris'],
  },
  {
    id: 'q9',
    type: 'multiple_choice',
    question: 'Which of the following are colors?',
    options: ['Red', 'Apple', 'Blue', 'Sky', 'Green', 'Grass'],
    correctAnswer: ['Red', 'Blue', 'Green'],
  },
  {
    id: 'q10',
    type: 'multiple_choice',
    question: 'Select the prime numbers:',
    options: ['2', '4', '7', '10', '13', '16'],
    correctAnswer: ['2', '7', '13'],
  },
  {
    id: 'q11',
    type: 'multiple_choice',
    question: 'Choose the fruits:',
    options: ['Carrot', 'Banana', 'Cucumber', 'Apple', 'Potato', 'Orange'],
    correctAnswer: ['Banana', 'Apple', 'Orange'],
  },
];
