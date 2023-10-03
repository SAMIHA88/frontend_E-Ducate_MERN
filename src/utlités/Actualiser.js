import { useEffect } from 'react';

const ScrollToTopOnPageChange = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopOnPageChange;
