import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        // when scrolling past home section
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav
  className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white" : "bg-transparent"
  }`}
>

      <div className="container mx-auto flex items-center justify-end px-6 py-4">
        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-12 font-bold transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <li>
            <a href="#home" className="hover:text-yellow-400">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 font-bold text-gray-800 shadow-md">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
