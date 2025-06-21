import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

// Import our models and manager
import { PortfolioManager, DateSortStrategy } from "./models/PortfolioManager";
import { CaseStudy } from "./models/CaseStudy";
import { Skill, SkillLevel, SkillCategory } from "./models/Skill";
import { Tool, ToolCategory, ProficiencyLevel } from "./models/Tool";
import { Book, BookCategory, ReadingStatus } from "./models/Book";
import { Achievement, AchievementLevel } from "./models/Achievement";

// Import components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./components/CaseStudyDetail";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Books from "./components/Books";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Contact from "./components/Contact";
import { books } from "./data/books";
import skillsData from "./data/skills.json";
import toolsData from "./data/tools.json";
import achievementsData from "./data/achievements.json";
import BookModal from "./components/BookModal";
import SkillModal from "./components/SkillModal";
import AchievementModal from "./components/AchievementModal";
import caseStudiesData from "./data/caseStudies.json";

// Modal Context
interface ModalContextType {
  openBookModal: (book: Book) => void;
  openSkillModal: (skill: Skill) => void;
  openAchievementModal: (achievement: Achievement) => void;
  closeModal: () => void;
  modalType: "book" | "skill" | "achievement" | null;
  modalData: Book | Skill | Achievement | null;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};

const ModalProvider: React.FC<{
  children: React.ReactNode;
  portfolioManager: PortfolioManager;
}> = ({ children, portfolioManager }) => {
  const [modalType, setModalType] = React.useState<
    "book" | "skill" | "achievement" | null
  >(null);
  const [modalData, setModalData] = React.useState<
    Book | Skill | Achievement | null
  >(null);

  const openBookModal = (book: Book) => {
    setModalType("book");
    setModalData(book);
  };
  const openSkillModal = (skill: Skill) => {
    setModalType("skill");
    setModalData(skill);
  };
  const openAchievementModal = (achievement: Achievement) => {
    setModalType("achievement");
    setModalData(achievement);
  };
  const closeModal = () => {
    setModalType(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openBookModal,
        openSkillModal,
        openAchievementModal,
        closeModal,
        modalType,
        modalData,
      }}
    >
      {children}
      {modalType === "book" && modalData && (
        <BookModal
          book={modalData as Book}
          portfolioManager={portfolioManager}
          onClose={closeModal}
        />
      )}
      {modalType === "skill" && modalData && (
        <SkillModal
          skill={modalData as Skill}
          portfolioManager={portfolioManager}
          onClose={closeModal}
          color={(modalData as Skill).customColor || "#EFEFEF"}
        />
      )}
      {modalType === "achievement" && modalData && (
        <AchievementModal
          achievement={modalData as Achievement}
          onClose={closeModal}
        />
      )}
    </ModalContext.Provider>
  );
};

