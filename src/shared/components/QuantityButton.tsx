// components/QuantityButton.tsx
import React from 'react';

interface QuantityButtonProps {
  onClick: () => void;
  label: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg hover:bg-yellow-600 focus:outline-none"
    >
      {label}
    </button>
  );
};

export default QuantityButton;
