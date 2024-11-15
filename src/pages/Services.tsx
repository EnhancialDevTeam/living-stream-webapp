import React from 'react';
import { BookOpen, TrendingUp, Users, Briefcase, Calendar, Clock, Users2, ArrowRight, Star } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  schedule: string;
  duration: string;
  capacity: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features,
  schedule,
  duration,
  capacity
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8">
      <div className="text-blue-600 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{schedule}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users2 className="w-4 h-4" />
          <span>{capacity}</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const Services = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Financial Literacy",
      description: "Gain confidence in managing finances through budgeting, saving, and investing.",
      features: [
        "Personal budgeting workshops",
        "Investment basics",
        "Credit management",
        "Retirement planning"
      ],
      schedule: "Weekly sessions",
      duration: "12-week program",
      capacity: "20 participants per cohort"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Entrepreneurial Training",
      description: "Start and grow your business with guidance on planning, funding, and marketing.",
      features: [
        "Business plan development",
        "Market research techniques",
        "Funding strategies",
        "Marketing essentials"
      ],
      schedule: "Bi-weekly sessions",
      duration: "16-week program",
      capacity: "15 participants per cohort"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Career Empowerment",
      description: "Develop essential skills to excel in your career, from resume writing to interview prep.",
      features: [
        "Resume building",
        "Interview preparation",
        "Networking skills",
        "Career planning"
      ],
      schedule: "Weekly sessions",
      duration: "8-week program",
      capacity: "25 participants per cohort"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Skill Development",
      description: "Identify and develop key skills to thrive in today's job market.",
      features: [
        "Digital literacy",
        "Communication skills",
        "Project management",
        "Leadership development"
      ],
      schedule: "Flexible schedule",
      duration: "10-week program",
      capacity: "30 participants per cohort"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Training session"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Empowering Through Education and Training
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Explore our programs designed to build financial independence, entrepreneurial skills, and career advancement.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to support your growth and success in the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              name="Sarah Johnson"
              role="Financial Literacy Graduate"
              quote="The financial literacy program transformed my understanding of money management. I now have clear financial goals and the knowledge to achieve them."
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              name="David Chen"
              role="Entrepreneurship Program"
              quote="The entrepreneurship training gave me the confidence and skills to launch my own business. The mentorship was invaluable."
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              name="Emma Thompson"
              role="Career Development"
              quote="Thanks to the career empowerment program, I secured a position that aligns with my skills and aspirations. The interview prep was excellent."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your goals. Our team is here to support your success.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition text-lg">
              Apply Now
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;