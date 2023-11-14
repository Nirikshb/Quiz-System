// NavigationButtons.js
import React from 'react';


const NavigationButtons = ({ goPrev, goNext, currentIndex, totalQuestions }) => {
  return (
    <div className="button-container">
      <button
        className="nav-button bigger-button blue-button"
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
      <button
        className="nav-button bigger-button blue-button"
        onClick={goNext}
        disabled={currentIndex === totalQuestions - 1}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
