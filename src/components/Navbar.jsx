import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/90 backdrop-blur-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center h-16">


                    {/* Logo + Title */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/logo.jpg"
                            alt="Karori Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 mr-2" // smaller overall
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


                    {/* Right side (Menu + Register) */}
                    {/* Right side (Menu + Register) */}
                    <div className="hidden lg:flex items-center space-x-6 tracking-widest">
                        {/* Menu links */}
                        <div className="flex space-x-8 text-gray-300 font-light mr-16">
                            <Link to="/" className="hover:text-white">Home</Link>
                            <Link to="/services" className="hover:text-white">Services</Link>
                            <Link to="/about" className="hover:text-white">About us</Link>
                            <Link to="/contact" className="hover:text-white">Contact</Link>
                        </div>

                        {/* Register button */}
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
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
            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden  bg-black/95 text-gray-300 px-4 py-3 space-y-2 transition-all duration-300 ease-in-out">
                    <Link to="/" className="block hover:text-white">
                        Home
                    </Link>
                    <Link to="/services" className="block hover:text-white">
                        Services
                    </Link>
                    <Link to="/about" className="block hover:text-white">
                        About us
                    </Link>
                    <Link to="/contact" className="block hover:text-white">
                        Contact
                    </Link>
                    <Link
                        to="/register"
                        className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-center"
                    >
                        Register now
                    </Link>
                </div>
            )}


        </nav>
    );
};

export default Navbar;
