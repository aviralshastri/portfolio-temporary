
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div data-scroll-container ref={containerRef}>{children}</div>;
};

export default ScrollContainer;
