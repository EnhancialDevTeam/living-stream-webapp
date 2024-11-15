import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt, date }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;