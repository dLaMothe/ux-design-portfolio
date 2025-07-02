import React from "react";

interface Ooux100Props {
  width?: number;
  height?: number;
}

const Ooux100: React.FC<Ooux100Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 19H9V13H10V14H11V20H10V21H4V20H3V14H4V13H5V19Z"
        fill="black"
      />
      <path
        d="M15 14H16V15H18V14H19V13H20V14H21V15H20V16H19V18H20V19H21V20H20V21H19V20H18V19H16V20H15V21H14V20H13V19H14V18H15V16H14V15H13V14H14V13H15V14Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4H11V10H10V11H4V10H3V4H4V3H10V4ZM5 9H9V5H5V9Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4H21V10H20V11H14V10H13V4H14V3H20V4ZM15 9H19V5H15V9Z"
        fill="black"
      />
    </svg>
  );
};

export default Ooux100;
