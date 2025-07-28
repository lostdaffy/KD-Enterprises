import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo Section - Using Link for home navigation */}
            <Link to="/" className="flex items-center space-x-4 mb-6 group">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  K D ENTERPRISES
                </span>
                <span className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <i className="ri-import-line"></i>
                  Import • Export • Trading
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-300 max-w-lg leading-relaxed text-sm lg:text-base">
              A trusted name in chemical and plastic product trading since{" "}
              <span className="font-semibold text-indigo-400">2008</span>. We
              specialize in PVC granules, titanium dioxide chemicals, and
              premium plastic products with a commitment to quality and customer
              satisfaction.
            </p>

            {/* Business Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10">
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <i className="ri-file-text-line text-indigo-400"></i>
                  <span className="text-gray-400">IEC: AHRPI1585L</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-bank-card-line text-indigo-400"></i>
                  <span className="text-gray-400">PAN: AHRPI1585L</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <i className="ri-building-2-line text-indigo-400"></i>
                  <span className="text-gray-400">Proprietorship Firm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links - All using Link with "to" */}
          <div className="space-y-6">
            <h4 className="text-lg lg:text-xl font-semibold flex items-center gap-2">
              <i className="ri-links-line text-indigo-400"></i>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <i className="ri-home-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <i className="ri-building-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                  <span>About Us</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <i className="ri-service-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <i className="ri-customer-service-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg lg:text-xl font-semibold flex items-center gap-2">
              <i className="ri-contacts-line text-indigo-400"></i>
              Get In Touch
            </h4>

            <div className="space-y-4">
              {/* Address */}
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ri-map-pin-line text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-medium mb-1 text-sm">
                    Our Location
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    R 1/10126-B, GALI NO 1<br />
                    WEST GORAKH PARK SHAHDARA
                    <br />
                    NEAR MANDIR
                    <br />
                    <span className="text-indigo-400 font-medium">
                      DELHI 110032, INDIA
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ri-mail-line text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-medium mb-1 text-sm">
                    Email Us
                  </div>
                  <a
                    href="mailto:kdenterprises1601@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm break-all"
                  >
                    kdenterprises1601@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ri-phone-line text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-medium mb-1 text-sm">
                    Call Us
                  </div>
                  <a
                    href="tel:+919891511603"
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                  >
                    +91 98915 11603
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/10 mt-12 lg:mt-16 pt-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <i className="ri-copyright-line text-indigo-400"></i>
                {currentYear} K D Enterprises. All rights reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            </div>

            {/* Legal Links - Using Link with "to" for internal pages */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
              >
                <i className="ri-shield-user-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
              >
                <i className="ri-file-text-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                Terms of Service
              </Link>
              <Link
                to="/trade-terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
              >
                <i className="ri-handshake-line text-indigo-400 group-hover:scale-110 transition-transform"></i>
                Trade Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
