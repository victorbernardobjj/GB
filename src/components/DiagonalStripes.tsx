import React from 'react';

interface DiagonalStripesProps {
  variant?: 'blue-only' | 'red-blue' | 'default';
  className?: string;
  angle?: string;
}

export const DiagonalStripes: React.FC<DiagonalStripesProps> = ({
  variant = 'blue-only',
  className = '',
  angle = '-12deg',
}) => {
  const stripeColor =
    variant === 'blue-only'
      ? 'rgba(11, 61, 145, 0.45)'
      : variant === 'red-blue'
      ? 'rgba(225, 6, 0, 0.45)'
      : 'rgba(255, 255, 255, 0.15)';

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        transform: `skewY(${angle})`,
        transformOrigin: 'top left',
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${stripeColor}, ${stripeColor} 20px, transparent 20px, transparent 40px)`,
        }}
      />
    </div>
  );
};
