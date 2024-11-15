import React from 'react';

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, role, quote }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;