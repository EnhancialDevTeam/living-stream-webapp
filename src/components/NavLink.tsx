import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  const baseStyles = "font-medium transition-colors duration-200";
  const mobileStyles = "block py-2 text-gray-600 hover:text-blue-600";
  const desktopStyles = "text-gray-600 hover:text-blue-600";

  return (
    <a
      href={href}
      className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </a>
  );
};

export default NavLink;