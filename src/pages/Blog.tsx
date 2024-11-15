import React, { useState } from 'react';
import { Search, Tag, Clock, ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Financial Resilience in a New Country',
    excerpt: 'Essential strategies for managing finances and building wealth as an immigrant in the UK.',
    category: 'Financial Literacy',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
    date: 'March 15, 2024',
    readTime: '5 min read',
    tags: ['Finance', 'Savings', 'Investment']
  },
  {
    id: '2',
    title: 'From Idea to Launch: Starting Your UK Business',
    excerpt: 'A comprehensive guide to navigating the UK business landscape and launching your venture.',
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    date: 'March 12, 2024',
    readTime: '7 min read',
    tags: ['Business', 'Startup', 'Planning']
  },
  {
    id: '3',
    title: 'Mastering the UK Job Market',
    excerpt: 'Tips and strategies for finding and securing your ideal role in the British workforce.',
    category: 'Career Advice',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    date: 'March 10, 2024',
    readTime: '6 min read',
    tags: ['Career', 'Job Search', 'Interview']
  },
  {
    id: '4',
    title: 'Understanding UK Credit System',
    excerpt: 'A beginner\'s guide to building and maintaining good credit in the United Kingdom.',
    category: 'Financial Literacy',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    date: 'March 8, 2024',
    readTime: '4 min read',
    tags: ['Credit', 'Finance', 'Banking']
  },
  {
    id: '5',
    title: 'Networking Strategies for Professionals',
    excerpt: 'Build meaningful professional connections and advance your career through strategic networking.',
    category: 'Career Advice',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80',
    date: 'March 5, 2024',
    readTime: '5 min read',
    tags: ['Networking', 'Career Growth', 'Professional Development']
  },
  {
    id: '6',
    title: 'Digital Marketing for Small Businesses',
    excerpt: 'Effective digital marketing strategies for entrepreneurs on a budget.',
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    date: 'March 3, 2024',
    readTime: '8 min read',
    tags: ['Marketing', 'Digital', 'Business Growth']
  }
];

const categories = [
  'Financial Literacy',
  'Entrepreneurship',
  'Career Advice',
  'Personal Development'
];

const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
          alt="Blog hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Insights and Inspiration</h1>
            <p className="text-xl mb-8 text-blue-100">
              Explore articles, stories, and resources on financial independence, career growth, and entrepreneurship.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                        category === selectedCategory
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer transition"
                    >
                      <Tag className="w-3 h-3 inline-block mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="md:col-span-9">
              <div className="space-y-8">
                {filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-blue-600">{post.category}</span>
                          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;