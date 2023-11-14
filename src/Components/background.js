// src/components/Background.js
import React from 'react';
import './Background.css';
import FreeChoiceQuestion from '../FreeQuestion/FreeChoiceQuestion';

const Background = () => (
  <div className="background-container">
    <div className="square-box">
      <FreeChoiceQuestion />
    </div>
  </div>
);

export default Background;
