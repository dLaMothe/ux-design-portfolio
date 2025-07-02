import React from "react";

interface StarSmallProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const StarSmall: React.FC<StarSmallProps> = ({
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
      <g clipPath="url(#clip0_505_66674)">
        <path d="M8 36H6V34H8V36Z" fill="#FCFE53" />
        <path d="M34 36H32V34H34V36Z" fill="#FCFE53" />
        <path
          d="M22 8H24V12H26V16H28V18H34V20H32V22H30V30H32V34H30V32H26V30H16V32H12V34H8V30H10V26H12V24H10V22H8V20H6V18H12V16H14V14H16V10H18V6H20V4H22V8Z"
          fill="#FCFE53"
        />
        <path d="M6 38H4V34H6V38Z" fill="white" />
        <path d="M32 36H30V34H32V36Z" fill="white" />
        <path d="M8 34H6V30H8V34Z" fill="white" />
        <path d="M30 34H26V32H30V34Z" fill="white" />
        <path d="M26 32H22V30H26V32Z" fill="white" />
        <path d="M10 30H8V26H10V30Z" fill="white" />
        <path d="M12 26H10V24H12V26Z" fill="white" />
        <path d="M10 24H8V22H10V24Z" fill="white" />
        <path d="M8 22H6V20H8V22Z" fill="white" />
        <path d="M12 18H6V20H4V18H2V16H12V18Z" fill="white" />
        <path d="M14 16H12V14H14V16Z" fill="white" />
        <path d="M16 14H14V10H16V14Z" fill="white" />
        <path d="M18 10H16V6H18V10Z" fill="white" />
        <path d="M22 4H20V6H18V2H22V4Z" fill="white" />
        <path d="M36 38H34V34H36V38Z" fill="#B9BB17" />
        <path d="M10 36H8V34H10V36Z" fill="#B9BB17" />
        <path d="M14 34H12V32H14V34Z" fill="#B9BB17" />
        <path d="M34 34H32V30H34V34Z" fill="#B9BB17" />
        <path d="M18 32H16V30H18V32Z" fill="#B9BB17" />
        <path d="M32 30H30V26H32V30Z" fill="#B9BB17" />
        <path d="M32 24H30V22H32V24Z" fill="#B9BB17" />
        <path d="M34 22H32V20H34V22Z" fill="#B9BB17" />
        <path d="M38 16V18H36V20H34V18H28V16H38Z" fill="#B9BB17" />
        <path d="M28 16H26V14H28V16Z" fill="#B9BB17" />
        <path d="M26 12H24V10H26V12Z" fill="#B9BB17" />
        <path d="M24 8H22V6H24V8Z" fill="#B9BB17" />
        <path d="M4 38H6V40H2V34H4V38Z" fill="#242628" />
        <path d="M38 40H34V38H36V34H38V40Z" fill="#242628" />
        <path d="M10 38H6V36H10V38Z" fill="#242628" />
        <path d="M34 38H30V36H34V38Z" fill="#242628" />
        <path d="M14 36H10V34H14V36Z" fill="#242628" />
        <path d="M30 36H26V34H30V36Z" fill="#242628" />
        <path d="M6 34H4V30H6V34Z" fill="#242628" />
        <path d="M18 34H14V32H18V34Z" fill="#242628" />
        <path d="M26 34H22V32H26V34Z" fill="#242628" />
        <path d="M36 34H34V30H36V34Z" fill="#242628" />
        <path d="M22 32H18V30H22V32Z" fill="#242628" />
        <path d="M8 30H6V26H8V30Z" fill="#242628" />
        <path d="M34 30H32V26H34V30Z" fill="#242628" />
        <path d="M10 26H8V24H10V26Z" fill="#242628" />
        <path d="M32 26H30V24H32V26Z" fill="#242628" />
        <path d="M8 24H6V22H8V24Z" fill="#242628" />
        <path d="M34 24H32V22H34V24Z" fill="#242628" />
        <path d="M6 22H4V20H6V22Z" fill="#242628" />
        <path d="M36 22H34V20H36V22Z" fill="#242628" />
        <path d="M4 20H2V18H4V20Z" fill="#242628" />
        <path d="M38 20H36V18H38V20Z" fill="#242628" />
        <path d="M12 16H2V18H0V14H12V16Z" fill="#242628" />
        <path d="M40 18H38V16H28V14H40V18Z" fill="#242628" />
        <path d="M14 14H12V10H14V14Z" fill="#242628" />
        <path d="M28 14H26V10H28V14Z" fill="#242628" />
        <path d="M16 10H14V6H16V10Z" fill="#242628" />
        <path d="M26 10H24V6H26V10Z" fill="#242628" />
        <path d="M18 6H16V2H18V6Z" fill="#242628" />
        <path d="M24 6H22V2H24V6Z" fill="#242628" />
        <path d="M22 2H18V0H22V2Z" fill="#242628" />
      </g>
      <defs>
        <clipPath id="clip0_505_66674">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarSmall;