// Replace PixelHeart SVG component
const PixelHeart: React.FC = () => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <g clipPath="url(#clip0_465_59908)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4H12V8H14V6H16V4H18V2H22V10H20V12H18V14H16V16H14V18H12V16H8V14H6V12H4V10H2V4H4V2H10V4ZM6 6H4V8H6V6H8V4H6V6Z"
        fill="#B9B3FF"
      />
      <path d="M6 8H4V6H6V8Z" fill="white" />
      <path d="M8 6H6V4H8V6Z" fill="white" />
      <path d="M14 20H12V18H14V20Z" fill="#7B72E2" />
      <path d="M12 18H10V16H12V18Z" fill="#7B72E2" />
      <path d="M16 18H14V16H16V18Z" fill="#7B72E2" />
      <path d="M18 16H16V14H18V16Z" fill="#7B72E2" />
      <path d="M20 14H18V12H20V14Z" fill="#7B72E2" />
      <path d="M22 12H20V10H22V12Z" fill="#7B72E2" />
      <path d="M24 10H22V4H24V10Z" fill="#7B72E2" />
      <path d="M14 8H12V6H14V8Z" fill="#7B72E2" />
      <path d="M16 6H14V4H16V6Z" fill="#7B72E2" />
      <path d="M18 4H16V2H18V4Z" fill="#7B72E2" />
      <path d="M14 22H12V20H14V22Z" fill="#242628" />
      <path d="M12 20H10V18H12V20Z" fill="#242628" />
      <path d="M16 20H14V18H16V20Z" fill="#242628" />
      <path d="M10 18H8V16H10V18Z" fill="#242628" />
      <path d="M18 18H16V16H18V18Z" fill="#242628" />
      <path d="M8 16H6V14H8V16Z" fill="#242628" />
      <path d="M20 16H18V14H20V16Z" fill="#242628" />
      <path d="M6 14H4V12H6V14Z" fill="#242628" />
      <path d="M22 14H20V12H22V14Z" fill="#242628" />
      <path d="M4 12H2V10H4V12Z" fill="#242628" />
      <path d="M24 12H22V10H24V12Z" fill="#242628" />
      <path d="M2 10H0V4H2V10Z" fill="#242628" />
      <path d="M26 10H24V4H26V10Z" fill="#242628" />
      <path d="M14 6H12V4H14V6Z" fill="#242628" />
      <path d="M4 4H2V2H4V4Z" fill="#242628" />
      <path d="M12 4H10V2H12V4Z" fill="#242628" />
      <path d="M16 4H14V2H16V4Z" fill="#242628" />
      <path d="M24 4H22V2H24V4Z" fill="#242628" />
      <path d="M10 2H4V0H10V2Z" fill="#242628" />
      <path d="M22 2H16V0H22V2Z" fill="#242628" />
    </g>
    <defs>
      <clipPath id="clip0_465_59908">
        <rect width="26" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function App() {
  const [portfolioManager] = useState(() => new PortfolioManager());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize with sample data
    initializePortfolioData();
    setIsLoading(false);
  }, []);

  const initializePortfolioData = () => {
    // Skills from JSON
    skillsData.forEach((skillData) => {
      portfolioManager.addSkill(
        new Skill(
          skillData.id,
          skillData.title,
          skillData.description,
          SkillLevel[skillData.level as keyof typeof SkillLevel],
          SkillCategory[skillData.category as keyof typeof SkillCategory],
          skillData.yearsOfExperience,
          skillData.certifications,
          skillData.projects,
          skillData.customColor
        )
      );
    });

    // Tools from JSON
    toolsData.forEach((toolData) => {
      const version =
        (toolData as any).version &&
        typeof (toolData as any).version === "string"
          ? (toolData as any).version
          : undefined;
      portfolioManager.addTool(
        new Tool(
          toolData.id,
          toolData.title,
          toolData.description,
          ToolCategory[toolData.category as keyof typeof ToolCategory],
          ProficiencyLevel[
            toolData.proficiency as keyof typeof ProficiencyLevel
          ],
          version,
          toolData.url ?? undefined,
          [], // usedInProjects
          [], // features
          [], // alternatives
          [], // learningResources
          toolData.skillIds
        )
      );
    });

    // Books from JSON (already handled by books.ts import)
    books.forEach((book) => portfolioManager.addBook(book));

    // Achievements from JSON
    achievementsData.forEach((achievementData) => {
      const expirationDate =
        (achievementData as any).expirationDate &&
        typeof (achievementData as any).expirationDate === "string"
          ? new Date((achievementData as any).expirationDate)
          : undefined;
      portfolioManager.addAchievement(
        new Achievement(
          achievementData.id,
          achievementData.title,
          achievementData.description,
          achievementData.type,
          new Date(achievementData.dateEarned),
          achievementData.badgeUrl,
          achievementData.certificateUrl,
          achievementData.publicUrl,
          expirationDate
        )
      );
    });

    // Case Studies from JSON
    caseStudiesData.forEach((caseStudyData) => {
      portfolioManager.addCaseStudy(
        new CaseStudy(
          caseStudyData.id,
          caseStudyData.title,
          caseStudyData.problem || "", // description
          "", // client
          caseStudyData.duration || "",
          "", // role
          Array.isArray(caseStudyData.team)
            ? caseStudyData.team
            : caseStudyData.team
            ? caseStudyData.team.split(", ")
            : [],
          caseStudyData.challenge || "",
          "", // solution - not in JSON
          "", // outcome - not in JSON
          caseStudyData.toolIds || [],
          caseStudyData.skillIds || [],
          (caseStudyData as any).phases || [], // phases
          (caseStudyData as any).images || [], // images
          caseStudyData.lessonLearned || "", // learnings
          caseStudyData.hmwQuestion,
          caseStudyData.problem,
          caseStudyData.goal,
          caseStudyData.process,
          caseStudyData.learningsAndDecisions,
          caseStudyData.userFeedback,
          caseStudyData.funFact,
          caseStudyData.lessonLearned
        )
      );
    });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <Router>
      <ModalProvider portfolioManager={portfolioManager}>
        <div className="app">
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero style={{ marginBottom: 129 }} />
                    <section
                      id="my-values"
                      className="my-values-section"
                      style={{ marginBottom: 129 }}
                    >
                      <div className="my-values-headline">My values</div>
                      <div className="my-values-row">
                        {/* Value 1 */}
                        <div className="my-values-card">
                          <div className="my-values-hearts">
                            <PixelHeart />
                          </div>
                          <div className="my-values-title">
                            Learning from Users
                          </div>
                          <div className="my-values-body">
                            Research a crucial part of the process to me and
                            listening to actual users is the best time
                            investment.
                          </div>
                        </div>
                        {/* Value 2 */}
                        <div className="my-values-card">
                          <div className="my-values-hearts">
                            <PixelHeart />
                            <PixelHeart />
                          </div>
                          <div className="my-values-title">
                            Learning from Peers
                          </div>
                          <div className="my-values-body">
                            Collaborating with my team and other experts is
                            important to me. No one knows everything.
                          </div>
                        </div>
                        {/* Value 3 */}
                        <div className="my-values-card">
                          <div className="my-values-hearts">
                            <PixelHeart />
                            <PixelHeart />
                            <PixelHeart />
                          </div>
                          <div className="my-values-title">
                            Learning from Media
                          </div>
                          <div className="my-values-body">
                            Books and podcasts inspire and excite me to try out
                            new things. It feels wrong to not have a book I'm
                            currently reading.
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="case-studies" style={{ marginBottom: 129 }}>
                      <CaseStudies portfolioManager={portfolioManager} />
                    </section>
                    <section id="skills" style={{ marginBottom: 129 }}>
                      <Skills portfolioManager={portfolioManager} />
                    </section>
                    <section id="books" style={{ marginBottom: 129 }}>
                      <Books portfolioManager={portfolioManager} />
                    </section>
                    <section id="achievements" style={{ marginBottom: 129 }}>
                      <Achievements portfolioManager={portfolioManager} />
                    </section>
                    <section id="contact">
                      <Contact />
                    </section>
                  </>
                }
              />
              <Route
                path="/case-studies"
                element={<CaseStudies portfolioManager={portfolioManager} />}
              />
              <Route
                path="/case-study/:id"
                element={
                  <CaseStudyDetail portfolioManager={portfolioManager} />
                }
              />
              <Route
                path="/skills"
                element={<Skills portfolioManager={portfolioManager} />}
              />
              <Route
                path="/tools"
                element={<Tools portfolioManager={portfolioManager} />}
              />
              <Route
                path="/books"
                element={<Books portfolioManager={portfolioManager} />}
              />
              <Route
                path="/achievements"
                element={<Achievements portfolioManager={portfolioManager} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
