import React from 'react';

interface BadgeNovoProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BadgeNovo: React.FC<BadgeNovoProps> = ({
  text = 'NOVO',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wider',
    lg: 'text-sm px-3.5 py-1.5 tracking-widest',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-bold font-anton text-white bg-gb-red shadow-md shadow-red-950/60 rounded-full uppercase transform -rotate-3 hover:rotate-0 transition-transform ${sizeClasses[size]} ${className}`}
    >
      <span className="relative flex h-2 w-2 mr-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
      {text}
    </span>
  );
};
