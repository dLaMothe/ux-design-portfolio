import React from "react";

interface BookSmallProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BookSmall: React.FC<BookSmallProps> = ({
  width = 40,
  height = 40,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M22 33H24V35H26V37H22V35H18V37H14V35H16V33H18V31H20V29H22V33Z"
        fill="#242628"
      />
      <path d="M14 35H10V33H14V35Z" fill="#242628" />
      <path d="M30 35H26V33H30V35Z" fill="#242628" />
      <path d="M10 33H6V31H10V33Z" fill="#242628" />
      <path d="M16 33H14V31H16V33Z" fill="#242628" />
      <path d="M26 33H24V31H26V33Z" fill="#242628" />
      <path d="M34 33H30V31H34V33Z" fill="#242628" />
      <path d="M8 5H4V25H6V27H2V29H6V31H0V5H2V3H8V5Z" fill="#242628" />
      <path d="M14 31H10V29H14V31Z" fill="#242628" />
      <path d="M30 31H26V29H30V31Z" fill="#242628" />
      <path d="M38 29V27H34V25H36V5H32V3H38V5H40V31H34V29H38Z" fill="#242628" />
      <path d="M10 29H6V27H10V29Z" fill="#242628" />
      <path d="M20 29H18V27H20V29Z" fill="#242628" />
      <path d="M34 29H30V27H34V29Z" fill="#242628" />
      <path d="M22 27H20V25H22V27Z" fill="#242628" />
      <path d="M16 25H14V23H16V25Z" fill="#242628" />
      <path d="M20 25H18V23H20V25Z" fill="#242628" />
      <path d="M26 25H24V23H26V25Z" fill="#242628" />
      <path d="M14 23H10V21H14V23Z" fill="#242628" />
      <path d="M22 23H20V21H22V23Z" fill="#242628" />
      <path d="M30 23H26V21H30V23Z" fill="#242628" />
      <path d="M10 21H6V19H10V21Z" fill="#242628" />
      <path d="M20 21H18V19H20V21Z" fill="#242628" />
      <path d="M34 21H30V19H34V21Z" fill="#242628" />
      <path d="M22 19H20V17H22V19Z" fill="#242628" />
      <path d="M16 17H14V15H16V17Z" fill="#242628" />
      <path d="M20 17H18V15H20V17Z" fill="#242628" />
      <path d="M26 17H24V15H26V17Z" fill="#242628" />
      <path d="M14 15H10V13H14V15Z" fill="#242628" />
      <path d="M22 15H20V13H18V11H22V15Z" fill="#242628" />
      <path d="M30 15H26V13H30V15Z" fill="#242628" />
      <path d="M10 13H6V11H10V13Z" fill="#242628" />
      <path d="M34 13H30V11H34V13Z" fill="#242628" />
      <path d="M18 11H16V9H18V11Z" fill="#242628" />
      <path d="M24 11H22V9H24V11Z" fill="#242628" />
      <path d="M16 9H12V7H16V9Z" fill="#242628" />
      <path d="M28 9H24V7H28V9Z" fill="#242628" />
      <path d="M12 7H8V5H12V7Z" fill="#242628" />
      <path d="M32 7H28V5H32V7Z" fill="#242628" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19H16V23H14V21H10V23H12V25H4V5H8V7H12V9H16V11H18V19ZM16 15H14V17H16V15ZM6 21H10V19H6V21ZM10 15H14V13H10V15ZM6 13H10V11H6V13Z"
        fill="white"
      />
      <path d="M20 31H18V33H16V31H14V29H20V31Z" fill="#B8C9D8" />
      <path d="M14 29H10V27H14V29Z" fill="#B8C9D8" />
      <path d="M22 29H20V27H22V29Z" fill="#B8C9D8" />
      <path d="M20 27H18V25H20V27Z" fill="#B8C9D8" />
      <path d="M22 25H20V23H22V25Z" fill="#B8C9D8" />
      <path d="M20 23H18V21H20V23Z" fill="#B8C9D8" />
      <path d="M22 21H20V19H22V21Z" fill="#B8C9D8" />
      <path d="M20 19H18V17H20V19Z" fill="#B8C9D8" />
      <path d="M22 17H20V15H22V17Z" fill="#B8C9D8" />
      <path d="M20 15H18V13H20V15Z" fill="#B8C9D8" />
      <path d="M24 29H26V31H24V33H22V27H24V29Z" fill="#DEE5EA" />
      <path d="M18 29H14V27H6V25H12V23H14V25H16V19H18V29Z" fill="#DEE5EA" />
      <path d="M30 27V29H26V27H30Z" fill="#DEE5EA" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 25H34V27H26V29H24V27H22V11H24V9H28V7H32V5H36V25ZM30 21H26V23H24V25H26V23H30V21H34V19H30V21ZM30 13H26V15H24V17H26V15H30V13H34V11H30V13Z"
        fill="white"
      />
      <path d="M16 35H14V33H16V35Z" fill="#90CBFF" />
      <path d="M26 35H24V33H26V35Z" fill="#90CBFF" />
      <path d="M14 33H10V31H14V33Z" fill="#90CBFF" />
      <path d="M30 33H26V31H30V33Z" fill="#90CBFF" />
      <path d="M10 31H6V29H10V31Z" fill="#90CBFF" />
      <path d="M34 31H30V29H34V31Z" fill="#90CBFF" />
      <path d="M6 29H2V27H6V29Z" fill="#90CBFF" />
      <path d="M38 27V29H34V27H38Z" fill="#90CBFF" />
    </svg>
  );
};

export default BookSmall;
