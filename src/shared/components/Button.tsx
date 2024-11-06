import React from 'react';

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 sm:px-8 rounded-full transition-transform duration-300 ease-in-out shadow-lg"
    >
      {label}
    </a>
  );
};

export default Button;
