import React from "react";

interface BackPrevious100Props {
  width?: number;
  height?: number;
}

const BackPrevious100: React.FC<BackPrevious100Props> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 13H9V12H10V13Z" fill="black" />
      <path d="M10 12H9V11H10V12Z" fill="black" />
      <path d="M11 11H10V10H11V11Z" fill="black" />
      <path d="M12 10H11V9H12V10Z" fill="black" />
      <path d="M13 9H12V8H13V9Z" fill="black" />
      <path d="M14 8H13V7H14V8Z" fill="black" />
      <path d="M15 7H14V6H15V7Z" fill="black" />
      <path d="M16 6H15V5H16V6Z" fill="black" />
      <path d="M11 14H10V13H11V14Z" fill="black" />
      <path d="M12 15H11V14H12V15Z" fill="black" />
      <path d="M13 16H12V15H13V16Z" fill="black" />
      <path d="M14 17H13V16H14V17Z" fill="black" />
      <path d="M15 18H14V17H15V18Z" fill="black" />
      <path d="M16 19H15V18H16V19Z" fill="black" />
    </svg>
  );
};

export default BackPrevious100;
