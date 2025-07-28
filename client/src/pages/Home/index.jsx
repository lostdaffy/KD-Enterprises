import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../components/common/Forms/Index";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <section className="w-full min-h-screen pt-12 bg-gray-100 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center h-full py-8 lg:py-0">
            {/* Left Content Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Glad to Have You at{" "}
                  <span className="text-indigo-500">KD Enterprises!</span>
                  <br />
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  KD Enterprises delivers innovative solutions and premium
                  quality products that drive your business forward. Committed
                  to excellence, reliability, and customer satisfaction in every
                  partnership.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="bg-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold hover:bg-indigo-600 transition duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Now</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-500">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-500">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-500">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Main Product Image */}
                <div className="col-span-2">
                  <img
                    src="/images/white-crystals-texture.jpg"
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                    alt="KD Enterprises Product 1"
                  />
                </div>

                {/* Secondary Images */}
                <div>
                  <img
                    src="/images/214886.jpg"
                    className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    alt="KD Enterprises Product 2"
                  />
                </div>

                <div>
                  <img
                    src="/images/26764.jpg"
                    className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    alt="KD Enterprises Product 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/3335463.jpg"
                alt="K D Enterprises Manufacturing Facility"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                About <span className="text-indigo-500">K D Enterprises</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Established as a leading player in the chemical trading
                industry, K D Enterprises has built a reputation for excellence,
                reliability, and innovation. We specialize in the import and
                export of high-quality PVC granules, titanium dioxide chemicals,
                and plastic products.
              </p>
              <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our commitment to quality, competitive pricing, and customer
                satisfaction has made us a trusted partner for businesses across
                various industries worldwide. With our extensive network and
                deep industry expertise, we ensure seamless trading experiences
                and long-term partnerships.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center p-3 sm:p-4 lg:p-5 bg-gray-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-500 mb-1 sm:mb-2">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-5 bg-gray-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-500 mb-1 sm:mb-2">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Products Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose K D Enterprises?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Your reliable partner for chemical trading with proven expertise
              and commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      Quality Assured Products
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      All our products meet international quality standards with
                      rigorous testing and certification processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      Timely Delivery
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Efficient logistics network ensuring on-time delivery
                      across global markets with real-time tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Best market rates with flexible payment terms and
                      transparent pricing structure for long-term partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      Global Network
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Extensive import-export expertise with established
                      networks across 15+ countries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="/images/white-crystals-texture.jpg"
                alt="Global Trading Network"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Features & Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your chemical trading and
              manufacturing needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="group  p-6 sm:p-8 rounded-2xl border border-indigo-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Import & Export Services
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Complete import-export solutions with documentation, customs
                    clearance, and logistics management for seamless
                    international trade.
                  </p>
                </div>

                <div className="group  p-6 sm:p-8 rounded-2xl border border-indigo-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Quality Control
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Rigorous quality testing and certification processes
                    ensuring all products meet international standards and
                    specifications.
                  </p>
                </div>

                <div className="group  p-6 sm:p-8 rounded-2xl border border-indigo-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Technical Support
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Expert technical consultation and support for product
                    selection, application guidance, and troubleshooting.
                  </p>
                </div>

                <div className="group bg-gradient-to-br  p-6 sm:p-8 rounded-2xl border border-indigo-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Fast Delivery
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Efficient supply chain management with multiple warehouse
                    locations ensuring quick delivery and inventory
                    availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
              <img
                src="/images/117023.jpg"
                alt="Quality Control Laboratory"
                className="rounded-2xl shadow-lg w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover"
              />
              <img
                src="/images/44643.jpg"
                alt="Warehouse and Logistics"
                className="rounded-2xl shadow-lg w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality chemicals and plastic products for various industries
              worldwide
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="group hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src="/images/982673.jpg"
                  alt="PVC Granules"
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  PVC Granules
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Premium quality PVC granules suitable for various applications
                  including pipes, cables, automotive parts, and industrial
                  products.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    High thermal stability
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Excellent processability
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Multiple grades available
                  </li>
                </ul>
              </div>
            </div>

            <div className="group hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src="/images/214886.jpg"
                  alt="Titanium Dioxide"
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Titanium Dioxide
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  High-grade titanium dioxide chemicals for paint, plastic,
                  cosmetic, and food industries with superior whiteness and
                  opacity.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Superior whiteness index
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Excellent opacity
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Food grade available
                  </li>
                </ul>
              </div>
            </div>

            <div className="group hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <img
                  src="/images/26764.jpg"
                  alt="Sanitary Items"
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Sanitary Items
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Complete range of plastic sanitary items including pipes,
                  fittings, bathroom accessories, and plumbing solutions.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Durable construction
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Leak-proof design
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Easy installation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </>
  );
};

export default Home;
