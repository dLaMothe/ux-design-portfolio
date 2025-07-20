import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import CaseStudyHeroTransition from "./CaseStudyHeroTransition";
import ProjectCard from "./ProjectCard";

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
  const [direction, setDirection] = useState(0);
  const [direction2, setDirection2] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const caseStudy = id ? portfolioManager.getCaseStudy(id) : null;

  // Define the desired order of case studies
  const caseStudyOrder = [
    "effortless-onboarding-with-a-personalised-reward",
    "a-filter-for-every-yogi",
    "custom-lists-for-self-organisation",
    "easy-ordering-for-every-diet",
    "a-design-system-for-all-teams",
    "oouxing-my-portfolio",
  ];

  // Add animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number, isSecondGallery: boolean = false) => {
    if (!caseStudy) return;

    if (isSecondGallery && caseStudy.images2) {
      const nextIndex = secondGalleryImageIndex + newDirection;
      if (nextIndex < 0 || nextIndex >= caseStudy.images2.length) return;

      setDirection2(newDirection);
      setSecondGalleryImageIndex(nextIndex);
    } else if (caseStudy.images) {
      const nextIndex = currentImageIndex + newDirection;
      if (nextIndex < 0 || nextIndex >= caseStudy.images.length) return;

      setDirection(newDirection);
      setCurrentImageIndex(nextIndex);
    }
  };

  // If case study not found, redirect to home
  useEffect(() => {
    if (!caseStudy) {
      navigate("..");
    }
  }, [caseStudy, navigate]);

  if (!caseStudy) {
    return null;
  }

  return (
    <div
      className="min-h-screen case-study-detail"
      style={{ marginBottom: "129px" }}
    >
      {/* Hero Section */}
      <section
        className="case-study-hero"
        style={{
          background: caseStudy.gradient,
          position: "relative",
        }}
      >
        <div className="max-w-4xl mx-auto" style={{ width: "100%" }}>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("..");
            }}
            href=".."
            className="custom-link"
            style={{
              display: "inline-block",
              marginBottom: "32px",
              cursor: "pointer",
            }}
          >
            ← Home
          </a>
          <h1 className="case-study-title">{caseStudy.title}</h1>
        </div>
        <CaseStudyHeroTransition caseStudy={caseStudy} />
      </section>

      {/* How might we question and Problem/Goal/Challenge sections - hide for checkout case study */}
      {caseStudy.id !== "improving-marketplace-checkout-experience" && (
        <>
          {/* How might we question */}
          <section
            className="py-8"
            style={{ marginTop: 129, marginBottom: 129 }}
          >
            <div className="container">
              <div className="max-w-4xl mx-auto">
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
              <div className="max-w-4xl mx-auto">
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
            </div>
          </section>
        </>
      )}

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
          paddingTop: "96px",
          paddingBottom: "96px",
          marginTop: "96px",
        }}
        className="background-tile-pattern"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* The Process Section */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" && (
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
                          gap: "48px",
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
                            padding: "24px",
                            backgroundColor: "#EFEFEF",
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

            {/* The Projects Section - Only for Checkout Case Study */}
            {caseStudy.id === "improving-marketplace-checkout-experience" && (
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
                  The Projects
                </h2>
                <ProjectCard caseStudyId={caseStudy.id} />
              </motion.div>
            )}

            {/* Gallery Section - Hide for checkout case study */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" &&
              caseStudy.images &&
              caseStudy.images.length > 0 && (
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
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        key={currentImageIndex}
                        src={caseStudy.images[currentImageIndex]}
                        alt={`${caseStudy.title} gallery item ${
                          currentImageIndex + 1
                        }`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "bottom",
                          position: "absolute",
                        }}
                      />
                    </AnimatePresence>
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
                      onClick={() => paginate(-1)}
                      aria-label="Previous image"
                      disabled={currentImageIndex === 0}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: currentImageIndex === 0 ? "default" : "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        opacity: currentImageIndex === 0 ? 0.3 : 1,
                      }}
                    >
                      <BackPrevious100 />
                    </button>

                    {/* Dots */}
                    {caseStudy.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const newDirection =
                            index > currentImageIndex ? 1 : -1;
                          setDirection(newDirection);
                          setCurrentImageIndex(index);
                        }}
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
                      onClick={() => paginate(1)}
                      aria-label="Next image"
                      disabled={
                        currentImageIndex === caseStudy.images.length - 1
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor:
                          currentImageIndex === caseStudy.images.length - 1
                            ? "default"
                            : "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        opacity:
                          currentImageIndex === caseStudy.images.length - 1
                            ? 0.3
                            : 1,
                        transform: "rotate(180deg)",
                      }}
                    >
                      <BackPrevious100 />
                    </button>
                  </div>
                </motion.div>
              )}

            {/* Learnings & Decisions Section - Hide for checkout case study */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" && (
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
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(400px, 1fr))",
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
                            padding: "24px",
                            backgroundColor: "#EFEFEF",
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
                      padding: "24px",
                      backgroundColor: "#EFEFEF",
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
            )}

            {/* Second Gallery Section - Hide for checkout case study */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" &&
              caseStudy.images2 &&
              caseStudy.images2.length > 0 && (
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
                    <AnimatePresence initial={false} custom={direction2}>
                      <motion.img
                        key={secondGalleryImageIndex}
                        src={caseStudy.images2[secondGalleryImageIndex]}
                        alt={`${caseStudy.title} gallery item ${
                          secondGalleryImageIndex + 1
                        }`}
                        custom={direction2}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1, true);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1, true);
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "bottom",
                          position: "absolute",
                        }}
                      />
                    </AnimatePresence>
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
                      onClick={() => paginate(-1, true)}
                      aria-label="Previous image"
                      disabled={secondGalleryImageIndex === 0}
                      style={{
                        background: "none",
                        border: "none",
                        cursor:
                          secondGalleryImageIndex === 0 ? "default" : "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        opacity: secondGalleryImageIndex === 0 ? 0.3 : 1,
                      }}
                    >
                      <BackPrevious100 />
                    </button>

                    {/* Dots */}
                    {caseStudy.images2.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const newDirection =
                            index > secondGalleryImageIndex ? 1 : -1;
                          setDirection2(newDirection);
                          setSecondGalleryImageIndex(index);
                        }}
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
                      onClick={() => paginate(1, true)}
                      aria-label="Next image"
                      disabled={
                        secondGalleryImageIndex === caseStudy.images2.length - 1
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor:
                          secondGalleryImageIndex ===
                          caseStudy.images2.length - 1
                            ? "default"
                            : "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        opacity:
                          secondGalleryImageIndex ===
                          caseStudy.images2.length - 1
                            ? 0.3
                            : 1,
                        transform: "rotate(180deg)",
                      }}
                    >
                      <BackPrevious100 />
                    </button>
                  </div>
                </motion.div>
              )}

            {/* User Feedback Section - Hide for checkout case study */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" &&
              caseStudy.userFeedback && (
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
                  <div
                    style={{
                      padding: "24px",
                      backgroundColor: "#EFEFEF",
                    }}
                  >
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

            {/* Lesson Learned and Fun Fact Section - Hide for checkout case study */}
            {caseStudy.id !== "improving-marketplace-checkout-experience" &&
              (caseStudy.lessonLearned || caseStudy.funFact) && (
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
                      <div
                        style={{
                          padding: "24px",
                          backgroundColor: "#EFEFEF",
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
                          {caseStudy.lessonLearned}
                        </p>
                      </div>
                    </div>
                  )}
                  {caseStudy.funFact && (
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
                        Fun Fact
                      </h3>
                      <div
                        style={{
                          padding: "24px",
                          backgroundColor: "#EFEFEF",
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
              style={{
                marginTop: "96px",
                overflow: "visible",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "24px",
                  marginBottom: "32px",
                  overflow: "visible",
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
              <div style={{ overflow: "visible", position: "relative" }}>
                <div className="books-container">
                  <div className="books-scroll-area">
                    {portfolioManager
                      .getAllBooks()
                      .filter((book) => {
                        // Show books that are directly related to this case study
                        return book.caseStudyIds.includes(caseStudy.id);
                      })
                      .map((book, index) => (
                        <motion.div key={book.id} className="book-item">
                          <BookCard
                            book={book}
                            onClick={() => setSelectedBook(book)}
                          />
                        </motion.div>
                      ))}
                  </div>
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
                .sort((a, b) => {
                  const indexA = caseStudyOrder.indexOf(a.id);
                  const indexB = caseStudyOrder.indexOf(b.id);
                  return indexA - indexB;
                })
                .filter((cs) => cs.id !== caseStudy.id)
                .slice(0, 6) // Show up to 6 case studies
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
