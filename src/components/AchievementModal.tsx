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
          background: "rgba(0, 0, 0, 0.25)",
        }}
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal Card */}
      <div
        className="achievement-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          background: "#EFEFEF",
          borderRadius: 2,
          boxShadow:
            "0px 1497px 250px rgba(0, 0, 0, 0.01), 0px 842px 250px rgba(0, 0, 0, 0.05), 0px 374px 250px rgba(0, 0, 0, 0.09), 0px 94px 206px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "1000px",
          height: "90vh",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          gap: 64,
          overflow: "auto",
          border: "none",
        }}
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
