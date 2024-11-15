import React, { useState } from 'react';
import { Heart, CreditCard, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import PartnerLogo from '../components/PartnerLogo';

interface DonationAmount {
  value: number;
  label: string;
  impact: string;
}

const DonationPage: React.FC = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationAmounts: DonationAmount[] = [
    { value: 10, label: '£10', impact: 'Provides learning materials for one participant' },
    { value: 25, label: '£25', impact: 'Sponsors a workshop session' },
    { value: 50, label: '£50', impact: 'Funds a mentorship program' },
    { value: 100, label: '£100', impact: 'Enables a full training course' }
  ];

  const handleAmountSelect = (amount: number | null) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
          alt="Support our mission"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl mb-8 text-blue-100">
              Your donations empower individuals with the knowledge and skills to build better lives.
            </p>
            <button 
              onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg inline-flex items-center gap-2"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Lives Impacted Annually' },
              { number: '£50K+', label: 'Raised Last Year' },
              { number: '90%', label: 'Funds Direct to Programs' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div id="donation-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Donation Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold mb-8">Make a Donation</h2>

              {/* Donation Type Toggle */}
              <div className="flex gap-4 mb-8">
                {['one-time', 'monthly'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type as 'one-time' | 'monthly')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                      donationType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {type === 'one-time' ? <CreditCard className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                      {type === 'one-time' ? 'One-time' : 'Monthly'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Amount Selection */}
              <div className="space-y-6 mb-8">
                <h3 className="font-semibold text-lg">Select Amount</h3>
                <div className="grid grid-cols-2 gap-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => handleAmountSelect(amount.value)}
                      className={`p-4 rounded-lg border-2 transition ${
                        selectedAmount === amount.value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-xl font-bold mb-1">{amount.label}</div>
                      <div className="text-sm text-gray-600">{amount.impact}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                    <input
                      type="text"
                      id="custom-amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                Donate {selectedAmount ? `£${selectedAmount}` : customAmount ? `£${customAmount}` : ''} 
                {donationType === 'monthly' && ' Monthly'}
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Tax Info */}
              <p className="text-sm text-gray-600 mt-4">
                Your donation is tax-deductible. You will receive a receipt for your records.
              </p>
            </div>

            {/* Impact Story */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                      alt="Sarah's Story"
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold mb-2">Sarah's Story</h4>
                      <p className="text-gray-600">
                        "Thanks to the financial literacy program funded by generous donors, I was able to start my own business and secure my family's future."
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">Your donation directly supports program participants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">90% of funds go directly to educational programs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">Regular updates on the impact of your donation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sponsor Recognition */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Our Major Supporters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <PartnerLogo name="Corporate Sponsor 1" />
                  <PartnerLogo name="Corporate Sponsor 2" />
                  <PartnerLogo name="Corporate Sponsor 3" />
                  <PartnerLogo name="Corporate Sponsor 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Ways to Support */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Partnerships',
                description: 'Partner with us to make a lasting impact in the community.',
                cta: 'Learn More'
              },
              {
                title: 'Volunteer',
                description: 'Share your skills and time to support our programs.',
                cta: 'Join Us'
              },
              {
                title: 'Legacy Giving',
                description: 'Create a lasting impact through planned giving.',
                cta: 'Discover Options'
              }
            ].map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  {option.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;