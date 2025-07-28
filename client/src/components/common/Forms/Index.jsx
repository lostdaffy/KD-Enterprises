import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Web3Forms Access Key - Replace with your actual key
  const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Form Submission from KD Enterprises",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "ri-map-pin-line",
      title: "Visit Our Office",
      content: (
        <div className="text-sm sm:text-base leading-relaxed">
          <p>R 1/10126-B, GALI NO 1</p>
          <p>WEST GORAKH PARK SHAHDARA</p>
          <p>NEAR MANDIR</p>
          <p className="font-medium">DELHI 110032, INDIA</p>
        </div>
      ),
    },
    {
      icon: "ri-mail-line",
      title: "Email Us",
      content: (
        <a
          href="mailto:kdenterprises1601@gmail.com"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base break-all"
        >
          kdenterprises1601@gmail.com
        </a>
      ),
    },
    {
      icon: "ri-phone-line",
      title: "Call Us",
      content: (
        <a
          href="tel:+919891511603"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium"
        >
          +91 98915 11603
        </a>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your chemical trading journey? Contact us today for
            premium quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border-l-4 border-blue-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <i className={`${info.icon} text-blue-600 text-lg sm:text-xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      <div className="text-gray-600">{info.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4">
              <div className="bg-indigo-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-semibold text-base sm:text-lg mb-2">Quick Call</h4>
                <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">
                  Get instant response for urgent requirements
                </p>
                <a
                  href="tel:+919891511603"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  <i className="ri-phone-line"></i>
                  Call Now
                </a>
              </div>

              <div className="bg-indigo-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-semibold text-base sm:text-lg mb-2">Email Support</h4>
                <p className="text-green-100 text-xs sm:text-sm mb-3 sm:mb-4">
                  Send detailed requirements and get quotes
                </p>
                <a
                  href="mailto:kdenterprises1601@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-indigo-500 px-3 sm:px-4 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium"
                >
                  <i className="ri-mail-line"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-500 text-xl mr-3 flex-shrink-0"></i>
                    <p className="text-green-700 font-medium text-sm sm:text-base">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-close-line text-red-500 text-xl mr-3 flex-shrink-0"></i>
                    <p className="text-red-700 font-medium text-sm sm:text-base">
                      Error sending message. Please try again.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base ${
                        errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base ${
                      errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 resize-none text-sm sm:text-base ${
                      errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-500 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl hover:bg-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin text-xl mr-3"></i>
                      Sending...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-send-plane-line text-lg"></i>
                      Send Message
                    </span>
                  )}
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
