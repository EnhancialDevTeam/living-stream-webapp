import React, { useEffect, useState } from 'react';

interface ImpactCounterProps {
  end: number;
  label: string;
  suffix?: string;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 bg-white rounded-xl">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default ImpactCounter;