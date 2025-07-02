import React from "react";

interface SwordSmallProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SwordSmall: React.FC<SwordSmallProps> = ({
  width = 40,
  height = 40,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0_505_67997)">
        <path d="M2 38V34H0V40H6V38H2Z" fill="#242628" />
        <path d="M18 36H14V38H20V34H18V36Z" fill="#242628" />
        <path d="M6 38H8V36H6V38Z" fill="#242628" />
        <path d="M12 36H14V34H12V36Z" fill="#242628" />
        <path d="M8 36H10V34H8V36Z" fill="#242628" />
        <path d="M16 34H18V32H16V34Z" fill="#242628" />
        <path d="M10 34H12V32H10V34Z" fill="#242628" />
        <path d="M2 34H4V32H2V34Z" fill="#242628" />
        <path d="M14 32H16V30H14V32Z" fill="#242628" />
        <path d="M4 32H6V30H4V32Z" fill="#242628" />
        <path d="M16 30H18V28H16V30Z" fill="#242628" />
        <path d="M10 28H12V30H14V26H10V28Z" fill="#242628" />
        <path d="M6 30H8V28H6V30Z" fill="#242628" />
        <path d="M18 28H20V26H18V28Z" fill="#242628" />
        <path d="M4 28H6V26H4V28Z" fill="#242628" />
        <path d="M20 26H22V24H20V26Z" fill="#242628" />
        <path d="M14 26H16V24H14V26Z" fill="#242628" />
        <path d="M8 26H10V24H8V26Z" fill="#242628" />
        <path d="M2 26H4V22H6V20H2V26Z" fill="#242628" />
        <path d="M22 24H24V22H22V24Z" fill="#242628" />
        <path d="M16 24H18V22H16V24Z" fill="#242628" />
        <path d="M10 24H12V22H10V24Z" fill="#242628" />
        <path d="M6 24H8V22H6V24Z" fill="#242628" />
        <path d="M24 22H26V20H24V22Z" fill="#242628" />
        <path d="M18 22H20V20H18V22Z" fill="#242628" />
        <path d="M12 22H14V20H12V22Z" fill="#242628" />
        <path d="M26 20H28V18H26V20Z" fill="#242628" />
        <path d="M20 20H22V18H20V20Z" fill="#242628" />
        <path d="M14 20H16V18H14V20Z" fill="#242628" />
        <path d="M28 18H30V16H28V18Z" fill="#242628" />
        <path d="M22 18H24V16H22V18Z" fill="#242628" />
        <path d="M16 18H18V16H16V18Z" fill="#242628" />
        <path d="M30 16H32V14H30V16Z" fill="#242628" />
        <path d="M24 16H26V14H24V16Z" fill="#242628" />
        <path d="M18 16H20V14H18V16Z" fill="#242628" />
        <path d="M32 14H34V12H32V14Z" fill="#242628" />
        <path d="M26 14H28V12H26V14Z" fill="#242628" />
        <path d="M20 14H22V12H20V14Z" fill="#242628" />
        <path d="M34 12H36V10H34V12Z" fill="#242628" />
        <path d="M28 12H30V10H28V12Z" fill="#242628" />
        <path d="M22 12H24V10H22V12Z" fill="#242628" />
        <path d="M36 10H38V8H36V10Z" fill="#242628" />
        <path d="M30 10H32V8H30V10Z" fill="#242628" />
        <path d="M24 10H26V8H24V10Z" fill="#242628" />
        <path d="M32 2H36V4H38V8H40V0H32V2Z" fill="#242628" />
        <path d="M32 8H34V6H32V8Z" fill="#242628" />
        <path d="M26 8H28V6H26V8Z" fill="#242628" />
        <path d="M34 6H36V4H34V6Z" fill="#242628" />
        <path d="M28 6H30V4H28V6Z" fill="#242628" />
        <path d="M30 4H32V2H30V4Z" fill="#242628" />
        <path d="M14 28H16V26H14V28Z" fill="#DEE5EA" />
        <path d="M16 26H18V24H16V26Z" fill="#DEE5EA" />
        <path d="M18 24H20V22H18V24Z" fill="#DEE5EA" />
        <path d="M20 22H22V20H20V22Z" fill="#DEE5EA" />
        <path d="M22 20H24V18H22V20Z" fill="#DEE5EA" />
        <path d="M24 18H26V16H24V18Z" fill="#DEE5EA" />
        <path d="M26 16H28V14H26V16Z" fill="#DEE5EA" />
        <path d="M28 14H30V12H28V14Z" fill="#DEE5EA" />
        <path d="M30 12H32V10H30V12Z" fill="#DEE5EA" />
        <path d="M32 10H34V8H32V10Z" fill="#DEE5EA" />
        <path d="M34 8H36V6H34V8Z" fill="#DEE5EA" />
        <path d="M36 6H38V4H36V6Z" fill="#DEE5EA" />
        <path d="M14 30H16V28H14V30Z" fill="#B8C9D8" />
        <path d="M16 28H18V26H16V28Z" fill="#B8C9D8" />
        <path d="M18 26H20V24H18V26Z" fill="#B8C9D8" />
        <path d="M20 24H22V22H20V24Z" fill="#B8C9D8" />
        <path d="M22 22H24V20H22V22Z" fill="#B8C9D8" />
        <path d="M24 20H26V18H24V20Z" fill="#B8C9D8" />
        <path d="M26 18H28V16H26V18Z" fill="#B8C9D8" />
        <path d="M28 16H30V14H28V16Z" fill="#B8C9D8" />
        <path d="M30 14H32V12H30V14Z" fill="#B8C9D8" />
        <path d="M32 12H34V10H32V12Z" fill="#B8C9D8" />
        <path d="M34 10H36V8H34V10Z" fill="#B8C9D8" />
        <path d="M36 8H38V6H36V8Z" fill="#B8C9D8" />
        <path d="M4 38H6V36H4V38Z" fill="#619DD2" />
        <path d="M14 36H18V34H14V36Z" fill="#619DD2" />
        <path d="M6 36H8V34H6V36Z" fill="#619DD2" />
        <path d="M12 34H14V32H12V34Z" fill="#619DD2" />
        <path d="M8 34H10V32H8V34Z" fill="#619DD2" />
        <path d="M2 38H4V36H2V38Z" fill="#90CBFF" />
        <path d="M4 36H6V34H4V36Z" fill="#90CBFF" />
        <path d="M14 34H16V32H14V34Z" fill="#90CBFF" />
        <path d="M6 34H8V32H6V34Z" fill="#90CBFF" />
        <path d="M8 32H14V30H12V28H8V32Z" fill="#90CBFF" />
        <path d="M6 28H8V26H6V28Z" fill="#90CBFF" />
        <path d="M4 26H6V24H4V26Z" fill="#90CBFF" />
        <path d="M2 36H4V34H2V36Z" fill="#C4E3FF" />
        <path d="M4 34H6V32H4V34Z" fill="#C4E3FF" />
        <path d="M6 32H8V30H6V32Z" fill="#C4E3FF" />
        <path d="M8 28H10V26H8V28Z" fill="#C4E3FF" />
        <path d="M6 26H8V24H6V26Z" fill="#C4E3FF" />
        <path d="M4 24H6V22H4V24Z" fill="#C4E3FF" />
        <path
          d="M14 22H12V24H10V26H14V24H16V22H18V20H20V18H22V16H24V14H26V12H28V10H30V8H32V6H34V4H36V2H32V4H30V6H28V8H26V10H24V12H22V14H20V16H18V18H16V20H14V22Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_505_67997">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="matrix(-1 0 0 1 40 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SwordSmall;
