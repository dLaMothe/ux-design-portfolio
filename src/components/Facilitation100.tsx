import React from "react";

interface Facilitation100Props {
  width?: number;
  height?: number;
}

const Facilitation100: React.FC<Facilitation100Props> = ({
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
      <rect x="7" y="8" width="2" height="13" fill="#242628" />
      <rect x="9" y="7" width="12" height="2" fill="#242628" />
      <rect x="9" y="20" width="8" height="2" fill="#242628" />
      <rect x="8" y="7" width="1" height="1" fill="#242628" />
      <rect x="8" y="21" width="1" height="1" fill="#242628" />
      <rect x="17" y="20" width="1" height="1" fill="#242628" />
      <rect x="16" y="16" width="3" height="4" fill="#242628" />
      <rect x="19" y="16" width="1" height="3" fill="#242628" />
      <rect x="20" y="16" width="1" height="2" fill="#242628" />
      <rect x="21" y="16" width="1" height="1" fill="#242628" />
      <rect x="21" y="8" width="1" height="1" fill="#242628" />
      <rect x="15" y="4" width="1" height="1" fill="#242628" />
      <rect x="16" y="4" width="1" height="1" fill="#242628" />
      <rect x="16" y="3" width="1" height="1" fill="#242628" />
      <rect x="11" y="2" width="5" height="2" fill="#242628" />
      <rect x="6" y="3" width="5" height="2" fill="#242628" />
      <rect x="3" y="4" width="3" height="2" fill="#242628" />
      <rect x="2" y="6" width="2" height="3" fill="#242628" />
      <rect x="3" y="9" width="2" height="5" fill="#242628" />
      <rect x="4" y="14" width="1" height="4" fill="#242628" />
      <rect x="2" y="5" width="1" height="1" fill="#242628" />
      <rect x="20" y="9" width="2" height="7" fill="#242628" />
    </svg>
  );
};

export default Facilitation100;
