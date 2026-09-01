import React from 'react';

interface AltoRioLogoProps {
  variant?: 'full' | 'symbol' | 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export const AltoRioLogo: React.FC<AltoRioLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  lightMode = false
}) => {
  const sizeMap = {
    sm: { symbol: 'w-6 h-6', textTitle: 'text-sm tracking-[0.16em]', textSub: 'text-[7px] tracking-[0.45em]' },
    md: { symbol: 'w-9 h-9', textTitle: 'text-lg sm:text-xl tracking-[0.18em]', textSub: 'text-[8.5px] sm:text-[9.5px] tracking-[0.52em]' },
    lg: { symbol: 'w-14 h-14', textTitle: 'text-2xl sm:text-3xl tracking-[0.2em]', textSub: 'text-[11px] sm:text-xs tracking-[0.58em]' },
    xl: { symbol: 'w-20 h-20', textTitle: 'text-3xl sm:text-4xl tracking-[0.22em]', textSub: 'text-xs sm:text-sm tracking-[0.62em]' }
  };

  const currentSize = sizeMap[size];
  const textColor = lightMode ? 'text-neutral-900' : 'text-[#F6F4EE]';
  const subColor = lightMode ? 'text-neutral-600' : 'text-[#D5D0C2]';
  const brandIvory = lightMode ? '#111827' : '#F6F4EE';

  // Precision vector recreation of the monogram from 'Logo Variação 3 PNG'
  const Emblem = (
    <div className={`relative flex items-center justify-center shrink-0 ${currentSize.symbol}`}>
      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        {/* Left Sweeping Wing / A-stem */}
        <path
          d="M6 100C12 95 18 80 24 64C30 48 38 28 44 8C44 8 45 6 46 6C47 6 47 8 46 14C41 34 32 58 24 78C20 88 15 97 6 100Z"
          fill={brandIvory}
        />
        {/* Right Straight Descender / Outer Apex */}
        <path
          d="M45 6C45 6 46 14 50 28C56 46 64 68 72 90C74 95 78 99 82 100L72 100C67 96 62 88 56 72C50 56 46 36 45 6Z"
          fill={brandIvory}
        />
        {/* Inner Curved Ribbon creating the A crossbar & R bowl */}
        <path
          d="M22 75C28 64 36 54 46 50C54 47 60 50 60 56C60 63 53 68 44 71C35 73 28 78 22 84C20 86 19 88 18 88C18 88 19 84 21 80C26 71 36 68 44 65C50 63 54 60 54 56C54 52 50 50 44 52C36 55 29 64 22 75Z"
          fill={brandIvory}
        />
        {/* Fine inner accent loop */}
        <path
          d="M42 52C50 50 56 53 56 57C56 61 51 64 45 66C38 68 31 73 26 80L23 77C29 69 36 65 42 63C47 61 51 59 51 56C51 54 47 52 42 52Z"
          fill={brandIvory}
        />
      </svg>
    </div>
  );

  if (variant === 'symbol') {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {Emblem}
        <div className="flex flex-col items-center mt-3 leading-none">
          <span className={`font-sans font-semibold uppercase ${textColor} ${currentSize.textTitle}`}>
            ALTO RIO
          </span>
          <span className={`font-sans font-normal uppercase mt-1.5 ${subColor} ${currentSize.textSub}`}>
            I M Ó V E I S
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {Emblem}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-sans font-semibold uppercase ${textColor} ${currentSize.textTitle}`}>
          ALTO RIO
        </span>
        <span className={`font-sans font-normal uppercase mt-1.5 ${subColor} ${currentSize.textSub}`}>
          I M Ó V E I S
        </span>
      </div>
    </div>
  );
};

