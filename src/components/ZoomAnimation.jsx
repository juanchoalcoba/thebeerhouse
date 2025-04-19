import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeerScrollVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          width: "50vw",
          height: "50vh",
        },
        {
          width: "100vw",
          height: "100vh",
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: true,
            onLeave: () => {
              if (nextSectionRef.current) {
                window.scrollTo({
                  top: nextSectionRef.current.offsetTop,
                  behavior: "smooth",
                });
              }
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>

        <div>
            <h1 className="text-center font-bold text-7xl text-yellow-200">CERVEZA ARTESANAL</h1>
      <section
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        
        <video
          ref={videoRef}
          src="/futuro.mp4"  // Asegúrate de tener el video en la carpeta pública
          alt="Cerveza Futurista"
          className="object-cover z-8"
          style={{ position: "absolute" }}
          loop
          muted
          autoPlay
        />
      </section>
      </div>
    </>
  );
};

export default BeerScrollVideo;
