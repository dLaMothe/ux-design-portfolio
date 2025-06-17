import React from "react";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";
import { getSkillColor } from "./SkillCard";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  portfolioManager: PortfolioManager;
  onClick: () => void;
  index?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  portfolioManager,
  onClick,
  index = 0,
}) => {
  const skillsUsed = portfolioManager.getSkillsForCaseStudy(caseStudy.id);

  // Use the first image if available, otherwise fallback to a placeholder
  const imageUrl =
    caseStudy.images && caseStudy.images.length > 0
      ? caseStudy.images[0]
      : "https://placehold.co/600x400?text=Case+Study";

  return (
    <div onClick={onClick} className="case-study-card">
      {/* Header (optional, e.g. arrow or type) */}
      <div className="case-study-card-header">
        <span
          style={{
            fontFamily: "Ubuntu Sans Mono",
            fontSize: 24,
            fontWeight: 200,
            color: "#242628",
            width: 32,
            height: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          &rarr;
        </span>
      </div>
      {/* Picture */}
      <img
        src={imageUrl}
        alt={caseStudy.title}
        className="case-study-card-image"
        style={{ objectFit: "cover" }}
      />
      {/* Content */}
      <div className="case-study-card-content">
        {/* Title */}
        <div className="case-study-card-title">#{caseStudy.title}</div>
        {/* Skills Used as tags */}
        <div className="case-study-card-skills">
          {skillsUsed.map((skill, idx) => (
            <span
              key={skill.id}
              className="case-study-card-skill"
              style={{ background: getSkillColor(skill, idx) }}
            >
              {skill.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
