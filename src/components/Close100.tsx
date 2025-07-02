import React from "react";

interface Close100Props {
  width?: number;
  height?: number;
}

const Close100: React.FC<Close100Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8H7V7H8V8Z" fill="black" />
      <path d="M7 7H6V6H7V7Z" fill="black" />
      <path d="M6 6H5V5H6V6Z" fill="black" />
      <path d="M9 9H8V8H9V9Z" fill="black" />
      <path d="M10 10H9V9H10V10Z" fill="black" />
      <path d="M11 11H10V10H11V11Z" fill="black" />
      <path d="M12 12H11V11H12V12Z" fill="black" />
      <path d="M13 13H12V12H13V13Z" fill="black" />
      <path d="M13 12H12V11H13V12Z" fill="black" />
      <path d="M12 13H11V12H12V13Z" fill="black" />
      <path d="M11 14H10V13H11V14Z" fill="black" />
      <path d="M10 15H9V14H10V15Z" fill="black" />
      <path d="M9 16H8V15H9V16Z" fill="black" />
      <path d="M8 17H7V16H8V17Z" fill="black" />
      <path d="M7 18H6V17H7V18Z" fill="black" />
      <path d="M6 19H5V18H6V19Z" fill="black" />
      <path d="M14 11H13V10H14V11Z" fill="black" />
      <path d="M15 10H14V9H15V10Z" fill="black" />
      <path d="M16 9H15V8H16V9Z" fill="black" />
      <path d="M17 8H16V7H17V8Z" fill="black" />
      <path d="M18 7H17V6H18V7Z" fill="black" />
      <path d="M19 6H18V5H19V6Z" fill="black" />
      <path d="M14 14H13V13H14V14Z" fill="black" />
      <path d="M15 15H14V14H15V15Z" fill="black" />
      <path d="M16 16H15V15H16V16Z" fill="black" />
      <path d="M17 17H16V16H17V17Z" fill="black" />
      <path d="M18 18H17V17H18V18Z" fill="black" />
      <path d="M19 19H18V18H19V19Z" fill="black" />
    </svg>
  );
};

export default Close100;
