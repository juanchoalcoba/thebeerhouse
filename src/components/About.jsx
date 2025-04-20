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
    <section
      id="nosotros"
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Texto */}
        <div
          ref={textRef}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-amber-900 tracking-tight mb-4 drop-shadow-md">
            Acerca de <span className="text-amber-600">Nosotros</span>
          </h2>
          <p className="max-w-md md:max-w-lg text-base md:text-lg text-zinc-800 font-medium leading-relaxed drop-shadow-sm">
            En nuestra cervecería artesanal, no solo servimos cerveza: creamos experiencias. 
            Cada sorbo cuenta una historia elaborada con pasión, ingredientes seleccionados 
            y técnicas tradicionales. Sumergite en el aroma del lúpulo fresco y sabores que 
            evocan nuestra herencia rústica y cálida.
          </p>

          <div className="mt-8">
            <a
              href="#reservas"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
            >
              Conocé Más
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div
          ref={imageRef}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-72 md:w-96">
            <img
              src="./señor.png"
              alt="Cervecero"
              className="rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-amber-200 object-cover"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
