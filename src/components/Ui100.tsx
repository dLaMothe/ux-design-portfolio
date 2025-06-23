import React from "react";

interface Ui100Props {
  width?: number;
  height?: number;
}

const Ui100: React.FC<Ui100Props> = ({ width = 24, height = 24 }) => {
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
        d="M20 4H21V5H22V8H21V9H20V10H19V11H18V12H17V13H16V14H15V15H14V16H13V17H12V18H11V19H10V20H9V21H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V9H12V8H13V7H14V6H15V5H16V4H17V3H20V4ZM15 9H14V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H6V19H8V18H9V17H10V16H11V15H12V14H13V13H14V12H15V11H16V10H17V8H15V9Z"
        fill="black"
      />
      <path
        d="M18 16H19V19H18V20H17V21H13V20H12V19H13V18H14V19H16V18H17V17H16V15H18V16Z"
        fill="black"
      />
      <path
        d="M9 4H10V8H9V9H7V10H5V11H6V13H4V12H3V9H4V8H7V7H8V5H5V6H3V4H4V3H9V4Z"
        fill="black"
      />
    </svg>
  );
};

export default Ui100;
