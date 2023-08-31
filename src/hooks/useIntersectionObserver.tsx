import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (callback: () => void) => {
  const target = useRef(null);
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 1.0,
  };
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      callback();
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return { target };
};
