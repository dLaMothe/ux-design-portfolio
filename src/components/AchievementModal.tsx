import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Achievement } from "../models/Achievement";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({
  achievement,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  const modalContent = (
    <>
      {/* Dimmer overlay with rgba(0,0,0,0.25) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.25)",
        }}
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal Card */}
      <div
        className="achievement-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Close Button */}
        <button onClick={onClose} className="achievement-modal-close">
          <X size={24} />
        </button>
        <div className="achievement-modal-content">
          {/* Type tag */}
          <div className="achievement-modal-type">
            <span>[</span>
            <span>{achievement.type}</span>
            <span>]</span>
          </div>
          {/* Image and Details Side by Side */}
          <div className="achievement-modal-image">
            {achievement.badgeUrl || achievement.certificateUrl ? (
              <img
                src={achievement.badgeUrl || achievement.certificateUrl}
                alt={achievement.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ) : null}
          </div>
          <div className="achievement-modal-details">
            <div className="achievement-modal-title">{achievement.title}</div>
            <div className="copy75">{achievement.description}</div>
            {achievement.publicUrl && (
              <div className="mt-6 text-center">
                <a
                  href={achievement.publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  {achievement.type === "Publication"
                    ? "View publication"
                    : "Read more"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default AchievementModal;
