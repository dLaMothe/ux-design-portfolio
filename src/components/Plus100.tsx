import React from "react";

interface Plus100Props {
  width?: number;
  height?: number;
}

const Plus100: React.FC<Plus100Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 11H19V13H13V19H11V13H5V11H11V5H13V11Z" fill="black" />
    </svg>
  );
};

export default Plus100;
