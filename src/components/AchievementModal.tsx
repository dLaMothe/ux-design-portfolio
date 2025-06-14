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
      />
      {/* Modal Card */}
      <div
        ref={modalRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: "0.75rem",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          maxWidth: "40rem",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          border: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          style={{ zIndex: 10 }}
        >
          <X size={24} />
        </button>

        {/* Type at top, in brackets, centered */}
        <div className="w-full text-center mt-8 mb-6">
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            [{achievement.type}]
          </span>
        </div>

        {/* Large centered image with border */}
        {(achievement.badgeUrl || achievement.certificateUrl) && (
          <div className="w-full flex justify-center mb-8">
            <div
              className="bg-white border border-gray-300 rounded-md overflow-hidden"
              style={{
                width: 400,
                height: 225,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={achievement.badgeUrl || achievement.certificateUrl}
                alt={achievement.title}
                className="object-contain w-full h-full"
                style={{ maxHeight: 225, maxWidth: 400 }}
              />
            </div>
          </div>
        )}

        {/* Title as bold, centered heading */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6 px-6">
          {achievement.title}
        </h3>

        {/* Description/copy text below, left-aligned, smaller font */}
        <div className="w-full px-8 pb-10">
          <p className="text-sm text-gray-700 leading-relaxed text-left">
            {achievement.description}
          </p>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default AchievementModal;
