import React from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="mx-6 transform hover:rotate-45 transition-transform duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Separator;