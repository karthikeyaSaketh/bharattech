// ScrollToTopButton.jsx
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-full shadow-lg z-50"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
