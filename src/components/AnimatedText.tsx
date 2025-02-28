import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedText = ({ children, className }: AnimatedTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const isMobile = window.innerWidth < 768;
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: isMobile ? 20 : 50 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.8 : 1.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return <span ref={textRef} className={className}>{children}</span>;
};

export default AnimatedText; 