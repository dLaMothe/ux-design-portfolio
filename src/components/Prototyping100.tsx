import React from "react";

interface Prototyping100Props {
  width?: number;
  height?: number;
}

const Prototyping100: React.FC<Prototyping100Props> = ({
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip0_521_69228)">
        <rect width="24" height="24" fill="url(#pattern0_521_69228)" />
        <rect x="19" y="17" width="1" height="1" fill="#242628" />
        <rect x="13" y="14" width="1" height="1" fill="#242628" />
        <rect x="14" y="13" width="2" height="4" fill="#242628" />
        <rect x="10" y="11" width="1" height="1" fill="#242628" />
        <rect x="10" y="10" width="1" height="1" fill="#242628" />
        <rect x="9" y="9" width="1" height="1" fill="#242628" />
        <rect x="7" y="6" width="1" height="1" fill="#242628" />
        <rect x="14" y="6" width="3" height="1" fill="#242628" />
        <rect x="15" y="5" width="3" height="1" fill="#242628" />
        <rect x="16" y="4" width="1" height="1" fill="#242628" />
        <rect x="15" y="7" width="1" height="1" fill="#242628" />
        <rect x="4" y="16" width="3" height="1" fill="#242628" />
        <rect x="5" y="15" width="3" height="1" fill="#242628" />
        <rect x="6" y="14" width="1" height="1" fill="#242628" />
        <rect x="5" y="17" width="1" height="1" fill="#242628" />
        <rect x="6" y="5" width="1" height="3" fill="#242628" />
        <rect x="5" y="4" width="1" height="3" fill="#242628" />
        <rect x="4" y="5" width="1" height="1" fill="#242628" />
        <rect x="10" y="3" width="2" height="3" fill="#242628" />
        <rect x="2" y="10" width="3" height="2" fill="#242628" />
        <rect x="18" y="16" width="1" height="3" fill="#242628" />
        <rect x="17" y="15" width="1" height="5" fill="#242628" />
        <rect x="15" y="17" width="1" height="1" fill="#242628" />
        <rect x="16" y="14" width="1" height="5" fill="#242628" />
        <rect x="13" y="15" width="1" height="1" fill="#242628" />
        <rect x="13" y="13" width="1" height="1" fill="#242628" />
        <rect x="13" y="11" width="5" height="2" fill="#242628" />
        <rect x="11" y="10" width="2" height="8" fill="#242628" />
        <rect x="10" y="12" width="1" height="1" fill="#242628" />
      </g>
      <defs>
        <pattern
          id="pattern0_521_69228"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_521_69228" transform="scale(0.0416667)" />
        </pattern>
        <clipPath id="clip0_521_69228">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <image
          id="image0_521_69228"
          width="24"
          height="24"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvVlEFKxTAQhv8EutELFOq0l3gHUNzpNR4IiiCCa58HcKdu9Bq6U/e68Qrt0J5AFy6ayED7iDVtU/WBZlNoJv83mfknCiteasX6+DsAZrZyWyKalJQ3uCzL/SRJrtzy9QF8se65LwBmfgSwqbU+cCE+gIgbYy4BPBDRtq+fPsAOgFsJ7kJcAUdcfu8S0V0QQIKYWSAnRLQ15DJmvgdw3icuZyc17DuWDgI09b+JougojuO3KaAloG2iz4rMfA1g3gorpV6stXtE9DQGCwJUVbVW13Vf5u9a6+OurZfJjGXQ7rs37J6x1l6kaXoY7CJfIDM/A5i5e8aYsyzLFkNJepvss2lRFDOllEA+rTHIpEFryySiWuvTljQECX4qmgF8BbAuD16e54sQSPBj1wDmxpiNtu4hkKBBG2qiC/GV6scAgQtEvj5H/Qpgsk1Dhy8k7v/f4AMOkrQZkxnfTgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default Prototyping100;
