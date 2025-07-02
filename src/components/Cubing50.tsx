import React from "react";

interface Cubing50Props {
  width?: number;
  height?: number;
}

const Cubing50: React.FC<Cubing50Props> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 15H7V7H9V15Z" fill="#242628" />
      <path d="M2 11H1V4H2V11Z" fill="#242628" />
      <path d="M15 11H14V4H15V11Z" fill="#242628" />
      <path d="M7 7H5V6H7V7Z" fill="#242628" />
      <path d="M11 7H9V6H11V7Z" fill="#242628" />
      <path d="M13 6H11V5H13V6Z" fill="#242628" />
      <path d="M14 5H13V4H14V5Z" fill="#242628" />
      <path d="M3 5H2V4H3V5Z" fill="#242628" />
      <path d="M10 14H9V13H10V14Z" fill="#242628" />
      <path d="M7 14H6V13H7V14Z" fill="#242628" />
      <path d="M6 13H4V12H6V13Z" fill="#242628" />
      <path d="M4 12H2V11H4V12Z" fill="#242628" />
      <path d="M12 13H10V12H12V13Z" fill="#242628" />
      <path d="M14 12H12V11H14V12Z" fill="#242628" />
      <path d="M5 6H3V5H5V6Z" fill="#242628" />
      <path d="M6 3H4V2H6V3Z" fill="#242628" />
      <path d="M4 4H2V3H4V4Z" fill="#242628" />
      <path d="M12 3H10V2H12V3Z" fill="#242628" />
      <path d="M14 4H12V3H14V4Z" fill="#242628" />
      <path d="M7 2H6V1H7V2Z" fill="#242628" />
      <path d="M9 1H7V0H9V1Z" fill="#242628" />
      <path d="M10 2H9V1H10V2Z" fill="#242628" />
    </svg>
  );
};

export default Cubing50;
