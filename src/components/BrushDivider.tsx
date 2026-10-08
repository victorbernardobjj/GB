import React from 'react';

interface BrushDividerProps {
  color?: 'white' | 'blue' | 'black' | 'ice';
  position?: 'top' | 'bottom';
  className?: string;
}

export const BrushDivider: React.FC<BrushDividerProps> = ({
  color = 'black',
  position = 'bottom',
  className = '',
}) => {
  const colorMap = {
    black: '#0A0A0A',
    white: '#FFFFFF',
    blue: '#0B3D91',
    ice: '#F3F4F6',
  };

  const fillColor = colorMap[color] || '#0A0A0A';
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-12 md:h-16"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,110 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
