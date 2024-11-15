import React from 'react';
import { Users, Target, Award, Heart, ArrowRight, HelpCircle } from 'lucide-react';
import ImpactCounter from '../components/ImpactCounter';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Williams',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'With over 15 years of experience in non-profit leadership, Sarah leads our organization with passion and dedication to community development.'
  },
  {
    name: 'Michael Chen',
    role: 'Program Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Michael brings expertise in educational program development and has helped scale our initiatives across multiple cities.'
  },
  {
    name: 'Amara Okafor',
    role: 'Financial Literacy Lead',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    bio: 'A certified financial advisor with a passion for teaching, Amara has transformed our financial literacy programs.'
  },
  {
    name: 'James Thompson',
    role: 'Community Outreach',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    bio: 'James specializes in building partnerships and ensuring our programs reach those who need them most.'
  }
];

const faqs: FAQ[] = [
  {
    question: "How can I join a program?",
    answer: "You can join any of our programs by visiting our Services page and filling out the enrollment form for your chosen program. Our team will contact you within 48 hours."
  },
  {
    question: "Are your programs free?",
    answer: "Many of our programs are free for eligible participants. Some specialized programs may have nominal fees, but we offer financial assistance and scholarships."
  },
  {
    question: "Where are your programs located?",
    answer: "We offer programs across multiple cities in the UK, with both in-person and online options available to ensure accessibility for all participants."
  },
  {
    question: "Can I volunteer or mentor?",
    answer: "Yes! We're always looking for skilled volunteers and mentors. Visit our 'Get Involved' page to learn about current opportunities."
  }
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Diverse team collaboration"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Empowering African Immigrants Through Knowledge and Opportunity
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Learn more about our mission, our impact, and our commitment to change.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Mission</h3>
                  <p className="text-gray-600 text-lg">
                    Empowering individuals through financial literacy, entrepreneurship, and career development, creating pathways for African immigrants to achieve their full potential in the UK.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Vision</h3>
                  <p className="text-gray-600 text-lg">
                    Building a future where African immigrants in the UK can thrive and make substantial contributions to the economy and society, supported by strong educational foundations and community networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Integrity', desc: 'Maintaining highest ethical standards' },
                { icon: Users, title: 'Community', desc: 'Building strong support networks' },
                { icon: Target, title: 'Excellence', desc: 'Delivering quality programs' },
                { icon: Award, title: 'Empowerment', desc: 'Enabling sustainable growth' }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <value.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Making a Real Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our impact extends beyond numbers, creating lasting change in communities across the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ImpactCounter end={2500} label="People Served" suffix="+" />
            <ImpactCounter end={20} label="Programs Delivered" suffix="+" />
            <ImpactCounter end={15} label="Communities Reached" suffix="+" />
            <ImpactCounter end={50} label="Active Volunteers" suffix="+" />
          </div>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
              Read Our Impact Report <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to participate, volunteer, or partner with us, there's a place for you in our community.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition text-lg">
              Get Involved
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;