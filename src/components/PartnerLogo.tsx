import React from 'react';
import { Building2 } from 'lucide-react';

interface PartnerLogoProps {
  name: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <Building2 className="w-12 h-12 text-gray-400" />
      <span className="sr-only">{name}</span>
    </div>
  );
};

export default PartnerLogo;