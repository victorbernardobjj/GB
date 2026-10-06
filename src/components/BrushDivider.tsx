import React from 'react';

interface BrushDividerProps {
  color?: 'white' | 'blue' | 'black' | 'ice' | 'red';
  position?: 'top' | 'bottom';
  className?: string;
  flipX?: boolean;
}

export const BrushDivider: React.FC<BrushDividerProps> = ({
  color = 'white',
  position = 'bottom',
  className = '',
  flipX = false,
}) => {
  const colorMap = {
    white: '#FFFFFF',
    blue: '#061F4D',
    black: '#0A0A0A',
    ice: '#F3F4F6',
    red: '#E10600',
  };

  const fillColor = colorMap[color];
  const isTop = position === 'top';

  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? '-mt-1' : '-mb-1'
      } ${className}`}
      style={{
        transform: `${isTop ? 'rotate(180deg)' : ''} ${flipX ? 'scaleX(-1)' : ''}`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-16 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 68L24.5 54.3C49 40.7 98 13.3 147 13.3C196 13.3 245 40.7 294 48C343 55.3 392 42.7 441 33.3C490 24 539 18 588 24C637 30 686 48 735 52C784 56 833 46 882 40C931 34 980 32 1029 36C1078 40 1127 50 1176 46C1225 42 1274 24 1323 18C1372 12 1421 18 1440 21V68H1421C1402 68 1363 68 1324 68C1285 68 1246 68 1207 68C1168 68 1129 68 1090 68C1051 68 1012 68 973 68C934 68 895 68 856 68C817 68 778 68 739 68C700 68 661 68 622 68C583 68 544 68 505 68C466 68 427 68 388 68C349 68 310 68 271 68C232 68 193 68 154 68C115 68 76 68 38 68H0Z"
          fill={fillColor}
        />
        {/* Torn brush splatter accents */}
        <path
          d="M120 22C140 18 165 24 180 20C170 28 145 28 120 22Z"
          fill={fillColor}
          opacity="0.4"
        />
        <path
          d="M620 18C650 14 690 22 710 16C695 24 660 26 620 18Z"
          fill={fillColor}
          opacity="0.4"
        />
        <path
          d="M1100 24C1140 20 1180 26 1210 18C1190 30 1150 32 1100 24Z"
          fill={fillColor}
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
