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
    "improving-marketplace-checkout-experience",
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
    <div style={{ paddingTop: 192 }}>
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div className="case-studies-header">
          {/* Case Studies SVG Icon */}
          <div className="case-studies-icon">
            <CaseStudiesIcon />
          </div>
          {/* Headline */}
          <h1 className="section-title-main">Explore My Quests</h1>
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
