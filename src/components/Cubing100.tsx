import React from "react";

interface Cubing100Props {
  width?: number;
  height?: number;
}

const Cubing100: React.FC<Cubing100Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3H15V4H17V5H18V6H20V7H21V18H20V19H18V20H16V21H14V22H10V21H8V20H6V19H4V18H3V7H4V6H6V5H7V4H9V3H11V2H13V3ZM5 17H6V18H8V19H10V20H11V13H10V12H8V11H6V10H5V17ZM18 11H16V12H14V13H13V20H14V19H16V18H18V17H19V10H18V11ZM11 5H10V6H8V7H6V8H7V9H9V10H11V11H13V10H15V9H17V8H18V7H16V6H14V5H13V4H11V5Z"
        fill="black"
      />
    </svg>
  );
};

export default Cubing100;
