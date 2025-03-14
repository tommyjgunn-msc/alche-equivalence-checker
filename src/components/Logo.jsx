import React from 'react';

const Logo = ({ size = 'medium' }) => {
  const dimensions = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };
  
  return (
    <div className={`${dimensions[size]} bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md`}>
      <span className="text-white font-bold text-lg">A</span>
    </div>
  );
};

export default Logo;