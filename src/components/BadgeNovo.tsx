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
      className={`inline-flex items-center justify-center font-bold font-anton text-white bg-gb-red border border-red-700/60 rounded uppercase tracking-wider ${sizeClasses[size]} ${className}`}
    >
      {text}
    </span>
  );
};
