import React from "react";
import { Button } from "../../components/ui";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-96 pt-12 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive chemical trading solutions with global reach and
              local expertise. From import-export services to quality control,
              we deliver excellence at every step.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Section 1: Import & Export Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Import & Export Services
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Complete international trading solutions backed by 15+ years
                  of industry expertise and a global network spanning multiple
                  countries. We handle every aspect of your chemical trading
                  needs from sourcing to delivery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-indigo-600"
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Global Trading
                  </h3>
                  <p className="text-gray-600">
                    Seamless import-export operations across 15+ countries with
                    complete documentation and customs support.
                  </p>
                </div>

                <div className="group">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-green-600"
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Rigorous testing and quality control ensuring all products
                    meet international standards and specifications.
                  </p>
                </div>

                <div className="group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-600"
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Fast Logistics
                  </h3>
                  <p className="text-gray-600">
                    Efficient supply chain with multiple warehouses ensuring
                    timely delivery and real-time tracking.
                  </p>
                </div>

                <div className="group">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-purple-600"
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-600">
                    Best market rates with flexible payment terms and
                    transparent pricing for long-term partnerships.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 text-lg">
                  Get Import/Export Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/3335463.jpg"
                  alt="Global Trading Operations"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/117023.jpg"
                  alt="Quality Control Process"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
                />
                <img
                  src="/images/44643.jpg"
                  alt="Logistics & Warehousing"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 -mt-8"
                />
                <img
                  src="/images/white-crystals-texture.jpg"
                  alt="Chemical Products"
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    Successful Shipments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Support & Consultation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/982673.jpg"
                  alt="Technical Consultation"
                  className="rounded-2xl shadow-xl w-full"
                />

                {/* Overlay stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
                  <div className="p-8 text-white">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">
                          Technical Support
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-sm opacity-90">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Technical Support & Consultation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Expert technical guidance and personalized consultation
                  services to help you make informed decisions. Our experienced
                  team provides comprehensive support from product selection to
                  application optimization.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-orange-600"
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Product Application Guidance
                    </h3>
                    <p className="text-gray-600">
                      Detailed consultation on optimal product usage,
                      application methods, and best practices for your specific
                      industry requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      24/7 Technical Support
                    </h3>
                    <p className="text-gray-600">
                      Round-the-clock technical assistance for troubleshooting,
                      process optimization, and emergency support to keep your
                      operations running smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Custom Solutions Development
                    </h3>
                    <p className="text-gray-600">
                      Tailored chemical solutions designed to meet your unique
                      specifications and performance requirements with
                      comprehensive testing and validation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-8 lg:px-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with K D Enterprises?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today for personalized service
            solutions and competitive pricing for your chemical trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="tel:+919891511603"
              className="inline-block px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 font-semibold rounded"
            >
              Call: +91 98915 11603
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
