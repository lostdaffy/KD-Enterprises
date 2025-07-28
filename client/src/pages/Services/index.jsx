import React from "react";
import ContactForm from "../../components/common/Forms/Index";

const Services = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <div className="relative w-full bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full">
          <div className="text-center w-full py-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-500 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                <i className="ri-service-line text-base"></i>
                Our Services
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
                Comprehensive Chemical Trading Solutions
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-4">
                Global reach with local expertise. From import-export services
                to quality control, we deliver excellence at every step of your
                chemical trading journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Import & Export Services */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-50 to-transparent rounded-full translate-x-32 -translate-y-32"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="ri-global-line"></i>
                  Global Trading
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                  Import & Export Services
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Complete international trading solutions backed by 15+ years
                  of industry expertise and a global network spanning multiple
                  countries. We handle every aspect of your chemical trading
                  needs from sourcing to delivery.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="ri-ship-line text-xl text-white"></i>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                    Global Trading
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Seamless import-export operations across 15+ countries with
                    complete documentation and customs support.
                  </p>
                </div>

                <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="ri-shield-check-line text-xl text-white"></i>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Rigorous testing and quality control ensuring all products
                    meet international standards and specifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Images Section - Enhanced Responsive */}
            <div className="relative">
              {/* Mobile Layout */}
              <div className="block lg:hidden space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/images/3335463.jpg"
                    alt="Global Trading Operations"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/117023.jpg"
                    alt="Quality Control Process"
                    className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg"
                  />
                  <img
                    src="/images/44643.jpg"
                    alt="Logistics & Warehousing"
                    className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
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
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 mb-1">
                    1000+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Successful Shipments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Support Section */}
      <section className="py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full -translate-x-40 translate-y-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/images/21492.jpg"
                  alt="Technical Consultation"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
                  <div className="p-6 lg:p-8 text-white w-full">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <div className="text-xl lg:text-2xl font-bold">
                          24/7
                        </div>
                        <div className="text-xs lg:text-sm opacity-90">
                          Technical Support
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                        <div className="text-xl lg:text-2xl font-bold">15+</div>
                        <div className="text-xs lg:text-sm opacity-90">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                  Technical Support & Consultation
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Expert technical guidance and personalized consultation
                  services to help you make informed decisions. Our experienced
                  team provides comprehensive support from product selection to
                  application optimization.
                </p>
              </div>

              {/* Support Services */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="ri-24-hours-line text-lg text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                      24/7 Technical Support
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      Round-the-clock technical assistance for troubleshooting,
                      process optimization, and emergency support to keep your
                      operations running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Services;
