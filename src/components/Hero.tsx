import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  style?: React.CSSProperties;
}

const Hero: React.FC<HeroProps> = ({ style }) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 pt-16"
      style={style}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 24,
          gap: 4,
          background: "#EFEFEF",
          border: "1px solid #242628",
          boxShadow: "4px 4px 0px #000000",
          width: 578,
          height: "fit-content",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily:
              "'Jersey 10', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 64,
            lineHeight: "69px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#242628",
            width: 268,
            height: "fit-content",
            margin: 0,
          }}
        >
          HEY THERE!
        </h1>
        <p
          style={{
            fontFamily: "'Ubuntu Mono', monospace",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "23px",
            color: "#242628",
            width: 530,
            height: "fit-content",
            margin: 0,
            marginTop: 8,
            whiteSpace: "pre-line",
          }}
        >
          {`I'm Carina an Interface… User Experience… Product…
I AM A DESIGNER! Over the past 10 years I worked on cross platform SaaS and E-Commerce for both B2B and B2C. Design lets me help people and satisfies my curiosity along the way. Win win.`}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
