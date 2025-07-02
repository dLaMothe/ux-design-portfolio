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
    <div>
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: 1200,
            gap: 24,
          }}
        >
          {/* Skills SVG Icon */}
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
          <h1
            style={{
              fontFamily: "'Jersey 10', sans-serif",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "69px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#242628",
              margin: 0,
              padding: 0,
            }}
          >
            Skills
          </h1>
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
