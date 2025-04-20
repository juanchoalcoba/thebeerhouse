import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["Inicio", "Reservas", "Nosotros", "Contacto"];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0); // ✅ usamos un ref en vez de useState

  const toggleNavMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const lastY = lastScrollYRef.current;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastY) {
      setIsNavVisible(true);
    }

    lastScrollYRef.current = currentScrollY; // ✅ actualizamos el ref sin causar re-render
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-12 border-none transition-all duration-700 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 p-2">
        <nav className="flex size-full items-center justify-between pt-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="w-[100px] rounded-full" />
          </div>

          <div className="flex h-full items-center">
            {/* Menú en pantallas grandes */}
            <div className="hidden lg:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="mr-8 text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Ícono de hamburguesa para pantallas pequeñas */}
            <button
              className="block lg:hidden text-blue-50 z-50 mr-16 relative"
              onClick={toggleNavMenu}
            >
              {isNavOpen ? (
                <FiX className="text-2xl text-black" />
              ) : (
                <FiMenu className="text-2xl text-blue-50" />
              )}
            </button>

            {/* Menú desplegable en pantallas pequeñas */}
            <div
              className={clsx(
                "fixed inset-0 z-40 flex flex-col items-center justify-center h-screen bg-white bg-opacity-90 backdrop-blur-lg transition-transform transform",
                {
                  "translate-y-full opacity-0": !isNavOpen,
                  "translate-y-0 opacity-100": isNavOpen,
                }
              )}
              style={{ transition: "all 0.5s ease-in-out" }}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl mb-4 font-bold text-center text-black"
                  onClick={toggleNavMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
