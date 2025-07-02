import React from "react";

interface Facilitation50Props {
  width?: number;
  height?: number;
}

const Facilitation50: React.FC<Facilitation50Props> = ({
  width = 16,
  height = 16,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 12H11V11H14V12Z" fill="black" />
      <path d="M12 13H11V12H12V13Z" fill="black" />
      <path d="M13 13H12V12H13V13Z" fill="black" />
      <path d="M4 12H3V9H4V12Z" fill="black" />
      <path d="M3 9H2V6H3V9Z" fill="black" />
      <path d="M4 4H2V3H4V4Z" fill="black" />
      <path d="M8 3H4V2H8V3Z" fill="black" />
      <path d="M11 2H8V1H11V2Z" fill="black" />
      <path d="M12 3H11V2H12V3Z" fill="black" />
      <path d="M2 6H1V3H2V6Z" fill="black" />
      <path d="M12 14H11V13H12V14Z" fill="black" />
      <path d="M15 11H14V5H15V11Z" fill="black" />
      <path d="M6 14H5V6H6V14Z" fill="black" />
      <path d="M11 15H5V14H11V15Z" fill="black" />
      <path d="M14 6H5V5H14V6Z" fill="black" />
    </svg>
  );
};

export default Facilitation50;
