import React from "react";
import { motion } from "framer-motion";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import SkillsIcon from "./SkillsIcon";

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
        {/* Section Header with Icon and Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: 24,
            width: "100%",
            maxWidth: 1200,
            height: 100,
            marginBottom: 32,
          }}
        >
          {/* Skills Icon */}
          <div
            style={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              order: 0,
              flexGrow: 0,
            }}
          >
            <SkillsIcon />
          </div>
          {/* Headline */}
          <span
            style={{
              fontFamily: "'Jersey 10', sans-serif",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "69px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#242628",
              flex: 1,
            }}
          >
            Skills & Expertise
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, skillIndex) => (
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
    </div>
  );
};

export default Skills;
