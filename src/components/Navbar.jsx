import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply hero style for home and about pages
  const isHeroPage = location.pathname === "/" || location.pathname === "/about";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isHeroPage
          ? scrolled
            ? "bg-black/80 backdrop-blur-md" // Scrolled state
            : "bg-black/40 backdrop-blur-md" // Transparent at top
          : "bg-black/90 backdrop-blur-md" // Solid dark for other pages
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Karori Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 mr-2"
            />
            <div className="ml-8 sm:ml-12">
              <h1 className="text-white text-xs sm:text-base tracking-widest sm:tracking-[0.2em]">
                KARORI ACADEMIC ADVISOR
              </h1>
              <p className="text-gray-300 text-[5px] sm:text-[10px] tracking-widest sm:tracking-[0.3em]">
                Your Journey, Our Expertise
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 tracking-widest">
            <div className="flex space-x-8 text-gray-200 font-light mr-16">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/about" className="hover:text-white">About us</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 text-gray-300 px-4`}
      >
        <div className="py-3 space-y-2">
          <Link to="/" className="block hover:text-white">Home</Link>
          <Link to="/services" className="block hover:text-white">Services</Link>
          <Link to="/about" className="block hover:text-white">About us</Link>
          <Link to="/contact" className="block hover:text-white">Contact</Link>
          <Link
            to="/register"
            className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-center"
          >
            Register now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
