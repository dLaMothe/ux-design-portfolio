import React from "react";
import { motion } from "framer-motion";
import { PortfolioManager } from "../models/PortfolioManager";
import Books from "./Books";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";
import Achievements from "./Achievements";
import { PixelHeart } from "../App";

interface HomeProps {
  portfolioManager: PortfolioManager;
}

const Home: React.FC<HomeProps> = ({ portfolioManager }) => {
  return (
    <div className="min-h-screen">
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
              <PixelHeart />
              <PixelHeart />
            </div>
            <div className="my-values-title">Learning from Users</div>
            <div className="my-values-body">
              Research a crucial part of the process to me and listening to
              actual users is the best time investment.
            </div>
          </div>
          {/* Value 2 */}
          <div className="my-values-card">
            <div className="my-values-hearts">
              <PixelHeart />
              <PixelHeart />
              <PixelHeart />
            </div>
            <div className="my-values-title">Learning from Peers</div>
            <div className="my-values-body">
              Collaborating with my team and other experts is important to me.
              No one knows everything.
            </div>
          </div>
          {/* Value 3 */}
          <div className="my-values-card">
            <div className="my-values-hearts">
              <PixelHeart />
              <PixelHeart />
              <PixelHeart />
            </div>
            <div className="my-values-title">Learning from Media</div>
            <div className="my-values-body">
              Books and podcasts inspire and excite me to try out new things. It
              feels wrong to not have a book I'm currently reading.
            </div>
          </div>
        </div>
      </section>
      <Outlet />
      <section id="books" style={{ marginBottom: 129 }}>
        <Books portfolioManager={portfolioManager} />
      </section>
      <section id="achievements" style={{ marginBottom: 129 }}>
        <Achievements portfolioManager={portfolioManager} />
      </section>
    </div>
  );
};

export default Home;
