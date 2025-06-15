import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Award, Users } from "lucide-react";
import { Skill, SkillLevel, SkillCategory } from "../models/Skill";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillModal from "./SkillModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const color = getSkillColor(skill, index);

  const getSkillLevelColor = (level: SkillLevel) => {
    switch (level) {
      case SkillLevel.EXPERT:
        return "text-green-600 bg-green-100";
      case SkillLevel.ADVANCED:
        return "text-blue-600 bg-blue-100";
      case SkillLevel.INTERMEDIATE:
        return "text-orange-600 bg-orange-100";
      case SkillLevel.BEGINNER:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case SkillCategory.RESEARCH:
        return <Star size={24} />;
      case SkillCategory.DESIGN:
        return <Award size={24} />;
      case SkillCategory.PROTOTYPING:
        return <TrendingUp size={24} />;
      case SkillCategory.TESTING:
        return <Users size={24} />;
      case SkillCategory.STRATEGY:
        return <Star size={24} />;
      case SkillCategory.COLLABORATION:
        return <Users size={24} />;
    }
  };

  return (
    <>
      <div
        className="skill-card"
        style={{
          background: color || "#FCFE53",
          borderBottom: "2px solid #242628",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="skill-card-header">
          <div className="skill-card-icon">
            {getCategoryIcon(skill.category)}
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
