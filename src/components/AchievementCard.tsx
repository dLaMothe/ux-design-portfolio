import React from "react";
import { Achievement } from "../models/Achievement";
import { useModal } from "../App";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const { openAchievementModal } = useModal();

  return (
    <div
      className="achievement-card"
      onClick={() => openAchievementModal(achievement)}
    >
      {/* Type at top, in brackets, centered */}
      <div className="achievement-type">[{achievement.type}]</div>

      {/* Large centered image with border or placeholder */}
      <div className="achievement-image-wrapper">
        {achievement.badgeUrl || achievement.certificateUrl ? (
          <img
            src={achievement.badgeUrl || achievement.certificateUrl}
            alt={achievement.title}
            className="achievement-image"
          />
        ) : (
          <div className="achievement-image-placeholder" />
        )}
      </div>

      {/* Title as bold, centered heading */}
      <div className="achievement-title">{achievement.title}</div>
    </div>
  );
};

export default AchievementCard;
