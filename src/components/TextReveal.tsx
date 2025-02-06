import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
  delay?: number;
}

const TextReveal: React.FC<Props> = ({ children, stagger = 0.1, y = 50, delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: 'lines,words,chars' });
    
    gsap.from(split.chars, {
      duration: 1,
      y: y,
      opacity: 0,
      stagger: stagger,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      delay: delay
    });

    return () => {
      split.revert();
    };
  }, [stagger, y, delay]);

  return <div ref={textRef}>{children}</div>;
};

export default TextReveal;