import React from "react";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";

interface FeaturedCaseStudyCardProps {
  caseStudy: CaseStudy;
  portfolioManager: PortfolioManager;
  onClick: () => void;
}

const FeaturedCaseStudyCard: React.FC<FeaturedCaseStudyCardProps> = ({
  caseStudy,
  portfolioManager,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="featured-case-study-card">
      {/* Left side - Image */}
      <div className="featured-case-study-image-container">
        <img
          src={caseStudy.previewImage}
          alt={caseStudy.title}
          className="featured-case-study-image"
        />
      </div>

      {/* Right side - Content */}
      <div className="featured-case-study-content">
        {/* Tags */}
        <div className="featured-case-study-tags">
          <span className="featured-tag">Money Maker</span>
          <span className="featured-tag">Money Maker</span>
        </div>

        {/* Title */}
        <h2 className="featured-case-study-title">{caseStudy.title}</h2>

        {/* Goal Section */}
        <div className="featured-case-study-section">
          <h3 className="featured-section-title">Goal</h3>
          <p className="featured-section-text">{caseStudy.goal}</p>
        </div>

        {/* Process Section */}
        <div className="featured-case-study-section">
          <h3 className="featured-section-title">Process</h3>
          <p className="featured-section-text">{caseStudy.process}</p>
        </div>

        {/* Impact Section */}
        <div className="featured-case-study-section">
          <h3 className="featured-section-title">Impact</h3>
          <p className="featured-section-text">{caseStudy.lessonLearned}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudyCard;
