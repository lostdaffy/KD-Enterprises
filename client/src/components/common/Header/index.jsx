import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-8 lg:px-12">
        {" "}
        {/* Increased horizontal padding */}
        <div className="flex justify-between items-center py-4 px-4 lg:px-6">
          {" "}
          {/* Added extra padding */}
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  K D ENTERPRISES
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Import • Export • Trading
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/Services"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>
          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-800">
                +91 98915 11603
              </div>
              <div className="text-xs text-gray-500">Call for Inquiry</div>
            </div>
            <Link to="/contact" className="bg-gray-900 text-white px-6 py-2 rounded-3xl font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-md">
              Get Quote
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-4">
            {" "}
            {/* Added padding to mobile nav */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/Services"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Contact
            </Link>
            <div className="pt-4">
              <div className="text-center mb-3">
                <div className="font-semibold text-gray-800">
                  +91 98915 11603
                </div>
                <div className="text-sm text-gray-500">Call for Inquiry</div>
              </div>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium w-full hover:bg-gray-800">
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
