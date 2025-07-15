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

  // Define the desired order of case studies
  const caseStudyOrder = [
    "effortless-onboarding-with-a-personalised-reward",
    "a-filter-for-every-yogi",
    "custom-lists-for-self-organisation",
    "easy-ordering-for-every-diet",
    "a-design-system-for-all-teams",
    "oouxing-my-portfolio",
  ];

  // Sort case studies according to the defined order
  const sortedCaseStudies = [...caseStudies].sort((a, b) => {
    const indexA = caseStudyOrder.indexOf(a.id);
    const indexB = caseStudyOrder.indexOf(b.id);
    return indexA - indexB;
  });

  const handleCaseStudyClick = (caseStudyId: string) => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate(`/case-study/${caseStudyId}`);
  };

  return (
    <div>
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: 1200,
            gap: 24,
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
          <h1
            style={{
              fontFamily: "'Jersey 10', sans-serif",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "69px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#242628",
              margin: 0,
              padding: 0,
            }}
          >
            Explore My Quests
          </h1>
        </div>
        <div className="case-study-grid" style={{ marginTop: 48 }}>
          {sortedCaseStudies.map((caseStudy, index) => (
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
