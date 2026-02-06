import { SVGProps } from "react";

export const BaguaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    
    {/* 太极 */}
    <path
      d="M50 12C29 12 12 29 12 50s17 38 38 38 38-17 38-38S71 12 50 12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M50 12c10.5 0 19 8.5 19 19s-8.5 19-19 19-19 8.5-19 19 8.5 19 19 19"
      fill="currentColor"
      opacity="0.15"
    />
    <circle cx="50" cy="31" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="50" cy="69" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    
    {/* 八卦线条 */}
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5">
      {/* 乾 */}
      <line x1="44" y1="8" x2="56" y2="8" />
      <line x1="44" y1="4" x2="56" y2="4" />
      
      {/* 坤 */}
      <line x1="44" y1="92" x2="48" y2="92" />
      <line x1="52" y1="92" x2="56" y2="92" />
      <line x1="44" y1="96" x2="48" y2="96" />
      <line x1="52" y1="96" x2="56" y2="96" />
      
      {/* 离 */}
      <line x1="92" y1="44" x2="92" y2="56" />
      <line x1="96" y1="44" x2="96" y2="48" />
      <line x1="96" y1="52" x2="96" y2="56" />
      
      {/* 坎 */}
      <line x1="4" y1="44" x2="4" y2="48" />
      <line x1="4" y1="52" x2="4" y2="56" />
      <line x1="8" y1="44" x2="8" y2="56" />
    </g>
  </svg>
);

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
  </svg>
);

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <polygon
      points="12,5 14,12 12,14 10,12"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

export const ScrollIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 5C4 3.89543 4.89543 3 6 3C4.89543 3 4 3.89543 4 5V7C4 5.89543 4.89543 5 6 5H4V5Z" fill="currentColor" opacity="0.2" />
  </svg>
);

export const CloudPatternIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 30C10 30 15 25 25 25C25 25 25 15 40 15C40 15 45 10 55 15C55 15 70 10 75 20C75 20 90 20 90 30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M5 35C5 35 10 32 15 32C15 32 18 28 28 30C28 30 35 25 45 28"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
      opacity="0.2"
    />
  </svg>
);
