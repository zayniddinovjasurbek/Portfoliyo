import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import "./ScrollToTop.css"

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowCircleUp size={50} />
    </div>
  );
}

export default ScrollToTop;
