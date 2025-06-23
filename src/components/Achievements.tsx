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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2rem 0",
            gap: 24,
            width: "100%",
            maxWidth: 1200,
            marginBottom: 32,
          }}
        >
          {/* Achievements Icon */}
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
            <AchievementsIcon />
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
            }}
          >
            Achievements
          </h1>
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
