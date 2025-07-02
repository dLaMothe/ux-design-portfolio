import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

// Import our models and manager
import { PortfolioManager } from "./models/PortfolioManager";
import { CaseStudy } from "./models/CaseStudy";
import { Skill, SkillLevel, SkillCategory } from "./models/Skill";
import { Tool, ToolCategory, ProficiencyLevel } from "./models/Tool";
import { Book } from "./models/Book";
import { Achievement } from "./models/Achievement";
import { getGradientByCaseStudyId } from "./utils/gradients";

// Import components
import Hero from "./components/Hero";
import Home from "./components/Home";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./components/CaseStudyDetail";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Books from "./components/Books";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Footer from "./components/Footer";
import { books } from "./data/books";
import skillsData from "./data/skills.json";
import toolsData from "./data/tools.json";
import achievementsData from "./data/achievements.json";
import BookModal from "./components/BookModal";
import SkillModal from "./components/SkillModal";
import AchievementModal from "./components/AchievementModal";
import caseStudiesData from "./data/caseStudies.json";

// Case Study Preview Images
import aDesignSystemForAllTeams from "./assets/caseStudy/preview/a-design-system-for-all-teams.png";
import aFilterForEveryYogi from "./assets/caseStudy/preview/a-filter-for-every-yogi.png";
import customListsForSelfOrganisation from "./assets/caseStudy/preview/custom-lists-for-self-organisation.png";
import easyOrderingForEveryDiet from "./assets/caseStudy/preview/easy-ordering-for-every-diet.png";
import effortlessOnboardingWithAPersonalisedReward from "./assets/caseStudy/preview/effortless-onboarding-with-a-personalised-reward.png";
import oouxingMyPortfolio from "./assets/caseStudy/preview/oouxing-my-portfolio.png";

// Case Study Gallery Images
import galleryADesignSystemForAllTeams1 from "./assets/caseStudy/gallary1/a-design-system-for-all-teams_01.png";
import galleryADesignSystemForAllTeams2 from "./assets/caseStudy/gallary1/a-design-system-for-all-teams_02.png";
import galleryAFilterForEveryYogi1 from "./assets/caseStudy/gallary1/a-filter-for-every-yogi_01.png";
import galleryAFilterForEveryYogi2 from "./assets/caseStudy/gallary1/a-filter-for-every-yogi_02.png";
import galleryCustomListsForSelfOrganisation1 from "./assets/caseStudy/gallary1/custom-lists-for-self-organisation_01.png";
import galleryEasyOrderingForEveryDiet1 from "./assets/caseStudy/gallary1/easy-ordering-for-every-diet_01.png";
import galleryEasyOrderingForEveryDiet2 from "./assets/caseStudy/gallary1/easy-ordering-for-every-diet_02.png";
import galleryEffortlessOnboardingWithAPersonalisedReward1 from "./assets/caseStudy/gallary1/effortless-onboarding-with-a-personalised-reward_01.png";
import galleryEffortlessOnboardingWithAPersonalisedReward2 from "./assets/caseStudy/gallary1/effortless-onboarding-with-a-personalised-reward_02.png";
import galleryOouxingMyPortfolio1 from "./assets/caseStudy/gallary1/oouxing-my-portfolio_01.png";
import galleryOouxingMyPortfolio2 from "./assets/caseStudy/gallary1/oouxing-my-portfolio_02.png";

// Case Study Gallery 2 Images
import galleryAFilterForEveryYogi3 from "./assets/caseStudy/gallary2/a-filter-for-every-yogi_03.png";
import galleryAFilterForEveryYogi4 from "./assets/caseStudy/gallary2/a-filter-for-every-yogi_04.png";
import galleryCustomListsForSelfOrganisation3 from "./assets/caseStudy/gallary2/custom-lists-for-self-organisation_03.png";
import galleryCustomListsForSelfOrganisation4 from "./assets/caseStudy/gallary2/custom-lists-for-self-organisation_04.png";
import galleryEasyOrderingForEveryDiet3 from "./assets/caseStudy/gallary2/easy-ordering-for-every-diet_03.png";
import galleryEasyOrderingForEveryDiet4 from "./assets/caseStudy/gallary2/easy-ordering-for-every-diet_04.png";
import galleryEasyOrderingForEveryDiet5 from "./assets/caseStudy/gallary2/easy-ordering-for-every-diet_05.png";
import galleryEffortlessOnboardingWithAPersonalisedReward3 from "./assets/caseStudy/gallary2/effortless-onboarding-with-a-personalised-reward_03.png";
import galleryEffortlessOnboardingWithAPersonalisedReward4 from "./assets/caseStudy/gallary2/effortless-onboarding-with-a-personalised-reward_04.png";
import galleryOouxingMyPortfolio3 from "./assets/caseStudy/gallary2/oouxing-my-portfolio_03.png";
import galleryOouxingMyPortfolio4 from "./assets/caseStudy/gallary2/oouxing-my-portfolio_04.png";
import galleryOouxingMyPortfolio5 from "./assets/caseStudy/gallary2/oouxing-my-portfolio_05.png";
import galleryOouxingMyPortfolio6 from "./assets/caseStudy/gallary2/oouxing-my-portfolio_06.png";
import galleryOouxingMyPortfolio7 from "./assets/caseStudy/gallary2/oouxing-my-portfolio_07.png";

// Achievement Images
import achievementHowToUseFocusState from "./assets/achievements/How to use the focus state to improve your TV App.png";
import achievementCompassForPageLayouts from "./assets/achievements/A compass for page layouts.png";
import achievementDesignSprintMasterclass from "./assets/achievements/Design Sprint Masterclass Certificate.png";
import achievementScrumProductOwner from "./assets/achievements/Scrum Product Owner Certificate.png";
import achievementOouxerOfTheMonth from "./assets/achievements/OOUXer of the Month_ May 2025.png";

