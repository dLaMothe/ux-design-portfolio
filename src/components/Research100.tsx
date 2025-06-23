import React from "react";

interface Research100Props {
  width?: number;
  height?: number;
}

const Research100: React.FC<Research100Props> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.99951H15V11.9995H16V12.9995H17V13.9995H18V14.9995H19V15.9995H20V16.9995H21V19.9995H20V20.9995H4V19.9995H3V16.9995H4V15.9995H5V14.9995H6V13.9995H7V12.9995H8V11.9995H9V4.99951H7V2.99951H17V4.99951ZM11 12.9995H10V13.9995H9V14.9995H8V15.9995H7V16.9995H6V17.9995H5V18.9995H19V17.9995H18V16.9995H17V15.9995H16V14.9995H15V13.9995H14V12.9995H13V4.99951H11V12.9995Z"
        fill="black"
      />
    </svg>
  );
};

export default Research100;
