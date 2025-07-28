import React, { useState } from 'react';
import ContactForm from '../../components/common/Forms';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact K D Enterprises</h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              Get in touch for quotes, technical support, or any business inquiries. 
              We're here to help with all your chemical and plastic product needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help and answer any questions you might have about our products and services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Registered Office</h3>
                  <p className="text-gray-600">
                    R 1/10126-B, GALI NO 1<br />
                    WEST GORAKH PARK SHAHDARA<br />
                    NEAR MANDIR<br />
                    DELHI 110032, INDIA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 text-lg font-medium">+91 98915 11603</p>
                  <p className="text-gray-500 text-sm">Available 9 AM - 7 PM (Mon-Sat)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">kdenterprises1601@gmail.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Details</h3>
                  <p className="text-gray-600">
                    IEC: AHRPI1585L<br />
                    PAN: AHRPI1585L<br />
                    Nature: Proprietorship
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+919891511603" 
                  className="bg-indigo-100 text-indigo-600 px-4 py-3 rounded-lg text-center font-medium hover:bg-indigo-200 transition-colors"
                >
                  📞 Call Now
                </a>
                <a 
                  href="mailto:kdenterprises1601@gmail.com" 
                  className="bg-indigo-100 text-indigo-600 px-4 py-3 rounded-lg text-center font-medium hover:bg-indigo-200 transition-colors"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={handleSubmit} 
              />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">WEST GORAKH PARK SHAHDARA, DELHI 110032</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