const caseStudyImages: { [key: string]: string } = {
  "a-design-system-for-all-teams": aDesignSystemForAllTeams,
  "a-filter-for-every-yogi": aFilterForEveryYogi,
  "custom-lists-for-self-organisation": customListsForSelfOrganisation,
  "easy-ordering-for-every-diet": easyOrderingForEveryDiet,
  "effortless-onboarding-with-a-personalised-reward":
    effortlessOnboardingWithAPersonalisedReward,
  "oouxing-my-portfolio": oouxingMyPortfolio,
};

const achievementImages: { [key: string]: string } = {
  ach1: achievementHowToUseFocusState,
  ach2: achievementCompassForPageLayouts,
  ach3: achievementDesignSprintMasterclass,
  ach4: achievementScrumProductOwner,
  ach5: achievementOouxerOfTheMonth,
};

const caseStudyGalleries: { [key: string]: string[] } = {
  "a-design-system-for-all-teams": [
    galleryADesignSystemForAllTeams1,
    galleryADesignSystemForAllTeams2,
  ],
  "a-filter-for-every-yogi": [
    galleryAFilterForEveryYogi1,
    galleryAFilterForEveryYogi2,
  ],
  "custom-lists-for-self-organisation": [
    galleryCustomListsForSelfOrganisation1,
  ],
  "easy-ordering-for-every-diet": [
    galleryEasyOrderingForEveryDiet1,
    galleryEasyOrderingForEveryDiet2,
  ],
  "effortless-onboarding-with-a-personalised-reward": [
    galleryEffortlessOnboardingWithAPersonalisedReward1,
    galleryEffortlessOnboardingWithAPersonalisedReward2,
  ],
  "oouxing-my-portfolio": [
    galleryOouxingMyPortfolio1,
    galleryOouxingMyPortfolio2,
  ],
};

const caseStudyGalleries2: { [key: string]: string[] } = {
  "a-filter-for-every-yogi": [
    galleryAFilterForEveryYogi3,
    galleryAFilterForEveryYogi4,
  ],
  "custom-lists-for-self-organisation": [
    galleryCustomListsForSelfOrganisation3,
    galleryCustomListsForSelfOrganisation4,
  ],
  "easy-ordering-for-every-diet": [
    galleryEasyOrderingForEveryDiet3,
    galleryEasyOrderingForEveryDiet4,
    galleryEasyOrderingForEveryDiet5,
  ],
  "effortless-onboarding-with-a-personalised-reward": [
    galleryEffortlessOnboardingWithAPersonalisedReward3,
    galleryEffortlessOnboardingWithAPersonalisedReward4,
  ],
  "oouxing-my-portfolio": [
    galleryOouxingMyPortfolio3,
    galleryOouxingMyPortfolio4,
    galleryOouxingMyPortfolio5,
    galleryOouxingMyPortfolio6,
    galleryOouxingMyPortfolio7,
  ],
};

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
export const PixelHeart: React.FC = () => (
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

const MainObjects: React.FC<{ portfolioManager: PortfolioManager }> = ({
  portfolioManager,
}) => {
  return (
    <div
      className="background-tile-pattern"
      style={{ paddingTop: 160, paddingBottom: 160 }}
    >
      <div>
        <CaseStudies portfolioManager={portfolioManager} />
      </div>
      <div style={{ marginTop: 160 }}>
        <Skills portfolioManager={portfolioManager} />
      </div>
    </div>
  );
};

function App() {
  const [portfolioManager] = useState(() => new PortfolioManager());
  const [isLoading, setIsLoading] = useState(true);

  const initializePortfolioData = useCallback(() => {
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
          achievementImages[achievementData.id] || achievementData.badgeUrl,
          achievementImages[achievementData.id] ||
            achievementData.certificateUrl,
          achievementData.publicUrl,
          expirationDate
        )
      );
    });

    // Case Studies from JSON
    caseStudiesData.forEach((cs) => {
      portfolioManager.addCaseStudy(
        new CaseStudy(
          cs.id,
          cs.title,
          "", // description
          "", // client
          cs.duration,
          "", // role
          cs.team.split(", "),
          cs.challenge,
          "", // solution
          "", // outcome
          caseStudyImages[cs.id] ?? "",
          cs.toolIds,
          cs.skillIds,
          cs.phases,
          caseStudyGalleries[cs.id] ?? [], // images
          caseStudyGalleries2[cs.id] ?? [], // images2
          "", // learnings
          getGradientByCaseStudyId(cs.id),
          cs.hmwQuestion,
          cs.problem,
          cs.goal,
          cs.process,
          cs.learningsAndDecisions,
          cs.userFeedback,
          cs.funFact,
          cs.lessonLearned
        )
      );
    });
  }, [portfolioManager]);

  useEffect(() => {
    // Initialize with sample data
    initializePortfolioData();
    setIsLoading(false);
  }, [initializePortfolioData]);

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
    <Router basename="/ux-design-portfolio">
      <ModalProvider portfolioManager={portfolioManager}>
        <div className="app">
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="home" />} />
              <Route
                path="home"
                element={<Home portfolioManager={portfolioManager} />}
              >
                <Route
                  index
                  element={<MainObjects portfolioManager={portfolioManager} />}
                />
              </Route>
              <Route path="about" element={<About />} />
              <Route
                path="case-study/:id"
                element={
                  <CaseStudyDetail portfolioManager={portfolioManager} />
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
