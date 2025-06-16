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
import {
  Achievement,
  AchievementType,
  AchievementLevel,
} from "./models/Achievement";

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
          AchievementType[achievementData.type as keyof typeof AchievementType],
          AchievementLevel[
            achievementData.level as keyof typeof AchievementLevel
          ],
          achievementData.issuer,
          new Date(achievementData.dateEarned),
          expirationDate,
          achievementData.certificateUrl,
          [], // skills
          [], // relatedProjects
          [] // evidence
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
                    <Hero />
                    <section id="my-values" className="py-16">
                      <div className="container">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                          My values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                              Learning from Users
                            </h3>
                            <p className="text-gray-600 text-base text-center md:text-left">
                              I believe the best design insights come from real
                              users. I regularly conduct interviews, usability
                              tests, and field studies to understand their
                              needs, pain points, and behaviors. Empathy and
                              curiosity drive my process.
                            </p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                              Learning from Peers
                            </h3>
                            <p className="text-gray-600 text-base text-center md:text-left">
                              Collaboration is at the heart of my work. I value
                              feedback, design critiques, and cross-functional
                              teamwork. Sharing knowledge and learning from
                              others helps me grow and deliver better solutions.
                            </p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                              Learning from Media
                            </h3>
                            <p className="text-gray-600 text-base text-center md:text-left">
                              I stay inspired and informed by reading books,
                              listening to podcasts, and following thought
                              leaders in design and technology. Continuous
                              learning keeps my skills sharp and my perspective
                              fresh.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="case-studies">
                      <CaseStudies portfolioManager={portfolioManager} />
                    </section>
                    <section id="skills">
                      <Skills portfolioManager={portfolioManager} />
                    </section>
                    <section id="books">
                      <Books portfolioManager={portfolioManager} />
                    </section>
                    <section id="achievements">
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
