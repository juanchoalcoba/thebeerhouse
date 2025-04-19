// ZigzagBackground.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ZigzagBackground = () => {
  const zigzagRef = useRef(null);

  useEffect(() => {
    const zigzag = zigzagRef.current;

    gsap.to(zigzag, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      ease: 'none',
      motionPath: {
        path: [
          { x: 400, y: 150 },
          { x: 400, y: 300 },
          { x: -400, y: 200 },
          { x: 200, y: 200 },
          { x: 200, y: 200 },
          { x: 100, y: 200 },
        ],
        autoRotate: false
      }
    });
  }, []);

  return (
    <div
      ref={zigzagRef}
      className="fixed top-0 left-1/2 w-50 h-50 bg-cover bg-no-repeat drop-shadow-2xl rounded-full z-[-10] opacity-20 pointer-events-none"
      style={{
        transform: 'translateX(-80%)',
        backgroundImage: 'url(/luna.png)', // Reemplaza con la ruta correcta de la imagen
        backgroundSize: 'cover', // Ajusta el tamaño para que se adapte bien
        backgroundPosition: 'center',
      }}
    />
  );
};

export default ZigzagBackground;
