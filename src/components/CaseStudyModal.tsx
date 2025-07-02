import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import Close100 from "./Close100";

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
  portfolioManager: PortfolioManager;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  portfolioManager,
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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-4xl shadow-2xl transform transition-all animate-fadeIn"
        style={{
          position: "relative",
          zIndex: 10000,
          animation: "fadeIn 0.3s ease-out",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Case Study Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Close100 />
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
            {/* Case Study Header */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {caseStudy.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{caseStudy.client}</p>
              <div className="flex gap-2">
                <span className="badge badge-primary">{caseStudy.role}</span>
                <span className="badge badge-secondary">
                  {caseStudy.duration}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Overview
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Skills Section */}
            {caseStudy.skillIds && caseStudy.skillIds.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Skills Demonstrated
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.skillIds.map((skillId) => {
                    const skill = portfolioManager.getSkill(skillId);
                    if (!skill) return null;
                    return (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        portfolioManager={portfolioManager}
                        showCaseStudies={false}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tools Section */}
            {caseStudy.tools && caseStudy.tools.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Tools & Technologies Used
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.tools.map((toolName) => (
                    <div
                      key={toolName}
                      className="card hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="badge badge-primary">Tool</span>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        {toolName}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Section */}
            {caseStudy.team && caseStudy.team.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Team Members
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.team.map((member) => (
                    <div
                      key={member}
                      className="card hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="badge badge-secondary">
                          Team Member
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        {member}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenge & Solution Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Challenge
                </h4>
                <p className="text-gray-600">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Solution
                </h4>
                <p className="text-gray-600">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Outcome Section */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Outcome
              </h4>
              <p className="text-gray-600">{caseStudy.outcome}</p>
            </div>

            {/* Learnings Section */}
            {caseStudy.learnings && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Learnings
                </h4>
                <p className="text-gray-600">{caseStudy.learnings}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CaseStudyModal;
