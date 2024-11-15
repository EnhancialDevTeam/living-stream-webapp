import React from 'react';
import { Heart, TrendingUp, Users, BookOpen, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ImpactCounter from '../components/ImpactCounter';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import PartnerLogo from '../components/PartnerLogo';
import NewsletterForm from '../components/NewsletterForm';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[700px] bg-gradient-to-r from-blue-900 to-blue-800 mt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <img 
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80"
          alt="Diverse group learning together"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Empowering the Path to Financial, Entrepreneurial, and Career Growth
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Supporting African immigrants in the UK through financial literacy, career development, and skill-building programs.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
                Explore Services
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition text-lg">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're dedicated to empowering individuals with the knowledge, skills, and support needed to build prosperous, fulfilling lives.
            </p>
            <button className="text-blue-600 font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
              Read Our Story <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs and Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <BookOpen className="w-10 h-10" />, 
                title: 'Financial Literacy',
                desc: 'Gain confidence in managing your finances through budgeting, savings, and investment workshops.'
              },
              { 
                icon: <TrendingUp className="w-10 h-10" />, 
                title: 'Entrepreneurial Training',
                desc: 'Learn how to start and grow a business with guidance on planning, funding, and marketing.'
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: 'Career Empowerment',
                desc: 'Develop the skills you need to advance in your career, from resume building to interview prep.'
              },
              { 
                icon: <Heart className="w-10 h-10" />, 
                title: 'Skill Development',
                desc: 'Identify and bridge skill gaps to boost employability and align with current job market needs.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ImpactCounter end={2500} label="Individuals Empowered" suffix="+" />
            <ImpactCounter end={20} label="Tailored Programs" suffix="+" />
            <ImpactCounter end={100000} label="Financial Aid (£)" suffix="+" />
            <ImpactCounter end={15} label="Cities Reached" suffix="+" />
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Stories of Transformation</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Real stories from individuals who have transformed their lives through our programs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              name="Sarah Johnson"
              role="Financial Literacy Program Graduate"
              quote="The financial literacy program gave me the confidence to take control of my finances and plan for my family's future."
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              name="Michael Okonjo"
              role="Entrepreneurship Program"
              quote="Thanks to the business training program, I was able to turn my passion into a successful small business. The mentorship was invaluable."
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              name="Emma Thompson"
              role="Career Development"
              quote="The career development program helped me secure a position that aligns with my skills and aspirations. I'm truly grateful."
            />
          </div>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Insights & Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard 
              image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
              title="5 Tips for Financial Success in the UK"
              excerpt="Essential financial management strategies for newcomers to the UK financial system."
              date="March 15, 2024"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              title="Building Your Professional Network"
              excerpt="Learn how to create meaningful professional connections in your new home."
              date="March 12, 2024"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
              title="Starting Your Business Journey"
              excerpt="A comprehensive guide to launching your business in the UK market."
              date="March 10, 2024"
            />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Help Us Make a Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your support enables us to continue providing essential resources and training to those in need.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition text-lg">
            Donate Now
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partners in Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Partner 1" />
            <PartnerLogo name="Partner 2" />
            <PartnerLogo name="Partner 3" />
            <PartnerLogo name="Partner 4" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-2xl mb-6">About Us</h3>
              <p className="text-blue-200">
                Empowering communities through education, support, and sustainable development initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Community Blog', 'Contact', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-200 hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-blue-200">
                  <Mail className="h-5 w-5" />
                  <span>contact@nonprofit.org</span>
                </li>
                <li className="flex items-center space-x-3 text-blue-200">
                  <Phone className="h-5 w-5" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3 text-blue-200">
                  <MapPin className="h-5 w-5" />
                  <span>123 Community Ave, London</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-6">Newsletter</h3>
              <NewsletterForm />
              <div className="flex space-x-4 mt-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="text-blue-200 hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Non-Profit Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;