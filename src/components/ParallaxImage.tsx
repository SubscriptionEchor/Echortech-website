import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

const ParallaxImage: React.FC<Props> = ({ src, alt, speed = 0.5, className = '' }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    gsap.to(image, {
      yPercent: 30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, [speed]);

  return (
    <div ref={imageRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform scale-110"
      />
    </div>
  );
};

export default ParallaxImage;