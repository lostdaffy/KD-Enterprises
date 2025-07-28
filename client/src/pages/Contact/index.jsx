import React from "react";
import ContactForm from "../../components/common/Forms/Index";

const Contact = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="relative w-full bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full">
          <div className="text-center w-full py-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-500 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                <i className="ri-service-line text-base"></i>
                Contact K D Enterprises
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
                Start your journey with us
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-4">
                Get in touch for quotes, technical support, or any business
                inquiries. We're here to help with all your chemical and plastic
                product needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center items-center py-10 px-4 bg-white">
      <iframe
        title="K D Enterprises Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.94118706812404!2d77.28208286149801!3d28.682216210925613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc7940b705b7%3A0xd146a6cb1d60d3cc!2sr%2C%2010372A%2F1%2C%20West%20Gorakh%20Park%2C%20Shahdara%2C%20New%20Delhi%2C%20Delhi%2C%20110032!5e1!3m2!1sen!2sin!4v1753690333713!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

      <ContactForm />
    </>
  );
};

export default Contact;
