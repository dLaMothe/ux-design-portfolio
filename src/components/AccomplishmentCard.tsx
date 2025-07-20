import React from "react";
import { CaseStudy } from "../models/CaseStudy";

interface AccomplishmentCardProps {
  caseStudy: CaseStudy;
}

const AccomplishmentCard: React.FC<AccomplishmentCardProps> = ({
  caseStudy,
}) => {
  // Format process text into steps
  const processSteps = caseStudy.process
    ?.split("We")
    .filter((step) => step.trim()) // Remove empty strings
    .map((step) => `We${step.trim()}`); // Add back "We" and trim whitespace

  return (
    <div className="accomplishment-card">
      {/* Left side - Image */}
      <div className="accomplishment-image-container">
        <img
          src={caseStudy.previewImage}
          alt={caseStudy.title}
          className="accomplishment-image"
        />
      </div>

      {/* Right side - Content */}
      <div className="accomplishment-content">
        {/* Tags */}
        <div className="accomplishment-tags">
          <span className="accomplishment-tag">Money Maker</span>
          <span className="accomplishment-tag">Money Maker</span>
        </div>

        {/* Title */}
        <h2 className="accomplishment-title">{caseStudy.title}</h2>

        {/* Goal Section */}
        <div className="accomplishment-section">
          <h3 className="accomplishment-section-title">Goal</h3>
          <p className="accomplishment-section-text">{caseStudy.goal}</p>
        </div>

        {/* Process Section */}
        <div className="accomplishment-section">
          <h3 className="accomplishment-section-title">Process</h3>
          <p className="accomplishment-section-text">
            {processSteps?.map((step, index) => (
              <React.Fragment key={index}>
                {step}
                {index < processSteps.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Impact Section */}
        <div className="accomplishment-section">
          <h3 className="accomplishment-section-title">Impact</h3>
          <p className="accomplishment-section-text">
            {caseStudy.lessonLearned}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentCard;
