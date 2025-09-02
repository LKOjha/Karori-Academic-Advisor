import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // 👈 icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light"); // 👈 theme state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // 👇 Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Updated to include "/services" in the hero pages
  const isHeroPage = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/services";
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500  
        ${isHeroPage
          ? scrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-black/40 backdrop-blur-md"
          : "bg-black/90 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <a href="/">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="Karori Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2"
              />
              <div className="ml-8 sm:ml-12">
                <h1 className="text-white dark:text-gray-200 text-xs sm:text-base tracking-widest sm:tracking-[0.2em]">
                  KARORI ACADEMIC ADVISOR
                </h1>
                <p className="text-gray-300 dark:text-gray-400 text-[5px] sm:text-[10px] tracking-widest sm:tracking-[0.3em]">
                  Your Journey, Our Expertise
                </p>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 tracking-widest">
            <div className="flex space-x-8 text-gray-200 font-light mr-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/about" className="hover:text-white">About us</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>

            {/* 👇 Dark mode toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white mr-6 transition"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* 👇 Dark mode toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

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
        className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out 
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
          bg-black/90 text-gray-300 px-4`}
      >
        <div className="py-3 space-y-2">
          <Link to="/" className="block hover:text-white" onClick={handleLinkClick}>Home</Link>
          <Link to="/services" className="block hover:text-white" onClick={handleLinkClick}>Services</Link>
          <Link to="/about" className="block hover:text-white" onClick={handleLinkClick}>About us</Link>
          <Link to="/contact" className="block hover:text-white" onClick={handleLinkClick}>Contact</Link>
          <Link
            to="/register"
            className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-center"
            onClick={handleLinkClick}
          >
            Register now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;