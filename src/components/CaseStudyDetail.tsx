import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Users,
  Calendar,
  Target,
  Lightbulb,
  TrendingUp,
  Eye,
} from "lucide-react";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import CaseStudyCard from "./CaseStudyCard";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import { Book } from "../models/Book";

interface CaseStudyDetailProps {
  portfolioManager: PortfolioManager;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  portfolioManager,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="case-study-hero">
        <div>
          <a href="/" className="custom-link">
            ← Home
          </a>
          <h1 className="case-study-title">{caseStudy.title}</h1>
        </div>
      </section>

      {/* How might we question */}
      <section className="py-8">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How might we improve the user experience for this project?
            </h2>
          </div>
        </div>
      </section>

      {/* Three columns: Problem, Goal, Challenge */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Problem
              </h3>
              <p className="text-gray-600">{caseStudy.challenge}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal</h3>
              <p className="text-gray-600">{caseStudy.solution}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Challenge
              </h3>
              <p className="text-gray-600">{caseStudy.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Skills Applied Section - Prominent placement */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Skills & Expertise Applied
                </h2>
              </div>

              {portfolioManager.getSkillsForCaseStudy(caseStudy.id).length >
              0 ? (
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

            {/* Project Phases */}
            {caseStudy.phases.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Project Process
                </h2>
                <div className="space-y-8">
                  {caseStudy.phases.map((phase, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {phase.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {phase.description}
                          </p>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Key Deliverables:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.deliverables.map(
                                (deliverable: string, idx: number) => (
                                  <span
                                    key={idx}
                                    className="badge badge-primary"
                                  >
                                    {deliverable}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Images */}
            {caseStudy.images.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-0 overflow-hidden"
                    >
                      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Eye size={48} className="mx-auto mb-2 opacity-50" />
                          <p>Project Image {index + 1}</p>
                          <p className="text-sm">({image})</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Learnings & Decisions Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Learnings & Decisions
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600">
                  {caseStudy.learnings ||
                    "No learnings and decisions have been documented for this case study yet."}
                </p>
              </div>
            </motion.div>

            {/* Second Project Gallery */}
            {caseStudy.images.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-0 overflow-hidden"
                    >
                      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Eye size={48} className="mx-auto mb-2 opacity-50" />
                          <p>Project Image {index + 1}</p>
                          <p className="text-sm">({image})</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* These came in helpful section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                These came in helpful
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioManager.getAllBooks().map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onClick={() => setSelectedBook(book)}
                  />
                ))}
              </div>
            </motion.div>

            {selectedBook && (
              <BookModal
                book={selectedBook}
                portfolioManager={portfolioManager}
                onClose={() => setSelectedBook(null)}
              />
            )}

            {/* Explore more Quests section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Explore more Quests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioManager
                  .getAllCaseStudies()
                  .filter((cs) => cs.id !== caseStudy.id)
                  .map((cs, index) => (
                    <CaseStudyCard
                      key={cs.id}
                      caseStudy={cs}
                      portfolioManager={portfolioManager}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/case-study/${cs.id}`);
                      }}
                      index={index}
                    />
                  ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in Similar Work?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'd love to discuss how I can help solve your design challenges
                and create exceptional user experiences for your product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-primary"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
