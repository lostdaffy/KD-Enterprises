import React from "react";

const About = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <div className="relative w-full bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full">
          <div className="text-center w-full py-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-500 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                <i className="ri-service-line text-base"></i>
                About KD Enterprises
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
                Building Trust Through Excellence
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-4">
                Founded in 2008, KD Enterprises began as a vision to bridge the
                gap between quality chemical suppliers and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* About Section */}
      <div className="relative w-full min-h-screen bg-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-12 lg:py-20">
            {/* Left Content Section */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
                  <i className="ri-building-line text-base"></i>
                  About KD Enterprises
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Building Trust Through{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                    Excellence
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700">
                    Since 2008
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A legacy of{" "}
                  <span className="font-semibold text-indigo-600">
                    15+ years
                  </span>{" "}
                  in chemical trading, built on the foundation of quality,
                  reliability, and unwavering commitment to customer
                  satisfaction across global markets.
                </p>
              </div>
            </div>

            {/* Right Image Section - Enhanced Responsive */}
            <div className="relative mt-8 lg:mt-0">
              {/* Mobile Layout */}
              <div className="block lg:hidden space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/images/3335463.jpg"
                    className="w-full h-64 sm:h-80 object-cover"
                    alt="KD Enterprises Facility"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src="/images/117023.jpg"
                      className="w-full h-32 sm:h-40 object-cover"
                      alt="Quality Control"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src="/images/44643.jpg"
                      className="w-full h-32 sm:h-40 object-cover"
                      alt="Warehouse Operations"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-4 h-96 xl:h-[480px]">
                  <div className="col-span-8 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src="/images/3335463.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="KD Enterprises Facility"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                  </div>
                  <div className="col-span-4 relative overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src="/images/117023.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Quality Control"
                    />
                  </div>
                  <div className="col-span-4 relative overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src="/images/44643.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Warehouse Operations"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Our Story Section */}
      <section className="py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-50 to-transparent rounded-full translate-x-40 translate-y-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <i className="ri-history-line"></i>
                    Our Journey
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                    Our Story
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Founded in{" "}
                    <span className="font-semibold text-indigo-600">2008</span>,
                    KD Enterprises began as a vision to bridge the gap between
                    quality chemical suppliers and businesses worldwide. What
                    started as a small trading company has evolved into a
                    trusted global partner in the chemical industry.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Over the years, we have built strong relationships with
                    manufacturers, suppliers, and clients across{" "}
                    <span className="font-semibold text-indigo-600">
                      15+ countries
                    </span>
                    . Our commitment to excellence has made us a preferred
                    choice for businesses seeking reliable chemical trading
                    solutions.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Today, we continue to expand our reach while maintaining the
                    same values that founded our company: integrity, quality,
                    and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/images/white-crystals-texture.jpg"
                  alt="Chemical Trading Excellence"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Excellence in Every Trade
                    </h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Delivering quality chemical products worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-compass-3-line"></i>
              What Drives Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do and every decision we
              make in our journey towards excellence
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission Card */}
            <div className="group bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <i className="ri-flashlight-line text-2xl lg:text-3xl text-white"></i>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  To provide high-quality chemical products and exceptional
                  trading services that enable our clients to achieve their
                  business objectives while maintaining the highest standards of
                  safety and sustainability.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <i className="ri-eye-line text-2xl lg:text-3xl text-white"></i>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  To become the most trusted and preferred global partner in
                  chemical trading, known for innovation, reliability, and
                  exceptional customer service across all markets we serve.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="group bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden sm:col-span-2 lg:col-span-1">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <i className="ri-heart-line text-2xl lg:text-3xl text-white"></i>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                  Our Values
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Integrity in all business dealings, commitment to quality,
                  customer-centric approach, continuous innovation, and
                  environmental responsibility guide our operations and
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-team-line"></i>
              Meet Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence in
              chemical trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-star-line text-3xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Managing Director
              </h3>
              <p className="text-indigo-500 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With 15+ years of experience in chemical trading, leads the
                company's strategic vision and global expansion initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Assurance Head
              </h3>
              <p className="text-green-500 font-medium mb-4">
                Operations Director
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensures all products meet international quality standards
                through rigorous testing and certification processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-global-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Global Trade Manager
              </h3>
              <p className="text-purple-500 font-medium mb-4">
                International Relations
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manages international partnerships and ensures smooth
                import-export operations across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Updated with Remix Icons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-trophy-line"></i>
              Our Achievements
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-checkbox-circle-line text-4xl text-indigo-500"></i>
              </div>
              <div className="text-3xl font-bold text-indigo-500 mb-2">
                ISO 9001
              </div>
              <div className="text-gray-600">Quality Certification</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-time-line text-4xl text-indigo-500"></i>
              </div>
              <div className="text-3xl font-bold text-indigo-500 mb-2">
                99.5%
              </div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-group-line text-4xl text-indigo-500"></i>
              </div>
              <div className="text-3xl font-bold text-indigo-500 mb-2">95%</div>
              <div className="text-gray-600">Customer Retention</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="ri-star-line text-4xl text-indigo-500"></i>
              </div>
              <div className="text-3xl font-bold text-indigo-500 mb-2">
                4.8/5
              </div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
