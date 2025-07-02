import React from "react";

interface Ux100Props {
  width?: number;
  height?: number;
}

const Ux100: React.FC<Ux100Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 12H10V14H9V17H8V20H7V21H6V17H7V14H8V11H9V12Z" fill="black" />
      <path
        d="M16 14H17V17H18V21H17V20H16V17H15V14H14V12H15V11H16V14Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5H14V6H15V10H14V11H10V10H9V6H10V5H11V3H13V5ZM11 9H13V7H11V9Z"
        fill="black"
      />
    </svg>
  );
};

export default Ux100;
