import React from "react";
import { useNavigate } from "react-router-dom";
import { PortfolioManager } from "../models/PortfolioManager";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudiesIcon from "./CaseStudiesIcon";

interface CaseStudiesProps {
  portfolioManager: PortfolioManager;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ portfolioManager }) => {
  const navigate = useNavigate();
  const caseStudies = portfolioManager.getAllCaseStudies();

  const handleCaseStudyClick = (caseStudyId: string) => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate(`/case-study/${caseStudyId}`);
  };

  return (
    <div className="section bg-case-study-tile">
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: 24,
            width: "100%",
            maxWidth: 1200,
            height: 100,
            marginBottom: 32,
          }}
        >
          {/* Case Studies SVG Icon */}
          <div
            style={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              order: 0,
              flexGrow: 0,
            }}
          >
            <CaseStudiesIcon />
          </div>
          {/* Headline */}
          <span
            style={{
              fontFamily: "'Jersey 10', sans-serif",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "69px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#242628",
              flex: 1,
            }}
          >
            Case Studies
          </span>
        </div>
        <div
          style={{
            width: 1088,
            maxWidth: 1200,
            height: 1373,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              portfolioManager={portfolioManager}
              onClick={() => handleCaseStudyClick(caseStudy.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
