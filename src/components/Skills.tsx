import React from "react";
import { motion } from "framer-motion";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";

interface SkillsProps {
  portfolioManager: PortfolioManager;
}

const Skills: React.FC<SkillsProps> = ({ portfolioManager }) => {
  const skills = portfolioManager.getAllSkills();

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], categoryIndex) => (
              <React.Fragment key={category}>
                <div className="mb-2">
                  <h3 className="card-title mb-4">{category}</h3>
                  <div className="grid gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        index={skillIndex}
                        showCaseStudies={true}
                        portfolioManager={portfolioManager}
                      />
                    ))}
                  </div>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
