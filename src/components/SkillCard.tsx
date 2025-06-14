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
  // Use id hash or index for color assignment
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
      <motion.div
        className="card cursor-pointer"
        style={{ background: color, border: "none" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: color }}
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              {getCategoryIcon(skill.category)}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              {skill.title}
            </h4>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span
                className="badge text-xs font-medium"
                style={{ background: color, color: "#fff", border: "none" }}
              >
                {skill.level} Level
              </span>
              <span
                className="badge text-xs font-medium"
                style={{ background: color, color: "#fff", border: "none" }}
              >
                {skill.category}
              </span>
              <span className="badge text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                {skill.yearsOfExperience}+ years exp.
              </span>
            </div>
            {/* Optionally show case studies using this skill */}
            {showCaseStudies && caseStudiesUsingSkill.length > 0 && (
              <div className="mb-2">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Applied in Projects:
                </div>
                <div className="flex flex-wrap gap-1">
                  {caseStudiesUsingSkill.slice(0, 2).map((caseStudy) => (
                    <span
                      key={caseStudy.id}
                      className="badge text-xs bg-blue-100 text-blue-700"
                    >
                      {caseStudy.title}
                    </span>
                  ))}
                  {caseStudiesUsingSkill.length > 2 && (
                    <span className="badge text-xs bg-gray-100 text-gray-600">
                      +{caseStudiesUsingSkill.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            )}
            {/* Optionally show certifications */}
            {skill.certifications.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Certifications:
                </div>
                <div className="flex flex-wrap gap-1">
                  {skill.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="badge text-xs bg-green-100 text-green-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

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
