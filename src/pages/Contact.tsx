import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions? We're here to help and provide the support you need.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 mb-4">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-gray-600 mb-4">
                Questions about our programs or services? We're here to help.
              </p>
              <a href="mailto:info@nonprofit.org" className="text-blue-600 hover:text-blue-700">
                info@nonprofit.org
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Interested in partnering with us? Let's discuss collaboration.
              </p>
              <a href="mailto:partnerships@nonprofit.org" className="text-blue-600 hover:text-blue-700">
                partnerships@nonprofit.org
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 mb-4">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support & Resources</h3>
              <p className="text-gray-600 mb-4">
                Need technical support or access to resources? Contact our team.
              </p>
              <a href="mailto:support@nonprofit.org" className="text-blue-600 hover:text-blue-700">
                support@nonprofit.org
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">London Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">
                          123 Community Avenue
                          <br />
                          London, EC1A 1BB
                          <br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                      <p className="text-gray-600">+44 20 1234 5678</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <p className="text-gray-600">london@nonprofit.org</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-gray-600">Monday - Friday</p>
                        <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 h-[300px] rounded-xl flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CTA Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Check out our frequently asked questions for quick answers to common inquiries.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition">
            View FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;