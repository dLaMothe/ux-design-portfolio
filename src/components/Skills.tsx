import React from "react";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import SkillsIcon from "./SkillsIcon";

interface SkillsProps {
  portfolioManager: PortfolioManager;
}

const Skills: React.FC<SkillsProps> = ({ portfolioManager }) => {
  const skills = portfolioManager.getAllSkills();

  return (
    <div style={{ paddingTop: 192 }}>
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div className="skills-header">
          {/* Skills SVG Icon */}
          <div className="skills-icon">
            <SkillsIcon />
          </div>
          {/* Headline */}
          <h1 className="section-title-main">Discover My Skills</h1>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginTop: 48 }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              portfolioManager={portfolioManager}
              index={index}
              showCaseStudies={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
