import React from "react";
import { PortfolioManager } from "../models/PortfolioManager";
import AchievementCard from "./AchievementCard";
import AchievementsIcon from "./AchievementsIcon";

interface AchievementsProps {
  portfolioManager: PortfolioManager;
}

const Achievements: React.FC<AchievementsProps> = ({ portfolioManager }) => {
  const achievements = portfolioManager.getAllAchievements();

  return (
    <div>
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div className="achievements-header">
          {/* Achievements Icon */}
          <div className="achievements-icon">
            <AchievementsIcon />
          </div>
          {/* Headline */}
          <h1 className="achievements-title">View My Achievements</h1>
        </div>
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
