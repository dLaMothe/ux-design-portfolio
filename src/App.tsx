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

function App() {
  const [portfolioManager] = useState(() => new PortfolioManager());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize with sample data
    initializePortfolioData();
    setIsLoading(false);
  }, []);

  const initializePortfolioData = () => {
    // Sample Skills - Add these FIRST so we can reference them in case studies
    const skills = [
      new Skill(
        "skill1",
        "User Research",
        "Conducting qualitative and quantitative research to understand user needs",
        SkillLevel.EXPERT,
        SkillCategory.RESEARCH,
        5
      ),
      new Skill(
        "skill2",
        "Prototyping",
        "Creating interactive prototypes to test and validate design concepts",
        SkillLevel.ADVANCED,
        SkillCategory.PROTOTYPING,
        4
      ),
      new Skill(
        "skill3",
        "Visual Design",
        "Creating beautiful and functional user interfaces",
        SkillLevel.ADVANCED,
        SkillCategory.DESIGN,
        4
      ),
      new Skill(
        "skill4",
        "Usability Testing",
        "Planning and conducting usability tests to validate design decisions",
        SkillLevel.EXPERT,
        SkillCategory.TESTING,
        6
      ),
      new Skill(
        "skill5",
        "Design Strategy",
        "Aligning design decisions with business goals and user needs",
        SkillLevel.ADVANCED,
        SkillCategory.STRATEGY,
        3
      ),
      new Skill(
        "skill6",
        "Stakeholder Management",
        "Collaborating effectively with cross-functional teams",
        SkillLevel.EXPERT,
        SkillCategory.COLLABORATION,
        5
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
      ["skill1", "skill2", "skill3", "skill4", "skill5"], // Skills used: User Research, Prototyping, Visual Design, Usability Testing, Design Strategy
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
      ["skill1", "skill3", "skill4", "skill6"], // Skills used: User Research, Visual Design, Usability Testing, Stakeholder Management
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

    // Sample Tools
    const tools = [
      new Tool(
        "tool1",
        "Figma",
        "Collaborative interface design tool",
        ToolCategory.DESIGN,
        ProficiencyLevel.EXPERT,
        "2024",
        "https://figma.com",
        [],
        [],
        [],
        [],
        ["skill1", "skill2", "skill3"] // Associated with User Research, Prototyping, and Visual Design
      ),
      new Tool(
        "tool2",
        "Sketch",
        "Digital design toolkit",
        ToolCategory.DESIGN,
        ProficiencyLevel.ADVANCED,
        "2023",
        "https://sketch.com",
        [],
        [],
        [],
        [],
        ["skill3"] // Associated with Visual Design
      ),
      new Tool(
        "tool3",
        "InVision",
        "Digital product design platform",
        ToolCategory.PROTOTYPING,
        ProficiencyLevel.ADVANCED,
        "2023",
        "https://invisionapp.com",
        [],
        [],
        [],
        [],
        ["skill2"] // Associated with Prototyping
      ),
      new Tool(
        "tool4",
        "Miro",
        "Online collaborative whiteboarding platform",
        ToolCategory.COLLABORATION,
        ProficiencyLevel.EXPERT,
        "2024",
        "https://miro.com",
        [],
        [],
        [],
        [],
        ["skill6"] // Associated with Stakeholder Management
      ),
      new Tool(
        "tool5",
        "Hotjar",
        "Behavior analytics and user feedback service",
        ToolCategory.ANALYTICS,
        ProficiencyLevel.INTERMEDIATE,
        "2024",
        "https://hotjar.com",
        [],
        [],
        [],
        [],
        ["skill1", "skill4"] // Associated with User Research and Usability Testing
      ),
      new Tool(
        "tool6",
        "UserTesting",
        "Remote user research platform",
        ToolCategory.RESEARCH,
        ProficiencyLevel.ADVANCED,
        "2024",
        "https://usertesting.com",
        [],
        [],
        [],
        [],
        ["skill1", "skill4"] // Associated with User Research and Usability Testing
      ),
    ];

    tools.forEach((tool) => portfolioManager.addTool(tool));

    // Sample Books
    const books = [
      new Book(
        "book1",
        "Don't Make Me Think",
        "A Common Sense Approach to Web Usability",
        "Steve Krug",
        2014,
        BookCategory.UX_DESIGN,
        ReadingStatus.COMPLETED,
        undefined,
        [],
        [],
        [],
        ["skill1", "skill4"] // Associated with User Research and Usability Testing
      ),
      new Book(
        "book2",
        "The Design of Everyday Things",
        "Revised and Expanded Edition",
        "Don Norman",
        2013,
        BookCategory.DESIGN_THINKING,
        ReadingStatus.COMPLETED,
        undefined,
        [],
        [],
        [],
        ["skill3", "skill5"] // Associated with Visual Design and Design Strategy
      ),
      new Book(
        "book3",
        "Atomic Design",
        "Creating design systems that work",
        "Brad Frost",
        2016,
        BookCategory.UI_DESIGN,
        ReadingStatus.CURRENTLY_READING,
        undefined,
        [],
        [],
        [],
        ["skill3"] // Associated with Visual Design
      ),
      new Book(
        "book4",
        "Thinking, Fast and Slow",
        "Understanding human decision-making",
        "Daniel Kahneman",
        2011,
        BookCategory.PSYCHOLOGY,
        ReadingStatus.COMPLETED,
        undefined,
        [],
        [],
        [],
        ["skill1", "skill5"] // Associated with User Research and Design Strategy
      ),
      new Book(
        "book5",
        "Lean UX",
        "Applying Lean Principles to Improve User Experience",
        "Jeff Gothelf",
        2016,
        BookCategory.UX_DESIGN,
        ReadingStatus.WANT_TO_READ,
        undefined,
        [],
        [],
        [],
        ["skill2", "skill5"] // Associated with Prototyping and Design Strategy
      ),
      // Additional books for scroll testing
      new Book(
        "book6",
        "Creativity, Inc.",
        "Overcoming the Unseen Forces That Stand in the Way of True Inspiration",
        "Ed Catmull",
        2014,
        BookCategory.CREATIVITY,
        ReadingStatus.COMPLETED,
        undefined,
        [],
        [],
        [],
        ["skill6"]
      ),
      new Book(
        "book7",
        "Sprint",
        "How to Solve Big Problems and Test New Ideas in Just Five Days",
        "Jake Knapp",
        2016,
        BookCategory.BUSINESS,
        ReadingStatus.COMPLETED,
        undefined,
        [],
        [],
        [],
        ["skill2"]
      ),
      new Book(
        "book8",
        "Hooked",
        "How to Build Habit-Forming Products",
        "Nir Eyal",
        2014,
        BookCategory.BUSINESS,
        ReadingStatus.WANT_TO_READ,
        undefined,
        [],
        [],
        [],
        ["skill4"]
      ),
      new Book(
        "book9",
        "The Lean Startup",
        "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
        "Eric Ries",
        2011,
        BookCategory.BUSINESS,
        ReadingStatus.REFERENCE,
        undefined,
        [],
        [],
        [],
        ["skill5"]
      ),
      new Book(
        "book10",
        "Drive",
        "The Surprising Truth About What Motivates Us",
        "Daniel H. Pink",
        2009,
        BookCategory.PSYCHOLOGY,
        ReadingStatus.ON_HOLD,
        undefined,
        [],
        [],
        [],
        ["skill1"]
      ),
      new Book(
        "book11",
        "Radical Candor",
        "Be a Kick-Ass Boss Without Losing Your Humanity",
        "Kim Scott",
        2017,
        BookCategory.LEADERSHIP,
        ReadingStatus.CURRENTLY_READING,
        undefined,
        [],
        [],
        [],
        ["skill6"]
      ),
      new Book(
        "book12",
        "The Art of Thinking Clearly",
        "Better thinking for better decisions",
        "Rolf Dobelli",
        2013,
        BookCategory.PSYCHOLOGY,
        ReadingStatus.DNF,
        undefined,
        [],
        [],
        [],
        ["skill5"]
      ),
    ];

    // Add ratings and reviews for completed books
    books[0].addReview(
      5,
      "Essential read for anyone in UX. Clear, practical advice that has shaped how I approach usability."
    );
    books[1].addReview(
      5,
      "Foundational book that changed my perspective on design. Norman's insights are timeless."
    );
    books[3].addReview(
      4,
      "Incredible insights into human psychology and decision-making. Very relevant for UX design."
    );

    books.forEach((book) => portfolioManager.addBook(book));

    // Sample Achievements
    const achievements = [
      new Achievement(
        "ach1",
        "Certified Usability Analyst",
        "Professional certification in usability analysis and testing",
        AchievementType.CERTIFICATION,
        AchievementLevel.EXPERT,
        "Human Factors International",
        new Date("2023-03-15"),
        new Date("2026-03-15"),
        "CUA-2023-001234"
      ),
      new Achievement(
        "ach2",
        "UX Design Conference Speaker",
        'Presented "The Future of Voice Interfaces" at UX Week 2023',
        AchievementType.CONFERENCE_SPEAKER,
        AchievementLevel.INDUSTRY_RECOGNITION,
        "UX Week",
        new Date("2023-10-12"),
        undefined,
        "UXWEEK2023-SP-042"
      ),
      new Achievement(
        "ach3",
        "Google UX Design Certificate",
        "Completed comprehensive UX design program",
        AchievementType.COURSE_COMPLETION,
        AchievementLevel.INTERMEDIATE,
        "Google",
        new Date("2022-08-20"),
        undefined,
        "GOOGLE-UX-2022-567890"
      ),
    ];

    achievements[0].markAsVerified(
      "https://hfi.org/verify/CUA-2023-001234",
      "HFI Verification System"
    );
    achievements[1].markAsVerified(
      "https://uxweek.com/speakers/2023",
      "UX Week"
    );
    achievements[2].markAsVerified(
      "https://coursera.org/verify/professional-cert/567890",
      "Coursera"
    );

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
                        <div className="card p-6">
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
                        <div className="card p-6">
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
                        <div className="card p-6">
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
