import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import CaseStudyCard from "./CaseStudyCard";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import { Book } from "../models/Book";
import StarSmall from "./StarSmall";
import BookSmall from "./BookSmall";
import SwordSmall from "./SwordSmall";
import BackPrevious100 from "./BackPrevious100";

interface CaseStudyDetailProps {
  portfolioManager: PortfolioManager;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  portfolioManager,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [secondGalleryImageIndex, setSecondGalleryImageIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const caseStudy = id ? portfolioManager.getCaseStudy(id) : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary flex items-center gap-2"
          >
            <BackPrevious100 />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ marginBottom: "129px" }}>
      {/* Hero Section */}
      <section
        className="case-study-hero"
        style={{
          background: caseStudy.gradient,
        }}
      >
        <div>
          <a href="/" className="custom-link">
            ← Home
          </a>
          <h1 className="case-study-title">{caseStudy.title}</h1>
        </div>
      </section>

      {/* How might we question */}
      <section className="py-8" style={{ marginTop: 129, marginBottom: 129 }}>
        <div className="container">
          <div>
            <h2
              style={{
                fontFamily: "'Jersey 10', sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "34px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#242628",
                marginBottom: "16px",
              }}
            >
              {caseStudy.hmwQuestion ||
                "How might we improve the user experience for this project?"}
            </h2>
          </div>
        </div>
      </section>

      {/* Three columns: Problem, Goal, Challenge */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3
                style={{
                  fontFamily: "'Ubuntu Sans Mono', monospace",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "34px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#242628",
                  marginBottom: "16px",
                }}
              >
                Problem
              </h3>
              <p
                style={{
                  fontFamily: "'Ubuntu Mono', monospace",
                  fontSize: "16px",
                  lineHeight: "23px",
                  color: "#242628",
                  margin: 0,
                }}
              >
                {caseStudy.problem || caseStudy.challenge}
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Ubuntu Sans Mono', monospace",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "34px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#242628",
                  marginBottom: "16px",
                }}
              >
                Goal
              </h3>
              <p
                style={{
                  fontFamily: "'Ubuntu Mono', monospace",
                  fontSize: "16px",
                  lineHeight: "23px",
                  color: "#242628",
                  margin: 0,
                }}
              >
                {caseStudy.goal || caseStudy.solution}
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Ubuntu Sans Mono', monospace",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "34px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#242628",
                  marginBottom: "16px",
                }}
              >
                Challenge
              </h3>
              <p
                style={{
                  fontFamily: "'Ubuntu Mono', monospace",
                  fontSize: "16px",
                  lineHeight: "23px",
                  color: "#242628",
                  margin: 0,
                }}
              >
                {caseStudy.challenge || caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content container for Skills */}
      <div className="container" style={{ marginTop: "129px" }}>
        <div className="max-w-4xl mx-auto">
          {/* Skills Applied Section - Prominent placement */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ marginBottom: 0 }}
          >
            <div className="mb-8">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "24px",
                }}
              >
                <StarSmall width={40} height={40} />
                <h2
                  className="text-3xl font-bold text-gray-900"
                  style={{ padding: 0, margin: 0 }}
                >
                  Skills & Expertise Applied
                </h2>
              </div>
            </div>

            {portfolioManager.getSkillsForCaseStudy(caseStudy.id).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioManager
                  .getSkillsForCaseStudy(caseStudy.id)
                  .map((skill, index) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                      showCaseStudies={false}
                      portfolioManager={portfolioManager}
                    />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-gray-500 text-lg">
                  No specific skills have been tagged for this case study yet.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section
        style={{
          backgroundColor: "#F9F9F9",
          paddingTop: "96px",
          paddingBottom: "96px",
          marginTop: "96px",
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* The Process Section */}
            {caseStudy.phases.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ marginBottom: 129 }}
              >
                <h2
                  style={{
                    fontFamily: "'Jersey 10', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "64px",
                    lineHeight: "69px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#242628",
                    marginBottom: "48px",
                  }}
                >
                  The Process
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {caseStudy.phases.map((phase, index) => (
                    <React.Fragment key={index}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          gap: "16px",
                          width: "100%",
                          padding: "24px 0",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Ubuntu Sans Mono', monospace",
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "34px",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#242628",
                            width: "400px",
                            flexShrink: 0,
                          }}
                        >
                          {phase.name}
                        </h3>
                        <div
                          style={{
                            flexGrow: 1,
                            padding: "8px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Ubuntu Mono', monospace",
                              fontSize: "16px",
                              lineHeight: "23px",
                              color: "#242628",
                              margin: 0,
                            }}
                          >
                            {phase.description}
                          </p>
                        </div>
                      </div>
                      {index < caseStudy.phases.length - 1 && (
                        <hr
                          style={{
                            width: "100%",
                            border: "none",
                            borderTop: "1px solid #242628",
                            opacity: 0.5,
                            margin: 0,
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gallery Section */}
            {caseStudy.images && caseStudy.images.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  marginBottom: "129px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  maxWidth: "1088px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "500px",
                    background: caseStudy.gradient,
                    border: "1px solid #242628",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={caseStudy.images[currentImageIndex]}
                    alt={`${caseStudy.title} gallery item ${
                      currentImageIndex + 1
                    }`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </div>

                {/* Controls */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    height: "24px",
                  }}
                >
                  {/* Left Arrow */}
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev > 0 ? prev - 1 : caseStudy.images.length - 1
                      )
                    }
                    aria-label="Previous image"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BackPrevious100 />
                  </button>

                  {/* Dots */}
                  {caseStudy.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      style={{
                        width: "8px",
                        height: "8px",
                        background:
                          currentImageIndex === index
                            ? "#242628"
                            : "rgba(36, 38, 40, 0.3)",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        borderRadius: "0px",
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}

                  {/* Right Arrow */}
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev < caseStudy.images.length - 1 ? prev + 1 : 0
                      )
                    }
                    aria-label="Next image"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ChevronRight size={24} color="#242628" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Learnings & Decisions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: "48px",
                width: "100%",
                maxWidth: "1088px",
                margin: "0 auto 129px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Jersey 10', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "64px",
                  lineHeight: "69px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#242628",
                  textAlign: "left",
                }}
              >
                Learnings & Decisions
              </h2>

              {caseStudy.learningsAndDecisions &&
              caseStudy.learningsAndDecisions.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "48px 48px",
                    width: "100%",
                  }}
                >
                  {caseStudy.learningsAndDecisions.map((learning, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Ubuntu Sans Mono', monospace",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#242628",
                        }}
                      >
                        {learning.title}
                      </h3>
                      <div
                        style={{
                          flexGrow: 1,
                          padding: "8px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Ubuntu Mono', monospace",
                            fontSize: "16px",
                            lineHeight: "23px",
                            color: "#242628",
                            margin: 0,
                          }}
                        >
                          {learning.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    padding: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Ubuntu Mono', monospace",
                      fontSize: "16px",
                      lineHeight: "23px",
                      color: "#242628",
                      margin: 0,
                    }}
                  >
                    {caseStudy.learnings ||
                      "No learnings and decisions have been documented for this case study yet."}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Second Gallery Section */}
            {caseStudy.images2 && caseStudy.images2.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  marginBottom: "129px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  maxWidth: "1088px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "500px",
                    background: caseStudy.gradient,
                    border: "1px solid #242628",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={caseStudy.images2[secondGalleryImageIndex]}
                    alt={`${caseStudy.title} gallery item ${
                      secondGalleryImageIndex + 1
                    }`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </div>

                {/* Controls */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    height: "24px",
                  }}
                >
                  {/* Left Arrow */}
                  <button
                    onClick={() =>
                      setSecondGalleryImageIndex((prev) =>
                        prev > 0 ? prev - 1 : caseStudy.images2.length - 1
                      )
                    }
                    aria-label="Previous image"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BackPrevious100 />
                  </button>

                  {/* Dots */}
                  {caseStudy.images2.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSecondGalleryImageIndex(index)}
                      style={{
                        width: "8px",
                        height: "8px",
                        background:
                          secondGalleryImageIndex === index
                            ? "#242628"
                            : "rgba(36, 38, 40, 0.3)",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        borderRadius: "0px",
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}

                  {/* Right Arrow */}
                  <button
                    onClick={() =>
                      setSecondGalleryImageIndex((prev) =>
                        prev < caseStudy.images2.length - 1 ? prev + 1 : 0
                      )
                    }
                    aria-label="Next image"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ChevronRight size={24} color="#242628" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* User Feedback Section */}
            {caseStudy.userFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  width: "100%",
                  maxWidth: "1088px",
                  margin: "0 auto 129px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Ubuntu Sans Mono', monospace",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "34px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#242628",
                    marginBottom: "16px",
                  }}
                >
                  User Feedback
                </h3>
                <div style={{ padding: "8px" }}>
                  <p
                    style={{
                      fontFamily: "'Ubuntu Mono', monospace",
                      fontSize: "16px",
                      lineHeight: "23px",
                      color: "#242628",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    "{caseStudy.userFeedback}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* Lesson Learned and Fun Fact Section */}
            {(caseStudy.lessonLearned || caseStudy.funFact) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  width: "100%",
                  maxWidth: "1088px",
                  margin: "0 auto",
                }}
              >
                {caseStudy.lessonLearned && (
                  <div style={{ width: "100%" }}>
                    <h3
                      style={{
                        fontFamily: "'Ubuntu Sans Mono', monospace",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "34px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#242628",
                        marginBottom: "16px",
                      }}
                    >
                      Lesson Learned
                    </h3>
                    <div style={{ padding: "8px" }}>
                      <p
                        style={{
                          fontFamily: "'Ubuntu Mono', monospace",
                          fontSize: "16px",
                          lineHeight: "23px",
                          color: "#242628",
                          margin: 0,
                        }}
                      >
                        {caseStudy.lessonLearned}
                      </p>
                    </div>
                  </div>
                )}
                {caseStudy.funFact && (
                  <div style={{ width: "100%" }}>
                    <div style={{ padding: "8px" }}>
                      <p
                        style={{
                          fontFamily: "'Ubuntu Mono', monospace",
                          fontSize: "16px",
                          lineHeight: "23px",
                          color: "#242628",
                          margin: 0,
                        }}
                      >
                        <strong
                          style={{
                            fontFamily: "'Ubuntu Sans Mono', monospace",
                            fontWeight: 700,
                          }}
                        >
                          Fun Fact:{" "}
                        </strong>
                        {caseStudy.funFact}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* These came in helpful section */}
          {portfolioManager.getAllBooks().filter((book) => {
            // Show books that are directly related to this case study
            return book.caseStudyIds.includes(caseStudy.id);
          }).length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ marginTop: "96px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "24px",
                  marginBottom: "32px",
                }}
              >
                <BookSmall width={40} height={40} />
                <h2
                  className="text-3xl font-bold text-gray-900"
                  style={{ padding: 0, margin: 0 }}
                >
                  These came in helpful
                </h2>
              </div>
              <div className="overflow-x-auto w-full pb-4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 24,
                    minWidth: 1200,
                    alignItems: "stretch",
                  }}
                >
                  {portfolioManager
                    .getAllBooks()
                    .filter((book) => {
                      // Show books that are directly related to this case study
                      return book.caseStudyIds.includes(caseStudy.id);
                    })
                    .map((book, index) => (
                      <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="flex-shrink-0"
                        style={{
                          width: 174,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "stretch",
                        }}
                      >
                        <BookCard
                          book={book}
                          onClick={() => setSelectedBook(book)}
                        />
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Explore more Quests section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              gap: 24,
              position: "relative",
              width: "100%",
              maxWidth: 1200,
              margin: "0 auto",
              height: "fit-content",
              marginTop: "129px",
            }}
          >
            {/* Header Section with Icon and Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 0,
                gap: 24,
                width: "100%",
                maxWidth: 1200,
                flex: "none",
                order: 0,
                alignSelf: "stretch",
                flexGrow: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <SwordSmall width={40} height={40} />
              </div>

              {/* Title */}
              <h2
                className="text-3xl font-bold text-gray-900"
                style={{ padding: 0, margin: 0 }}
              >
                Explore more Quests
              </h2>
            </div>

            {/* Grid Container */}
            <div className="case-study-grid">
              {portfolioManager
                .getAllCaseStudies()
                .filter((cs) => cs.id !== caseStudy.id)
                .slice(0, 5) // Limit to 5 cards as per the layout
                .map((cs, index) => (
                  <div
                    key={cs.id}
                    style={{
                      width: "100%",
                    }}
                  >
                    <CaseStudyCard
                      caseStudy={cs}
                      portfolioManager={portfolioManager}
                      onClick={() => {
                        navigate(`/case-study/${cs.id}`);
                      }}
                      index={index}
                    />
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          portfolioManager={portfolioManager}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default CaseStudyDetail;
