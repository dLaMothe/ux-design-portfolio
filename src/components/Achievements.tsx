import React from "react";
import { PortfolioManager } from "../models/PortfolioManager";
import AchievementCard from "./AchievementCard";

interface AchievementsProps {
  portfolioManager: PortfolioManager;
}

const Achievements: React.FC<AchievementsProps> = ({ portfolioManager }) => {
  const achievements = portfolioManager.getAllAchievements();

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="grid grid-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
