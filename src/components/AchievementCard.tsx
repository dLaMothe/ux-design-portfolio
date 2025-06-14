import React, { useState } from "react";
import { Achievement } from "../models/Achievement";
import AchievementModal from "./AchievementModal";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-md min-h-[420px]"
        style={{ minHeight: 420, marginTop: 8, marginBottom: 8 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Type at top, in brackets, centered */}
        <div className="w-full text-center mb-4">
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            [{achievement.type}]
          </span>
        </div>

        {/* Large centered image with border */}
        {(achievement.badgeUrl || achievement.certificateUrl) && (
          <div className="w-full flex justify-center mb-6">
            <div
              className="bg-white border border-gray-300 rounded-md overflow-hidden"
              style={{
                width: 320,
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={achievement.badgeUrl || achievement.certificateUrl}
                alt={achievement.title}
                className="object-contain w-full h-full"
                style={{ maxHeight: 180, maxWidth: 320 }}
              />
            </div>
          </div>
        )}

        {/* Title as bold, centered heading */}
        <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
          {achievement.title}
        </h3>

        {/* Description/copy text below, left-aligned, smaller font */}
        <div className="w-full">
          <p className="text-sm text-gray-700 leading-relaxed text-left">
            {achievement.description}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <AchievementModal
          achievement={achievement}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AchievementCard;
