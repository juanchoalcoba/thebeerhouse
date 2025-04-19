'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });

    tl.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    tl.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );
  }, []);

  return (
    <div id='nosotros' className="relative w-full flex flex-col h-screen justify-center items-center overflow-hidden ">
      <div className="relative z-10 px-6 md:px-12 flex flex-col justify-center items-center h-full">
        <div className="flex flex-col md:flex-row justify-evenly gap-24 items-center">
          {/* Texto con animación */}
          <div
            ref={textRef}
            className="text-center md:text-left flex flex-col justify-start items-center md:items-start max-w-xl"
          >
            <h1 className="text-[42px] md:text-[50px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] font-bold text-blue-100">
              Acerca de Nosotros
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.2)] mt-4">
              En nuestra cervecería, no solo servimos cerveza artesanal: creamos
              una experiencia inolvidable. Cada sorbo cuenta una historia,
              elaborada con pasión, ingredientes seleccionados y técnicas
              tradicionales. El aroma del lúpulo fresco se mezcla con el sabor
              auténtico de nuestras recetas exclusivas, mientras el ambiente
              cálido y rústico invita a quedarse. Pero eso no es todo: nuestra
              cocina acompaña esta aventura con platos pensados para realzar
              cada cerveza, desde hamburguesas jugosas hasta tapas gourmet.
            </p>
          </div>

          {/* Imagen con animación */}
          <div ref={imageRef}>
            <img
              src="./señor.png"
              className="w-72 md:w-96 rounded-3xl drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)]"
              alt="Cervecero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
