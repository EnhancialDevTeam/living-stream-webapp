import React, { useState } from 'react';
import { Calendar, Clock, Users2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CurriculumSection {
  title: string;
  topics: string[];
}

interface ProgramLogistics {
  startDate: string;
  duration: string;
  location: string;
  fee: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Program {
  id: string;
  name: string;
  description: string;
  outcomes: string[];
  curriculum: CurriculumSection[];
  logistics: ProgramLogistics;
  eligibility: string[];
  faqs: FAQ[];
}

const programs: Program[] = [
  {
    id: 'financial-literacy',
    name: 'Financial Literacy Workshop',
    description: 'Master the fundamentals of personal finance and build a strong foundation for your financial future.',
    outcomes: [
      'Create and maintain a personal budget',
      'Understand credit management',
      'Learn investment basics',
      'Plan for long-term financial goals'
    ],
    curriculum: [
      {
        title: 'Budgeting Basics',
        topics: [
          'Income and expense tracking',
          'Creating a sustainable budget',
          'Emergency fund planning',
          'Debt management strategies'
        ]
      },
      {
        title: 'Credit Management',
        topics: [
          'Understanding credit scores',
          'Building credit history',
          'Managing credit cards',
          'Loan basics'
        ]
      },
      {
        title: 'Investment Fundamentals',
        topics: [
          'Investment vehicles overview',
          'Risk assessment',
          'Portfolio diversification',
          'Retirement planning'
        ]
      }
    ],
    logistics: {
      startDate: 'May 1, 2024',
      duration: '12 weeks',
      location: 'Hybrid (Online & In-person)',
      fee: '£199 (Scholarships available)'
    },
    eligibility: [
      'No prior financial knowledge required',
      'Must be 18 years or older',
      'Access to computer and internet',
      'Commitment to attend all sessions'
    ],
    faqs: [
      {
        question: 'Do I need any financial background?',
        answer: 'No prior financial knowledge is required. Our program starts with the basics and gradually builds up to more advanced concepts.'
      },
      {
        question: 'Are there payment plans available?',
        answer: 'Yes, we offer flexible payment plans and scholarships for eligible participants.'
      }
    ]
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship Accelerator',
    description: 'Transform your business idea into reality with comprehensive guidance and mentorship.',
    outcomes: [
      'Develop a viable business plan',
      'Master market research techniques',
      'Learn funding strategies',
      'Build marketing capabilities'
    ],
    curriculum: [
      {
        title: 'Business Planning',
        topics: [
          'Business model canvas',
          'Market analysis',
          'Financial projections',
          'Legal requirements'
        ]
      },
      {
        title: 'Marketing & Sales',
        topics: [
          'Brand development',
          'Digital marketing',
          'Sales strategies',
          'Customer acquisition'
        ]
      },
      {
        title: 'Operations & Growth',
        topics: [
          'Operations management',
          'Team building',
          'Scaling strategies',
          'Business technology'
        ]
      }
    ],
    logistics: {
      startDate: 'June 15, 2024',
      duration: '16 weeks',
      location: 'In-person (London)',
      fee: '£499 (Early bird discount available)'
    },
    eligibility: [
      'Must have a business idea or existing business',
      'Commitment to full program duration',
      'Basic computer literacy',
      'Fluent in English'
    ],
    faqs: [
      {
        question: 'Do I need a registered business to join?',
        answer: 'No, you can join with just a business idea. We will help you with the registration process if needed.'
      },
      {
        question: 'Is mentorship included?',
        answer: 'Yes, you will be matched with an experienced mentor who will guide you throughout the program.'
      }
    ]
  },
  {
    id: 'career-counselling',
    name: 'Career Counselling Program',
    description: 'Personalized guidance to help you navigate your career path, develop professional skills, and achieve your career goals in the UK job market.',
    outcomes: [
      'Create a tailored career development plan',
      'Master interview and networking skills',
      'Build a compelling professional portfolio',
      'Develop leadership capabilities'
    ],
    curriculum: [
      {
        title: 'Career Assessment & Planning',
        topics: [
          'Skills and interests assessment',
          'Industry and role exploration',
          'Goal setting and action planning',
          'UK job market insights'
        ]
      },
      {
        title: 'Professional Development',
        topics: [
          'CV and cover letter writing',
          'LinkedIn profile optimization',
          'Personal branding',
          'Professional communication'
        ]
      },
      {
        title: 'Job Search Strategy',
        topics: [
          'Job search techniques',
          'Interview preparation',
          'Salary negotiation',
          'Workplace culture adaptation'
        ]
      }
    ],
    logistics: {
      startDate: 'June 1, 2024',
      duration: '8 weeks',
      location: 'Virtual & One-on-One Sessions',
      fee: '£249 (Payment plans available)'
    },
    eligibility: [
      'Open to all career stages',
      'Commitment to career growth',
      'Fluent English communication',
      'Access to online platforms'
    ],
    faqs: [
      {
        question: 'Is this suitable for career changers?',
        answer: 'Yes, our program is designed to support both career starters and those looking to transition to new industries or roles.'
      },
      {
        question: 'Do you provide job placement?',
        answer: 'While we don\'t guarantee job placement, we provide comprehensive support in job search strategies and connect you with our network of employers.'
      }
    ]
  }
];

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program>(programs[0]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Program overview"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Transform Your Future</h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our comprehensive programs designed to empower your personal and professional growth.
            </p>
          </div>
        </div>
      </div>

      {/* Program Selection and Details */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Program Selection */}
            <div className="md:col-span-4 space-y-4">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    selectedProgram.id === program.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-semibold text-xl mb-2">{program.name}</h3>
                  <p className={selectedProgram.id === program.id ? 'text-blue-100' : 'text-gray-600'}>
                    {program.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Program Details */}
            <div className="md:col-span-8">
              <div className="bg-white rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">{selectedProgram.name}</h2>
                
                {/* Key Outcomes */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Outcomes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProgram.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
                  <div className="space-y-6">
                    {selectedProgram.curriculum.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{section.title}</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Logistics */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>Starts: {selectedProgram.logistics.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>Duration: {selectedProgram.logistics.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users2 className="w-5 h-5 text-blue-600" />
                      <span>Location: {selectedProgram.logistics.location}</span>
                    </div>
                    <div className="font-semibold text-blue-600">
                      Fee: {selectedProgram.logistics.fee}
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {selectedProgram.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* FAQs */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {selectedProgram.faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;