import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  K D ENTERPRISES
                </span>
                <span className="text-xs sm:text-xs text-gray-500 uppercase tracking-wide">
                  Import • Export • Trading
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex xl:space-x-8 lg:space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/Services"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-4 flex-shrink-0">
            <div className="text-right">
              <div className="text-xs xl:text-sm font-semibold text-gray-800">
                +91 98915 11603
              </div>
              <div className="text-xs text-gray-500">Call for Inquiry</div>
            </div>
            <Link 
              to="/contact" 
              className="bg-gray-900 text-white px-4 xl:px-6 py-2 rounded-3xl font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-md text-xs xl:text-sm whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1 p-2 flex-shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 sm:w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 pb-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-3 px-4 sm:px-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/Services"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
            >
              Contact
            </Link>
            
            {/* Mobile Contact Info & CTA */}
            <div className="pt-4 space-y-4">
              <div className="text-center">
                <div className="font-semibold text-gray-800 text-lg">
                  +91 98915 11603
                </div>
                <div className="text-sm text-gray-500">Call for Inquiry</div>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium w-full text-center block hover:bg-gray-800 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;