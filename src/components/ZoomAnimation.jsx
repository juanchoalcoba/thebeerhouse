import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeerScrollVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          width: "60vw",
          height: "60vh",
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
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div>
        <section
          ref={containerRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-center font-extrabold font-roboto text-3xl md:text-6xl mt-4 z-20 backdrop-blur-sm rounded-full p-4  text-yellow-100">
            CERVEZA ARTESANAL
          </h1>

          <video
            ref={videoRef}
            src="/futuro.mp4"
            className="object-cover z-8 will-change-transform"
            style={{ position: "absolute", transform: "translateZ(0)" }}
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
