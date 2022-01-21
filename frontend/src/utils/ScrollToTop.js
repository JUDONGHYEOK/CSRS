import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    // document.documentElement.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return children;
}

export default ScrollToTop;
