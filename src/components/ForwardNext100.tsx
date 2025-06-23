import React from "react";

interface ForwardNext100Props {
  width?: number;
  height?: number;
}

const ForwardNext100: React.FC<ForwardNext100Props> = ({
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
      <path d="M14 11L15 11L15 12L14 12L14 11Z" fill="black" />
      <path d="M14 12L15 12L15 13L14 13L14 12Z" fill="black" />
      <path d="M13 13L14 13L14 14L13 14L13 13Z" fill="black" />
      <path d="M12 14L13 14L13 15L12 15L12 14Z" fill="black" />
      <path d="M11 15L12 15L12 16L11 16L11 15Z" fill="black" />
      <path d="M10 16L11 16L11 17L10 17L10 16Z" fill="black" />
      <path d="M9 17L10 17L10 18L9 18L9 17Z" fill="black" />
      <path d="M8 18L9 18L9 19L8 19L8 18Z" fill="black" />
      <path d="M13 10L14 10L14 11L13 11L13 10Z" fill="black" />
      <path d="M12 9L13 9L13 10L12 10L12 9Z" fill="black" />
      <path d="M11 8L12 8L12 9L11 9L11 8Z" fill="black" />
      <path d="M10 7L11 7L11 8L10 8L10 7Z" fill="black" />
      <path d="M9 6L10 6L10 7L9 7L9 6Z" fill="black" />
      <path d="M8 5L9 5L9 6L8 6L8 5Z" fill="black" />
    </svg>
  );
};

export default ForwardNext100;
