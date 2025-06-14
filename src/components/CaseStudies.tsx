import React from "react";
import { useNavigate } from "react-router-dom";
import { PortfolioManager } from "../models/PortfolioManager";
import CaseStudyCard from "./CaseStudyCard";

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
    <div className="section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <div className="grid grid-2">
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
