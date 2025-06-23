import React from "react";

interface Drawing50Props {
  width?: number;
  height?: number;
}

const Drawing50: React.FC<Drawing50Props> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 2H6V1H10V2Z" fill="black" />
      <path d="M6 3H4V2H6V3Z" fill="black" />
      <path d="M4 4H3V3H4V4Z" fill="black" />
      <path d="M3 5H2V4H3V5Z" fill="black" />
      <path d="M3 12H2V10H3V12Z" fill="black" />
      <path d="M5 8H4V7H5V8Z" fill="black" />
      <path d="M7 6H6V5H7V6Z" fill="black" />
      <path d="M10 6H9V5H10V6Z" fill="black" />
      <path d="M12 8H11V7H12V8Z" fill="black" />
      <path d="M5 7H4V6H5V7Z" fill="black" />
      <path d="M7 5H6V4H7V5Z" fill="black" />
      <path d="M10 5H9V4H10V5Z" fill="black" />
      <path d="M12 7H11V6H12V7Z" fill="black" />
      <path d="M4 13H3V12H4V13Z" fill="black" />
      <path d="M6 14H4V13H6V14Z" fill="black" />
      <path d="M9 15H6V14H9V15Z" fill="black" />
      <path d="M10 14H9V13H10V14Z" fill="black" />
      <path d="M9 13H8V12H9V13Z" fill="black" />
      <path d="M2 10H1V5H2V10Z" fill="black" />
      <path d="M15 10H14V5H15V10Z" fill="black" />
      <path d="M12 3H10V2H12V3Z" fill="black" />
      <path d="M13 4H12V3H13V4Z" fill="black" />
      <path d="M14 5H13V4H14V5Z" fill="black" />
      <path d="M14 11H13V10H14V11Z" fill="black" />
      <path d="M13 12H9V11H13V12Z" fill="black" />
    </svg>
  );
};

export default Drawing50;
