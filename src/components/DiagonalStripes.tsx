import React from 'react';

interface DiagonalStripesProps {
  className?: string;
  variant?: 'red-blue' | 'red-only' | 'blue-only';
  angle?: string;
}

export const DiagonalStripes: React.FC<DiagonalStripesProps> = ({
  className = '',
  variant = 'red-blue',
  angle = '-8deg',
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none opacity-20 ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-[200%] h-full origin-top-left -translate-x-1/4"
        style={{
          transform: `rotate(${angle})`,
          backgroundImage:
            variant === 'red-blue'
              ? 'repeating-linear-gradient(45deg, #E10600 0, #E10600 12px, transparent 12px, transparent 24px, #0B3D91 24px, #0B3D91 36px, transparent 36px, transparent 48px)'
              : variant === 'red-only'
              ? 'repeating-linear-gradient(45deg, #E10600 0, #E10600 16px, transparent 16px, transparent 36px)'
              : 'repeating-linear-gradient(45deg, #0B3D91 0, #0B3D91 16px, transparent 16px, transparent 36px)',
        }}
      />
    </div>
  );
};
