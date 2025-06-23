import React from "react";

interface Ux50Props {
  width?: number;
  height?: number;
}

const Ux50: React.FC<Ux50Props> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1H7V0H8V1Z" fill="black" />
      <path d="M9 1H8V0H9V1Z" fill="black" />
      <path d="M7 2H6V1H7V2Z" fill="black" />
      <path d="M7 4H6V3H7V4Z" fill="black" />
      <path d="M7 3H6V2H7V3Z" fill="black" />
      <path d="M11 6H10V5H11V6Z" fill="black" />
      <path d="M11 7H10V6H11V7Z" fill="black" />
      <path d="M11 8H10V7H11V8Z" fill="black" />
      <path d="M12 9H11V8H12V9Z" fill="black" />
      <path d="M12 10H11V9H12V10Z" fill="black" />
      <path d="M11 9H10V8H11V9Z" fill="black" />
      <path d="M13 11H12V10H13V11Z" fill="black" />
      <path d="M13 12H12V11H13V12Z" fill="black" />
      <path d="M13 13H12V12H13V13Z" fill="black" />
      <path d="M12 11H11V10H12V11Z" fill="black" />
      <path d="M13 14H12V13H13V14Z" fill="black" />
      <path d="M14 15H13V14H14V15Z" fill="black" />
      <path d="M14 16H13V15H14V16Z" fill="black" />
      <path d="M10 7H9V6H10V7Z" fill="black" />
      <path d="M5 6H6V5H5V6Z" fill="black" />
      <path d="M5 7H6V6H5V7Z" fill="black" />
      <path d="M5 8H6V7H5V8Z" fill="black" />
      <path d="M4 9H5V8H4V9Z" fill="black" />
      <path d="M4 10H5V9H4V10Z" fill="black" />
      <path d="M5 9H6V8H5V9Z" fill="black" />
      <path d="M3 11H4V10H3V11Z" fill="black" />
      <path d="M3 12H4V11H3V12Z" fill="black" />
      <path d="M3 13H4V12H3V13Z" fill="black" />
      <path d="M4 11H5V10H4V11Z" fill="black" />
      <path d="M3 14H4V13H3V14Z" fill="black" />
      <path d="M2 15H3V14H2V15Z" fill="black" />
      <path d="M2 16H3V15H2V16Z" fill="black" />
      <path d="M6 7H7V6H6V7Z" fill="black" />
      <path d="M9 5H8V4H9V5Z" fill="black" />
      <path d="M8 5H7V4H8V5Z" fill="black" />
      <path d="M10 4H9V3H10V4Z" fill="black" />
      <path d="M10 3H9V2H10V3Z" fill="black" />
      <path d="M10 2H9V1H10V2Z" fill="black" />
    </svg>
  );
};

export default Ux50;
