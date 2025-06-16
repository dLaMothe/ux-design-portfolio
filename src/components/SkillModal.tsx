import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Skill } from "../models/Skill";
import { Tool } from "../models/Tool";
import { CaseStudy } from "../models/CaseStudy";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import BookCard from "./BookCard";
import CaseStudyCard from "./CaseStudyCard";
import { useNavigate } from "react-router-dom";
import BookModal from "./BookModal";

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
  const navigate = useNavigate();

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

  const handleCaseStudyClick = (caseStudyId: string) => {
    onClose();
    window.scrollTo(0, 0);
    navigate(`/case-study/${caseStudyId}`);
  };

  const modalContent = (
    <>
      {/* Dimmer overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0, 0, 0, 0.25)",
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
        {/* Hero Section */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "56px 96px",
            gap: 16,
            width: "100%",
            background: color,
            borderBottom: "2px solid #242628",
            maxWidth: "100%",
          }}
        >
          {/* Title Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Skill Icon */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  color: "#242628",
                }}
              >
                {/* Use a simple icon for now, e.g. flask for research, award for design, trending up for prototyping, users for collaboration, star for strategy */}
                {skill.category === "Research" && (
                  <span style={{ fontSize: 24 }}>🧪</span>
                )}
                {skill.category === "Design" && (
                  <span style={{ fontSize: 24 }}>🏆</span>
                )}
                {skill.category === "Prototyping" && (
                  <span style={{ fontSize: 24 }}>📈</span>
                )}
                {skill.category === "Collaboration" && (
                  <span style={{ fontSize: 24 }}>👥</span>
                )}
                {skill.category === "Strategy" && (
                  <span style={{ fontSize: 24 }}>⭐</span>
                )}
                {skill.category === "Testing" && (
                  <span style={{ fontSize: 24 }}>🧑‍🔬</span>
                )}
              </span>
              <span
                style={{
                  fontFamily: "'Ubuntu Sans Mono', monospace",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "20px",
                  letterSpacing: "0.05em",
                  color: "#242628",
                  textTransform: "uppercase",
                  width: "auto",
                }}
              >
                {skill.title}
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#242628",
                fontSize: 24,
              }}
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          {/* Description and Button Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 96,
              width: "100%",
              marginTop: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Ubuntu Mono', monospace",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "27px",
                color: "#242628",
                maxWidth: 528,
                flex: 1,
              }}
            >
              {skill.description}
            </div>
            {/* Level Up Button (conditionally rendered) */}
            {![
              "UI | User Interface Design",
              "Drawing & Painting",
              "Speed Cubing",
            ].includes(skill.title) && (
              <a
                href="mailto:carina.lea.meyer@gmail.com"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "8px 12px",
                  gap: 8,
                  background: "#EFEFEF",
                  border: "1px solid #242628",
                  borderRadius: 2,
                  fontFamily: "'Ubuntu Mono', monospace",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "20px",
                  color: "#242628",
                  textDecoration: "none",
                  width: 184,
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 20, marginRight: 8 }}>⬆️</span> LEVEL
                UP WITH ME
              </a>
            )}
          </div>
        </div>
        {/* Main Content Section (Tools, Case Studies, Books) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px 96px",
            gap: 48,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 0,
              gap: 8,
              width: 808,
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                fontFamily: "'Jersey 10', sans-serif",
                fontWeight: 400,
                fontSize: 36,
                lineHeight: "39px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#242628",
                marginBottom: 0,
              }}
            >
              Tools I use here
            </span>
          </div>
          {/* Tools Grid */}
          {relatedTools.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 32,
                width: 808,
                maxWidth: "100%",
                alignItems: "stretch",
              }}
            >
              {relatedTools.map((tool) => (
                <div
                  key={tool.id}
                  style={{
                    background: color,
                    borderBottom: "2px solid #242628",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: 24,
                    gap: 16,
                    color: "#242628",
                    fontFamily: "Ubuntu Mono, monospace",
                    width: 253.33,
                    minWidth: 0,
                    height: "100%",
                    borderRadius: 0,
                    flexGrow: 1,
                  }}
                >
                  {/* Tool Type Tag */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      padding: 0,
                      gap: 4,
                      fontFamily: "'Ubuntu Sans Mono', monospace",
                      fontWeight: 400,
                      fontSize: 12,
                      lineHeight: "14px",
                      color: "#242628",
                      marginBottom: 4,
                    }}
                  >
                    <span>[</span>
                    <span>
                      {tool.category === "Design" ||
                      tool.category === "Prototyping" ||
                      tool.category === "Collaboration" ||
                      tool.category === "Analytics"
                        ? "Technical"
                        : "Methodical"}
                    </span>
                    <span>]</span>
                  </div>
                  {/* Tool Title */}
                  <div
                    style={{
                      fontFamily: "'Ubuntu Sans Mono', monospace",
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: "20px",
                      letterSpacing: "0.05em",
                      color: "#242628",
                      marginBottom: 8,
                      width: "100%",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      overflow: "visible",
                    }}
                  >
                    {tool.title}
                  </div>
                  {/* Tool Description */}
                  <div
                    style={{
                      fontFamily: "'Ubuntu Mono', monospace",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "#242628",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {tool.description}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How to Self Improve Section */}
          <div className="skill-modal-section">
            <h3 className="skill-modal-section-title">How to Self Improve</h3>
            <div className="skill-modal-books">
              {portfolioManager
                .getAllBooks()
                .filter((book) => book.skillIds.includes(skill.id))
                .map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
            </div>
          </div>

          {/* Debug Output */}
          <div
            style={{
              marginTop: 24,
              background: "#fffbe6",
              padding: 16,
              border: "1px solid #f5c542",
              borderRadius: 4,
            }}
          >
            <strong>DEBUG: Skill and Book IDs</strong>
            <div style={{ fontFamily: "monospace", marginTop: 8 }}>
              <div>
                Current skill.id: <b>{skill.id}</b>
              </div>
              <div>All book skillIds:</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {portfolioManager.getAllBooks().map((book) => (
                  <li key={book.id}>
                    <b>{book.id}</b>: {book.skillIds.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default SkillModal;
