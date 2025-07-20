import React from "react";
import { CaseStudy } from "../models/CaseStudy";
import { PortfolioManager } from "../models/PortfolioManager";
import { getSkillColor } from "./SkillCard";
import Cubing50 from "./Cubing50";
import Ux50 from "./Ux50";
import Ui50 from "./Ui50";
import Research50 from "./Research50";
import Ooux50 from "./Ooux50";
import Writing50 from "./Writing50";
import Facilitation50 from "./Facilitation50";
import Drawing50 from "./Drawing50";
import { Skill } from "../models/Skill";

// Import case study images
import improvingMarketplaceCheckout from "../assets/caseStudy/preview/improving-checkout-process.png";
import aDesignSystemForAllTeams from "../assets/caseStudy/preview/a-design-system-for-all-teams.png";
import aFilterForEveryYogi from "../assets/caseStudy/preview/a-filter-for-every-yogi.png";
import customListsForSelfOrganisation from "../assets/caseStudy/preview/custom-lists-for-self-organisation.png";
import easyOrderingForEveryDiet from "../assets/caseStudy/preview/easy-ordering-for-every-diet.png";
import effortlessOnboardingWithAPersonalisedReward from "../assets/caseStudy/preview/effortless-onboarding-with-a-personalised-reward.png";
import oouxingMyPortfolio from "../assets/caseStudy/preview/oouxing-my-portfolio.png";

const caseStudyImages: { [key: string]: string } = {
  "improving-marketplace-checkout-experience": improvingMarketplaceCheckout,
  "a-design-system-for-all-teams": aDesignSystemForAllTeams,
  "a-filter-for-every-yogi": aFilterForEveryYogi,
  "custom-lists-for-self-organisation": customListsForSelfOrganisation,
  "easy-ordering-for-every-diet": easyOrderingForEveryDiet,
  "effortless-onboarding-with-a-personalised-reward":
    effortlessOnboardingWithAPersonalisedReward,
  "oouxing-my-portfolio": oouxingMyPortfolio,
};

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  portfolioManager: PortfolioManager;
  onClick: () => void;
  index?: number;
}

function getSkillIcon50(skill: Skill) {
  const { category, title } = skill;
  if (title === "Speed Cubing") return <Cubing50 width={16} height={16} />;
  if (title === "UX | User Experience Design")
    return <Ux50 width={16} height={16} />;
  if (title === "UI | User Interface Design")
    return <Ui50 width={16} height={16} />;
  if (title === "User Research") return <Research50 width={16} height={16} />;
  if (title === "Prototyping") return <Ux50 width={16} height={16} />;
  if (title === "OOUX | Object Oriented User Experience")
    return <Ooux50 width={16} height={16} />;
  if (title === "UX Writing") return <Writing50 width={16} height={16} />;
  if (title === "Workshop Facilitation")
    return <Facilitation50 width={16} height={16} />;
  if (title === "Drawing & Painting")
    return <Drawing50 width={16} height={16} />;
  // Fallback by category
  switch (category) {
    case "Research":
      return <Research50 width={16} height={16} />;
    case "Design":
      return <Ux50 width={16} height={16} />;
    case "Prototyping":
      return <Ux50 width={16} height={16} />;
    case "Testing":
      return <Research50 width={16} height={16} />;
    case "Strategy":
      return <Ooux50 width={16} height={16} />;
    case "Collaboration":
      return <Facilitation50 width={16} height={16} />;
    default:
      return null;
  }
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  portfolioManager,
  onClick,
  index = 0,
}) => {
  const skillsUsed = portfolioManager.getSkillsForCaseStudy(caseStudy.id);

  return (
    <div onClick={onClick} className="case-study-card">
      {/* Header (optional, e.g. arrow or type) */}
      <div className="case-study-card-header">
        <span
          style={{
            fontFamily: "Ubuntu Sans Mono",
            fontSize: 24,
            fontWeight: 200,
            color: "#242628",
            width: 32,
            height: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          &rarr;
        </span>
      </div>
      {/* Picture */}
      <img
        src={caseStudyImages[caseStudy.id]}
        alt={caseStudy.title}
        className="case-study-card-image"
        style={{
          objectFit: "cover",
          background: caseStudy.gradient,
        }}
      />
      {/* Content */}
      <div className="case-study-card-content">
        {/* Title */}
        <div className="case-study-card-title">{caseStudy.title}</div>
        {/* Skills Used as tags */}
        <div className="case-study-card-skills">
          {skillsUsed.map((skill, idx) => (
            <span
              key={skill.id}
              className="case-study-card-skill"
              style={{ background: getSkillColor(skill, idx) }}
            >
              {getSkillIcon50(skill)} {skill.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
