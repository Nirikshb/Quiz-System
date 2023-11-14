import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const BookmarkControls = ({ showNextBookmark, bookmarkedQuestions }) => {
  const hasBookmarks = bookmarkedQuestions.length > 0;

  return (
    <div className="bookmark-controls">
      <button
        className={`bigger-button blue-button ${hasBookmarks ? '' : 'disabled'}`}
        onClick={showNextBookmark}
        disabled={!hasBookmarks}
      >
        <FaBookmark />
      </button>
    </div>
  );
};

export default BookmarkControls;
