import React, { useState } from 'react';
import { ChevronDown, LogIn, UserCircle, Users } from 'lucide-react';

interface UserMenuProps {
  mobile?: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Participant Login', icon: UserCircle },
    { label: 'Staff Login', icon: Users },
    { label: 'Partner Login', icon: LogIn },
  ];

  if (mobile) {
    return (
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
      >
        <span>Login</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMenu;