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
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
      style={{ minWidth: 280, maxWidth: 400, margin: "auto" }}
    >
      {/* Picture */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={caseStudy.title}
          className="rounded-lg object-cover border border-gray-100"
          style={{
            width: "100%",
            maxWidth: 340,
            height: 180,
            background: "#f3f4f6",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
        {caseStudy.title}
      </h3>
      {/* Skills Used as tags */}
      <div className="flex flex-wrap gap-2 justify-center w-full">
        {skillsUsed.map((skill, index) => (
          <span
            key={skill.id}
            className="px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            style={{
              display: "inline-block",
              background: getSkillColor(skill, index),
              color: "#fff",
              border: "none",
            }}
          >
            {skill.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
