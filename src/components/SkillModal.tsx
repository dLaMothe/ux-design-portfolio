import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Skill } from "../models/Skill";
import { PortfolioManager } from "../models/PortfolioManager";
import BookCard from "./BookCard";
import CaseStudyCard from "./CaseStudyCard";
import { useNavigate } from "react-router-dom";
import BookSmall from "./BookSmall";
import SwordSmall from "./SwordSmall";
import { motion } from "framer-motion";
import LevelUp100 from "./LevelUp100";
import Close100 from "./Close100";
import Cubing100 from "./Cubing100";
import Ux100 from "./Ux100";
import Ui100 from "./Ui100";
import Research100 from "./Research100";
import Prototyping100 from "./Prototyping100";
import Ooux100 from "./Ooux100";
import Writing100 from "./Writing100";
import Facilitation100 from "./Facilitation100";
import Drawing50 from "./Drawing50";
import backgroundTile from "../assets/other/backgroundTile.png";

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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  // Get related tools, case studies, and books
  const relatedTools = portfolioManager.getToolsForSkill(skill.id);
  const relatedCaseStudies = portfolioManager.getCaseStudiesForSkill(skill.id);
  const booksForSkill = portfolioManager
    .getAllBooks()
    .filter((book) => book.skillIds.includes(skill.id));

  const handleCaseStudyClick = (caseStudyId: string) => {
    onClose();
    window.scrollTo(0, 0);
    navigate(`/case-study/${caseStudyId}`);
  };

  const getSkillIcon = (skillTitle: string, skillCategory: string) => {
    // Map specific skills to their dedicated icons
    if (skillTitle === "Speed Cubing") {
      return <Cubing100 width={24} height={24} />;
    }
    if (skillTitle === "UX | User Experience Design") {
      return <Ux100 width={24} height={24} />;
    }
    if (skillTitle === "UI | User Interface Design") {
      return <Ui100 width={24} height={24} />;
    }
    if (skillTitle === "User Research") {
      return <Research100 width={24} height={24} />;
    }
    if (skillTitle === "Prototyping") {
      return <Prototyping100 width={24} height={24} />;
    }
    if (skillTitle === "OOUX | Object Oriented User Experience") {
      return <Ooux100 width={24} height={24} />;
    }
    if (skillTitle === "UX Writing") {
      return <Writing100 width={24} height={24} />;
    }
    if (skillTitle === "Workshop Facilitation") {
      return <Facilitation100 width={24} height={24} />;
    }
    if (skillTitle === "Drawing & Painting") {
      return <Drawing50 width={24} height={24} />;
    }

    // Fallback to category-based icons
    switch (skillCategory) {
      case "Research":
        return <Research100 width={24} height={24} />;
      case "Design":
        return <Ux100 width={24} height={24} />;
      case "Prototyping":
        return <Prototyping100 width={24} height={24} />;
      case "Testing":
        return <Research100 width={24} height={24} />;
      case "Strategy":
        return <Ooux100 width={24} height={24} />;
      case "Collaboration":
        return <Facilitation100 width={24} height={24} />;
      default:
        return <Ux100 width={24} height={24} />;
    }
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
        className="skill-modal"
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
                {getSkillIcon(skill.title, skill.category)}
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
              <Close100 />
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
                className="btn-action"
              >
                <LevelUp100 />
                <span>LEVEL UP WITH ME</span>
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
            padding: "0px 96px 0",
            gap: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Tools Section */}
          {relatedTools.length > 0 && (
            <div style={{ paddingBottom: 80 }}>
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
                  marginBottom: "24px",
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
            </div>
          )}

          {/* Skill Add-Ons Section */}
          {(booksForSkill.length > 0 || relatedCaseStudies.length > 0) && (
            <div
              className="background-tile-pattern"
              style={{
                margin: "-1px -96px 0",
                background: `url(${backgroundTile}) repeat`,
                padding: "80px 0",
              }}
            >
              {/* How to Self Improve Section */}
              {booksForSkill.length > 0 && (
                <div
                  style={{
                    padding: "0 96px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "24px",
                      marginBottom: "24px",
                    }}
                  >
                    <BookSmall width={40} height={40} />
                    <h2
                      className="skill-modal-section-title"
                      style={{ padding: 0, margin: 0 }}
                    >
                      How to Self Improve
                    </h2>
                  </div>
                  <div className="books-container">
                    <div
                      className="books-scroll-area"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      {booksForSkill.map((book, index) => (
                        <motion.div key={book.id} className="book-item">
                          <BookCard book={book} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Used In these Quests Section */}
              {relatedCaseStudies.length > 0 && (
                <div style={{ padding: "80px 96px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 24,
                      marginBottom: 24,
                    }}
                  >
                    <SwordSmall width={40} height={40} />
                    <h2
                      style={{
                        fontFamily: "'Jersey 10', sans-serif",
                        fontWeight: 400,
                        fontSize: 36,
                        lineHeight: "39px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#242628",
                        margin: 0,
                      }}
                    >
                      Used In these Quests
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(250px, 1fr))",
                      gap: 32,
                      width: "100%",
                    }}
                  >
                    {relatedCaseStudies.map((caseStudy) => (
                      <div
                        key={caseStudy.id}
                        onClick={() => handleCaseStudyClick(caseStudy.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <CaseStudyCard
                          caseStudy={caseStudy}
                          portfolioManager={portfolioManager}
                          onClick={() => handleCaseStudyClick(caseStudy.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default SkillModal;
