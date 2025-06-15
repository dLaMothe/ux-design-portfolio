import React, { useState, useEffect } from "react";
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

function App() {
  const [portfolioManager] = useState(() => new PortfolioManager());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize with sample data
    initializePortfolioData();
    setIsLoading(false);
  }, []);

  const initializePortfolioData = () => {
    // User's detailed skills data
    const skills = [
      new Skill(
        "ux-user-experience-design",
        "UX | User Experience Design",
        "In 2015 I started out my career as a UX designer. I chose this profession simply because it brings me joy. I love that, as a designer, I can help people with creativity. When I try to explain what UX is (which is not that rare of an occurrence still) I like to use the metaphor of an architect. When building a house, you first need to figure out what rooms should be in it, and then make sure that visitors find a bathroom quickly they need one.",
        SkillLevel.EXPERT,
        SkillCategory.DESIGN,
        9, // Example years of experience
        [],
        [
          // Quests/case studies (to be linked by id when provided)
          // e.g. "OOUXing my Portfolio", ...
        ],
        "#53FEA6" // Custom color
      ),
      new Skill(
        "user-research",
        "User Research",
        "I always like to work very closely with researchers or take on the role myself. I see it as an  interglacial part as it is the foundation for all decisions throughout the design process. I find it very exciting to learn something new or surprising or seeing that an idea actually worked. It's the feedback loop that keeps product development going. ",
        SkillLevel.EXPERT,
        SkillCategory.RESEARCH,
        9,
        [],
        [],
        "#FCFE53" // Custom color
      ),
      new Skill(
        "prototyping",
        "Prototyping ",
        "Prototyping has been a part of my work since the beginning. This is my zen work. I love to sit down, put on some music and just build. Especially since Figma introduced basic logic to their prototyping capabilities it's been even more fun to be able to make a user test feel as realistic as possible (if needed).",
        SkillLevel.ADVANCED,
        SkillCategory.PROTOTYPING,
        9,
        [],
        [],
        "#FFB866" // Custom color
      ),
      new Skill(
        "ui-user-interface-design",
        "UI | User Interface Design",
        "I've been doing UI alongside UX since 2021. For me UI is not only making things look nice. It's about conveying specific feelings thats suits the task at hand while staying aligned with brand guidelines and design systems. It's about knowing when to be loud and bold to show the brands colors, and when to quite down and guid the users eye to let them focus on important informations. ",
        SkillLevel.ADVANCED,
        SkillCategory.DESIGN,
        3,
        [],
        [],
        "#FF91D8" // Custom color
      ),
      new Skill(
        "ooux-object-oriented-user-experience",
        "OOUX | Object Oriented User Experience",
        "OOUX is a design philosophy that respects the fact, that we think in nouns. That our mental modals form around objects. It helps me to understand users and systems more quickly and easily while also being a grate way of collaborating with other roles in the product team. I really enjoy this way of thinking and would love to work on a project that uses the entire process around!",
        SkillLevel.ADVANCED,
        SkillCategory.STRATEGY,
        2,
        [],
        [],
        "#90CBFF" // Custom color
      ),
      new Skill(
        "drawing-painting",
        "Drawing & Painting",
        "I've been drawing since I can remember. It was always integral to who I am and is one of the first things people learn about me as I like to doodle in meeting (I still pay attention, I swear).",
        SkillLevel.EXPERT,
        SkillCategory.DESIGN,
        20,
        [],
        [],
        "#DFB7FF" // Custom color
      ),
      new Skill(
        "speed-cubing",
        "Speed Cubing",
        "I picked up cubing with a rubiks cube (that thing that was popular in the 80s) when I was around 17 just to see if I can do it. Since then I've not been able to put it down again and my collection has grown to around 20. My best time is 32 sec. which is not super fast but I'm still proud of it. ",
        SkillLevel.INTERMEDIATE,
        SkillCategory.COLLABORATION,
        10,
        [],
        [],
        "#AFFF64" // Custom color
      ),
      new Skill(
        "ux-writing",
        "UX Writing",
        "As someone who is dyslexic I find it important to phrase texts in a clear and easy to understand way, as I know the struggle of overly complicated sentences. This has lead me to put more and more effort and care into the texts I write for interfaces. The impact is easily visible in user tests and always makes me smile.",
        SkillLevel.ADVANCED,
        SkillCategory.DESIGN,
        5,
        [],
        [],
        "#B9B3FF" // Custom color
      ),
      new Skill(
        "workshop-facilitation",
        "Workshop Facilitation",
        "I gathered up quite the suitcase of methods over the years if I do say so myself and appreciate a good flow of them, carefully put together to get to an outcome and output under a shared goal. I'm not the loudest person but passion helps me to get people on board either way.",
        SkillLevel.ADVANCED,
        SkillCategory.COLLABORATION,
        7,
        [],
        [],
        "#FF8688" // Custom color
      ),
    ];

    skills.forEach((skill) => portfolioManager.addSkill(skill));

    // Sample Case Studies with skills
    const caseStudy1 = new CaseStudy(
      "cs1",
      "E-commerce Redesign",
      "Complete redesign of a major e-commerce platform to improve user experience and increase conversion rates.",
      "TechCorp Inc.",
      "6 months",
      "Lead UX Designer",
      [
        "Sarah Johnson (PM)",
        "Mike Chen (Developer)",
        "Lisa Wong (UI Designer)",
      ],
      "Users were abandoning their shopping carts at a 70% rate, and the overall user experience was confusing and outdated.",
      "Conducted extensive user research, created new user flows, and designed a modern, intuitive interface with improved checkout process.",
      "Reduced cart abandonment by 45% and increased overall conversion rate by 32%. User satisfaction scores improved from 2.1 to 4.6 out of 5.",
      ["Figma", "Sketch", "InVision", "Hotjar", "Google Analytics"],
      [
        "ux-user-experience-design",
        "user-research",
        "prototyping",
        "ui-user-interface-design",
        "workshop-facilitation",
      ], // Skills used: User Research, Prototyping, Visual Design, Usability Testing, Design Strategy
      [
        {
          name: "Research & Discovery",
          description:
            "User interviews, competitive analysis, and analytics review",
          deliverables: [
            "User personas",
            "Journey maps",
            "Research findings report",
          ],
        },
        {
          name: "Design & Prototyping",
          description: "Wireframing, visual design, and interactive prototypes",
          deliverables: [
            "Wireframes",
            "High-fidelity mockups",
            "Interactive prototype",
          ],
        },
        {
          name: "Testing & Iteration",
          description: "Usability testing and design refinements",
          deliverables: ["Test results", "Design iterations", "Final designs"],
        },
      ],
      [
        "/images/ecommerce-1.jpg",
        "/images/ecommerce-2.jpg",
        "/images/ecommerce-3.jpg",
      ]
    );
    caseStudy1.liveUrl = "https://example-ecommerce.com";
    caseStudy1.prototypeUrl = "https://figma.com/proto/example";

    const caseStudy2 = new CaseStudy(
      "cs2",
      "Mobile Banking App",
      "Design of a new mobile banking application focused on simplicity and security.",
      "SecureBank",
      "8 months",
      "Senior UX Designer",
      [
        "David Kim (Product Owner)",
        "Emma Davis (iOS Developer)",
        "Carlos Rodriguez (Android Developer)",
      ],
      "Customers found existing mobile banking options complex and were concerned about security.",
      "Designed a clean, intuitive interface with biometric authentication and simplified transaction flows.",
      "App achieved 4.8-star rating in app stores and 89% user adoption rate within first 6 months.",
      ["Figma", "Principle", "Marvel", "UserTesting", "Mixpanel"],
      [
        "ux-user-experience-design",
        "drawing-painting",
        "ui-user-interface-design",
        "workshop-facilitation",
      ], // Skills used: User Research, Visual Design, Usability Testing, Stakeholder Management
      [
        {
          name: "User Research",
          description:
            "Conducted interviews with 50+ banking customers to understand pain points",
          deliverables: [
            "User personas",
            "Customer journey maps",
            "Pain point analysis",
          ],
        },
        {
          name: "Security Analysis",
          description:
            "Worked with security team to design secure yet user-friendly authentication",
          deliverables: [
            "Security requirements",
            "Authentication flow",
            "Risk assessment",
          ],
        },
        {
          name: "Design & Testing",
          description:
            "Created and tested multiple design iterations with users",
          deliverables: ["Wireframes", "Prototypes", "Usability test results"],
        },
      ],
      ["/images/banking-1.jpg", "/images/banking-2.jpg"]
    );

    portfolioManager.addCaseStudy(caseStudy1);
    portfolioManager.addCaseStudy(caseStudy2);

    // Tools data from user CSV
    const tools = [
      new Tool(
        "expert-interviews",
        "Expert Interviews ❤️",
        "To collect all that knowledge we already have ",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "crazy-8s",
        "Crazy 8s ❤️",
        "To get the creative juices flowing",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design", "workshop-facilitation"]
      ),
      new Tool(
        "lightning-demos",
        "Lightning Demos",
        "To find grate ideas to steal",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design", "workshop-facilitation"]
      ),
      new Tool(
        "affinity-mapping",
        "Affinity Mapping",
        "To clean up the sticky notes",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design", "workshop-facilitation"]
      ),
      new Tool(
        "hmw",
        "HMW",
        "To phrase a problem or opportunity in an actionable way",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "jtbd",
        "JTBD",
        "To put the users need in the center",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "journey-mapping",
        "Journey Mapping",
        "To uncover areas of opportunity",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design", "workshop-facilitation"]
      ),
      new Tool(
        "opportunity-decision-tree",
        "Opportunity decision tree ❤️",
        "To document insights and make them actionable",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design", "workshop-facilitation"]
      ),
      new Tool(
        "behavioural-psychology",
        "Behavioural Psychology",
        "To understand why people do what thez do",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "workshop-facilitation",
        "Workshop Facilitation",
        "To guide the team to a shared outcome and output",
        ToolCategory.COLLABORATION,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "wireframing",
        "Wireframing",
        "To experiment fast before deciding on a solution",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "double-diamond",
        "Double Diamond",
        "To follow it's phases during a project",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ux-user-experience-design"]
      ),
      new Tool(
        "miro",
        "Miro ❤️",
        "To collaborate and collect my thoughts",
        ToolCategory.COLLABORATION,
        ProficiencyLevel.EXPERT,
        undefined,
        "https://miro.com",
        [],
        [],
        [],
        [],
        [
          "ux-user-experience-design",
          "prototyping",
          "ooux-object-oriented-user-experience",
          "ux-writing",
          "workshop-facilitation",
        ]
      ),
      new Tool(
        "notion",
        "Notion ❤️",
        "To create content, document thoughts and plan trips",
        ToolCategory.COLLABORATION,
        ProficiencyLevel.EXPERT,
        undefined,
        "https://notion.so",
        [],
        [],
        [],
        [],
        ["ooux-object-oriented-user-experience", "ux-writing"]
      ),
      new Tool(
        "orca",
        "ORCA ❤️",
        "To use OOUX as a structured process",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ooux-object-oriented-user-experience", "workshop-facilitation"]
      ),
      new Tool(
        "figma",
        "Figma ❤️",
        "To build cool prototypes and interfaces",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        "https://figma.com",
        [],
        [],
        [],
        [],
        [
          "ux-user-experience-design",
          "prototyping",
          "ui-user-interface-design",
          "ooux-object-oriented-user-experience",
          "ux-writing",
        ]
      ),
      new Tool(
        "gestalt-principles",
        "Gestalt Principles",
        "To be intentional with visual decisions",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ui-user-interface-design"]
      ),
      new Tool(
        "mobbin",
        "Mobbin ❤️",
        "To get inspired by awesome interfaces",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        "https://mobbin.com",
        [],
        [],
        [],
        [],
        ["ui-user-interface-design"]
      ),
      new Tool(
        "sketch",
        "Sketch",
        "My past building tool of choice",
        ToolCategory.DESIGN,
        ProficiencyLevel.ADVANCED,
        undefined,
        "https://sketch.com",
        [],
        [],
        [],
        [],
        ["ui-user-interface-design"]
      ),
      new Tool(
        "abstract",
        "Abstract",
        "My past building tool of choice",
        ToolCategory.COLLABORATION,
        ProficiencyLevel.ADVANCED,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["ui-user-interface-design"]
      ),
      new Tool(
        "hotjar",
        "Hotjar ❤️",
        "To track user behaviour within systems",
        ToolCategory.ANALYTICS,
        ProficiencyLevel.INTERMEDIATE,
        undefined,
        "https://hotjar.com",
        [],
        [],
        [],
        [],
        ["user-research"]
      ),
      new Tool(
        "optimal-workshop",
        "Optimal Workshop ❤️",
        "To do user tests and evaluate them",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        "https://optimalworkshop.com",
        [],
        [],
        [],
        [],
        ["user-research"]
      ),
      new Tool(
        "rapid-usertests",
        "rapid Usertests",
        "To do user interviews and record them",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research"]
      ),
      new Tool(
        "benchmark",
        "Benchmark",
        "To learn about common patterns",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research", "workshop-facilitation"]
      ),
      new Tool(
        "user-testing",
        "User Testing",
        "To observe user behaviour",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research", "ux-writing"]
      ),
      new Tool(
        "user-interviews",
        "User Interviews",
        "To learn about users problems and needs",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research", "prototyping"]
      ),
      new Tool(
        "desk-research",
        "Desk Research",
        "To gather knowledge about a new subject",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research", "workshop-facilitation"]
      ),
      new Tool(
        "card-sorting",
        "Card Sorting ❤️",
        "To learn about the users mental model",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research"]
      ),
      new Tool(
        "tree-testing",
        "Tree Testing ❤️",
        "To verify the users mental model",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research"]
      ),
      new Tool(
        "wizard-of-oz",
        "Wizard of Oz",
        "To create a personalized experience during a test",
        ToolCategory.RESEARCH,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["user-research", "prototyping"]
      ),
      new Tool(
        "water-colors",
        "Water Colors ",
        "To get that soft and organic feeling",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["drawing-painting"]
      ),
      new Tool(
        "gouache",
        "Gouache",
        "To make it vibrant",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["drawing-painting"]
      ),
      new Tool(
        "fine-liner",
        "Fine liner",
        "To outline and give it some details",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["drawing-painting"]
      ),
      new Tool(
        "poscas",
        "Poscas",
        "To limit my color pallet",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        undefined,
        undefined,
        [],
        [],
        [],
        [],
        ["drawing-painting"]
      ),
    ];

    tools.forEach((tool) => portfolioManager.addTool(tool));

    // Sample Books
    books.forEach((book) => portfolioManager.addBook(book));

    // Real Achievements Data
    const achievements = [
      (() => {
        const a = new Achievement(
          "ach1",
          "How to use the focus state to improve your TV App",
          'After my first experience with designing for TV I was surprised and excited about the differences compared to designing for mobile or desktop. Hence I wrote down my learnings which got published under "Bootcamp".',
          AchievementType.PUBLICATION,
          AchievementLevel.INTERMEDIATE,
          "Bootcamp",
          new Date("2024-01-01")
        );
        a.badgeUrl =
          "/Achievements%201f09193d1f918004b2b4f92942c436e0/How_to_use_the_focus_state_to_improve_your_TV_App.jpg";
        a.publicUrl =
          "https://medium.com/design-bootcamp/how-to-use-the-focus-state-to-improve-your-tv-app-7cb399b89e3d";
        return a;
      })(),
      (() => {
        const a = new Achievement(
          "ach2",
          "A compass for page layouts",
          'While working on a design system, we wanted to include not only visual but also navigational guidelines. One of which got published under "UX Planet".',
          AchievementType.PUBLICATION,
          AchievementLevel.INTERMEDIATE,
          "UX Planet",
          new Date("2024-01-01")
        );
        a.badgeUrl =
          "/Achievements%201f09193d1f918004b2b4f92942c436e0/A_compass_for_page_layouts.jpg";
        a.publicUrl =
          "https://medium.com/ux-planet/a-compass-for-page-layouts-71231306b67";
        return a;
      })(),
      (() => {
        const a = new Achievement(
          "ach3",
          "Design Sprint Masterclass Certificate",
          "I am a big fan of the Design Sprint by Jake Knapp even though I like to bend the ruled. But I can do that now with confidence after learning the rules in their masterclass.",
          AchievementType.CERTIFICATION,
          AchievementLevel.INTERMEDIATE,
          "Design Sprint Masterclass",
          new Date("2024-01-01")
        );
        a.certificateUrl =
          "/Achievements%201f09193d1f918004b2b4f92942c436e0/Certificate-Carina_Lea_Meyer.png";
        return a;
      })(),
      (() => {
        const a = new Achievement(
          "ach4",
          "Scrum Product Owner Certificate",
          "Though I never worked as a product owner, this class gave me a good understanding about working in a team with diverse roles.",
          AchievementType.CERTIFICATION,
          AchievementLevel.INTERMEDIATE,
          "Scrum Alliance",
          new Date("2024-01-01")
        );
        a.certificateUrl =
          "/Achievements%201f09193d1f918004b2b4f92942c436e0/01_Carina_Lea_Meyer-ScrumAlliance_CSPO_Certificate.png";
        return a;
      })(),
      (() => {
        const a = new Achievement(
          "ach5",
          "OOUXer of the Month: May 2025",
          "While taking the OOUX foundations course I was thrilled that my work for it got recognized and posted about. Though not a flashy achievement it is one I hold dear to my heart.",
          AchievementType.AWARD,
          AchievementLevel.INTERMEDIATE,
          "OOUX",
          new Date("2025-05-01")
        );
        a.badgeUrl =
          "/Achievements%201f09193d1f918004b2b4f92942c436e0/OOUXer_of_the_Month__May_2025.jpg";
        return a;
      })(),
    ];

    achievements.forEach((achievement) =>
      portfolioManager.addAchievement(achievement)
    );
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
                            tests, and field studies to understand their needs,
                            pain points, and behaviors. Empathy and curiosity
                            drive my process.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                            Learning from Peers
                          </h3>
                          <p className="text-gray-600 text-base text-center md:text-left">
                            Collaboration is at the heart of my work. I value
                            feedback, design critiques, and cross-functional
                            teamwork. Sharing knowledge and learning from others
                            helps me grow and deliver better solutions.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                            Learning from Media
                          </h3>
                          <p className="text-gray-600 text-base text-center md:text-left">
                            I stay inspired and informed by reading books,
                            listening to podcasts, and following thought leaders
                            in design and technology. Continuous learning keeps
                            my skills sharp and my perspective fresh.
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
              element={<CaseStudyDetail portfolioManager={portfolioManager} />}
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
    </Router>
  );
}

export default App;
