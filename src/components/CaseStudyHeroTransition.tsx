import React from "react";
import PixelMask from "./PixelMask";
import { CaseStudy } from "../models/CaseStudy";

interface CaseStudyHeroTransitionProps {
  caseStudy: CaseStudy;
}

const CaseStudyHeroTransition: React.FC<CaseStudyHeroTransitionProps> = ({
  caseStudy,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "2560px",
        height: "51px",
        marginTop: "-1px",
        marginBottom: "-1px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <svg
        width="2560"
        height="50"
        viewBox="0 0 2560 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <PixelMask id="caseStudyPixelMask" />
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#EFEFEF"
          mask="url(#caseStudyPixelMask)"
        />
      </svg>
    </div>
  );
};

export default CaseStudyHeroTransition;
