import React, { useState } from "react";
import { Skill, SkillLevel, SkillCategory } from "../models/Skill";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillModal from "./SkillModal";
import { useModal } from "../App";
import Cubing100 from "./Cubing100";
import Ux100 from "./Ux100";
import Ui100 from "./Ui100";
import Research100 from "./Research100";
import Prototyping100 from "./Prototyping100";
import Ooux100 from "./Ooux100";
import Writing100 from "./Writing100";
import Facilitation100 from "./Facilitation100";
import Drawing50 from "./Drawing50";

interface SkillCardProps {
  skill: Skill;
  caseStudiesUsingSkill?: CaseStudy[];
  index?: number;
  showCaseStudies?: boolean;
  portfolioManager: PortfolioManager;
}

// Utility: assign a unique color to each skill (by id or category)
const skillColors: string[] = [
  "#F59E42", // orange
  "#6C63FF", // purple
  "#43B78D", // teal
  "#F76C6C", // red
  "#FFD166", // yellow
  "#118AB2", // blue
  "#EF476F", // pink
  "#06D6A0", // green
  "#8338EC", // violet
  "#3A86FF", // blue2
];

export function getSkillColor(skill: Skill, index = 0) {
  // Use custom color if available, otherwise fall back to hash-based color
  if (skill.customColor) {
    return skill.customColor;
  }
  if (skill.id) {
    let hash = 0;
    for (let i = 0; i < skill.id.length; i++) {
      hash = skill.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return skillColors[Math.abs(hash) % skillColors.length];
  }
  return skillColors[index % skillColors.length];
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  caseStudiesUsingSkill = [],
  index = 0,
  showCaseStudies = true,
  portfolioManager,
}) => {
  const { openSkillModal } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const color = getSkillColor(skill, index);

  const getCategoryIcon = (category: SkillCategory, skillTitle?: string) => {
    // Map specific skills to their dedicated icons
    if (skillTitle === "Speed Cubing") {
      return <Cubing100 width={24} height={24} />;
    }
    if (skillTitle === "UX | User Experience Design") {
      return <Ux100 width={24} height={24} />;
    }
    if (skillTitle === "UI | User Interface Design") {
      return <Ui100 width={24} height={24} />;
    }
    if (skillTitle === "User Research") {
      return <Research100 width={24} height={24} />;
    }
    if (skillTitle === "Prototyping") {
      return <Prototyping100 width={24} height={24} />;
    }
    if (skillTitle === "OOUX | Object Oriented User Experience") {
      return <Ooux100 width={24} height={24} />;
    }
    if (skillTitle === "UX Writing") {
      return <Writing100 width={24} height={24} />;
    }
    if (skillTitle === "Workshop Facilitation") {
      return <Facilitation100 width={24} height={24} />;
    }
    if (skillTitle === "Drawing & Painting") {
      return <Drawing50 width={24} height={24} />;
    }

    // Fallback to category-based icons
    switch (category) {
      case SkillCategory.RESEARCH:
        return <Research100 width={24} height={24} />;
      case SkillCategory.DESIGN:
        return <Ux100 width={24} height={24} />;
      case SkillCategory.PROTOTYPING:
        return <Prototyping100 width={24} height={24} />;
      case SkillCategory.TESTING:
        return <Research100 width={24} height={24} />;
      case SkillCategory.STRATEGY:
        return <Ooux100 width={24} height={24} />;
      case SkillCategory.COLLABORATION:
        return <Facilitation100 width={24} height={24} />;
    }
  };

  return (
    <>
      <div
        onClick={() => openSkillModal(skill)}
        className="skill-card"
        style={{
          background: color || "#FCFE53",
          borderBottom: "2px solid #242628",
        }}
      >
        <div className="skill-card-header">
          <div className="skill-card-icon">
            {getCategoryIcon(skill.category, skill.title)}
          </div>
          <div className="skill-card-title">{skill.title}</div>
        </div>
        <div className="skill-card-description">{skill.description}</div>
        <div className="skill-card-link">
          <span className="custom-link">Read More</span>
          <span className="skill-card-arrow">→</span>
        </div>
      </div>
      {isModalOpen && (
        <SkillModal
          skill={skill}
          portfolioManager={portfolioManager}
          onClose={() => setIsModalOpen(false)}
          color={color}
        />
      )}
    </>
  );
};

export default SkillCard;
