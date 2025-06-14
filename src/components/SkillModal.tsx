import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Skill } from "../models/Skill";
import { Tool } from "../models/Tool";
import { CaseStudy } from "../models/CaseStudy";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import BookCard from "./BookCard";

interface SkillModalProps {
  skill: Skill;
  portfolioManager: PortfolioManager;
  onClose: () => void;
  color: string;
}

const SkillModal: React.FC<SkillModalProps> = ({
  skill,
  portfolioManager,
  onClose,
  color,
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

  // Get related tools, case studies, and books
  const relatedTools = portfolioManager.getToolsForSkill(skill.id);
  const relatedCaseStudies = portfolioManager.getCaseStudiesForSkill(skill.id);
  const relatedBooks = portfolioManager.getBooksForSkill(skill.id);

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
          maxWidth: "48rem",
          width: "100%",
          maxHeight: "80vh",
          overflow: "auto",
          border: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header with colored background */}
        <div
          className="border-b p-4 flex justify-between items-center"
          style={{ background: color }}
        >
          <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div
          className="overflow-y-auto"
          style={{
            height: "calc(80vh - 4rem)",
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
          }}
        >
          <div className="p-6 space-y-8">
            {/* Description */}
            <div>
              <span
                className="badge text-xs font-medium mb-2"
                style={{ background: color, color: "#fff", border: "none" }}
              >
                {skill.category}
              </span>
              <p className="text-gray-600 text-lg leading-relaxed mt-2">
                {skill.description}
              </p>
            </div>

            {/* Tools Section */}
            {relatedTools.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tools & Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedTools.map((tool) => (
                    <div key={tool.id} className="card">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="badge badge-primary">
                          {tool.category}
                        </span>
                        <span className="badge badge-secondary">
                          {tool.proficiency}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {tool.title}
                      </h4>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies Section */}
            {relatedCaseStudies.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  See the skill in action
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedCaseStudies.map((caseStudy) => (
                    <div key={caseStudy.id} className="card">
                      <div className="card-header">
                        <h4 className="card-title">{caseStudy.title}</h4>
                        <div className="card-subtitle">{caseStudy.client}</div>
                      </div>
                      <div className="card-content">
                        <p>{caseStudy.description}</p>
                        <div className="mt-2">
                          <span className="badge badge-primary">
                            {caseStudy.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Books Section */}
            {relatedBooks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How to self improve
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedBooks.map((book) => (
                    <BookCard key={book.id} book={book} onClick={() => {}} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  // Add the animation keyframes to the document
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return createPortal(modalContent, document.body);
};

export default SkillModal;
