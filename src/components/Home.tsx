import React from "react";
import { motion } from "framer-motion";
import { PortfolioManager } from "../models/PortfolioManager";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";
import Books from "./Books";
import Contact from "./Contact";

interface HomeProps {
  portfolioManager: PortfolioManager;
}

const Home: React.FC<HomeProps> = ({ portfolioManager }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="text-purple-600">Carina</span>
            </h1>
            <p className="hero-subtitle">
              A UX Designer passionate about creating meaningful digital
              experiences
            </p>
            <div className="hero-cta">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                Get in Touch
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("case-studies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-outline"
              >
                View My Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About me section removed */}

      {/* Case Studies Section */}
      <section id="case-studies" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Case Studies</h2>
            <CaseStudies portfolioManager={portfolioManager} />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <Skills portfolioManager={portfolioManager} />
          </motion.div>
        </div>
      </section>

      {/* Reading List Section */}
      <section id="reading-list" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Reading List</h2>
            <Books portfolioManager={portfolioManager} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <Contact />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
