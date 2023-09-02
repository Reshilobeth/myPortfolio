import React, { useState } from 'react';
import _ from 'lodash';
// import './SmoothScroll.css'; // Add your own CSS for styling if needed

const SmoothScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);

  // Function to handle smooth scrolling
  const handleScroll = _.debounce(() => {
    const currentPosition = window.scrollY || window.pageYOffset;
    setScrollTop(currentPosition);
  }, 10); // Adjust the debounce delay as needed

  // Attach scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate scroll percentage for smooth effect
  const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  return (
    <div className="smooth-scroll-container">
      <div className="smooth-scroll-content">
        {/* Your content here */}
      </div>
      <div className="scroll-indicator" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
};

export default SmoothScroll;
