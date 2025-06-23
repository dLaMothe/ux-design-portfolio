import React from "react";

interface MedalSmallProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MedalSmall: React.FC<MedalSmallProps> = ({
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
      <path d="M16 26H14V38H16V40H12V24H16V26Z" fill="#242628" />
      <path d="M28 40H24V38H26V26H24V24H28V40Z" fill="#242628" />
      <path d="M18 38H16V36H18V38Z" fill="#242628" />
      <path d="M24 38H22V36H24V38Z" fill="#242628" />
      <path d="M22 36H18V34H22V36Z" fill="#242628" />
      <path d="M24 28H16V26H24V28Z" fill="#242628" />
      <path d="M12 24H10V22H12V24Z" fill="#242628" />
      <path d="M30 24H28V22H30V24Z" fill="#242628" />
      <path d="M10 22H8V18H10V22Z" fill="#242628" />
      <path d="M32 22H30V18H32V22Z" fill="#242628" />
      <path d="M8 18H6V10H8V18Z" fill="#242628" />
      <path d="M34 18H32V10H34V18Z" fill="#242628" />
      <path d="M10 10H8V6H10V10Z" fill="#242628" />
      <path d="M32 10H30V6H32V10Z" fill="#242628" />
      <path d="M12 6H10V4H12V6Z" fill="#242628" />
      <path d="M30 6H28V4H30V6Z" fill="#242628" />
      <path d="M16 4H12V2H16V4Z" fill="#242628" />
      <path d="M28 4H24V2H28V4Z" fill="#242628" />
      <path d="M24 2H16V0H24V2Z" fill="#242628" />
      <path d="M22 20H18V18H22V20Z" fill="white" />
      <path d="M24 18H22V16H24V18Z" fill="white" />
      <path d="M26 16H24V12H26V16Z" fill="white" />
      <path d="M24 12H22V10H24V12Z" fill="white" />
      <path d="M26 38H24V30H18V28H24V26H26V38Z" fill="#BD85EC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 6H30V18H28V22H24V24H16V22H12V18H10V10H12V6H16V4H28V6ZM18 10H16V12H14V16H16V18H18V20H22V18H24V16H26V12H24V10H22V8H18V10Z"
        fill="#FCFE53"
      />
      <path d="M24 26H16V24H24V26Z" fill="#B9BB17" />
      <path d="M28 24H24V22H28V24Z" fill="#B9BB17" />
      <path d="M30 22H28V18H30V22Z" fill="#B9BB17" />
      <path d="M32 18H30V10H32V18Z" fill="#B9BB17" />
      <path d="M16 34H18V36H16V38H14V26H16V34Z" fill="#F2E3FF" />
      <path d="M20 34H18V32H20V34Z" fill="#F2E3FF" />
      <path d="M18 18H16V16H18V18Z" fill="#B9BB17" />
      <path d="M16 16H14V12H16V16Z" fill="#B9BB17" />
      <path d="M18 12H16V10H18V12Z" fill="#B9BB17" />
      <path d="M22 8V10H18V8H22Z" fill="#B9BB17" />
      <path d="M16 24H12V22H16V24Z" fill="white" />
      <path d="M12 22H10V18H12V22Z" fill="white" />
      <path d="M10 18H8V10H10V18Z" fill="white" />
      <path d="M12 10H10V6H12V10Z" fill="white" />
      <path d="M16 6H12V4H16V6Z" fill="white" />
      <path d="M24 2V4H16V2H24Z" fill="white" />
      <path d="M22 12H24V16H22V18H18V16H16V12H18V10H22V12Z" fill="#FCFE53" />
      <path d="M24 36H22V34H20V32H18V34H16V28H18V30H24V36Z" fill="#DFB7FF" />
    </svg>
  );
};

export default MedalSmall;
