import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroTransition from "./HeroTransition";
import FrameAnimation from "./FrameAnimation";

// Import animation frames
import frame1 from "../assets/animations/star1/frame-01.png";
import frame2 from "../assets/animations/star1/frame-02.png";
import frame3 from "../assets/animations/star1/frame-03.png";
import frame4 from "../assets/animations/star1/frame-04.png";
import frame5 from "../assets/animations/star1/frame-05.png";
import frame6 from "../assets/animations/star1/frame-06.png";
import frame7 from "../assets/animations/star1/frame-07.png";

import star2 from "../assets/decorations/star2.png";
import carinaMeyer from "../assets/decorations/carinaMeyer.png";

interface HeroProps {
  style?: React.CSSProperties;
}

const star1Frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

const Hero: React.FC<HeroProps> = ({ style }) => {
  const [visibleChars, setVisibleChars] = useState<number>(0);

  const title = "HEY THERE!";
  const paragraph =
    "I'm Carina an Interface… User Experience… Product Designer… I AM A DESIGNER! Over the past 10 years I have worked on cross platform SaaS and E-Commerce for both B2B and B2C. Design lets me help people and satisfies my curiosity along the way. Win win.";
  const fullText = title + " " + paragraph;

  useEffect(() => {
    let currentChar = 0;
    let timeout: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentChar < fullText.length) {
        const char = fullText[currentChar];
        const nextChar = fullText[currentChar + 1];

        // Set the base delay
        let delay = 80;

        // Add extra pause after punctuation
        if (
          char === "." ||
          char === "!" ||
          (char === "…" && nextChar !== " ") ||
          (char === "?" && nextChar !== " ")
        ) {
          delay = 1000; // Longer pause after sentences
        } else if (char === "…") {
          delay = 800; // Much longer pause during ellipsis (quadrupled from original 200ms)
        }

        setVisibleChars((prev) => prev + 1);
        currentChar++;

        timeout = setTimeout(typeNextChar, delay);
      }
    };

    timeout = setTimeout(typeNextChar, 80);

    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <section
      className="min-h-screen relative pt-16"
      style={{
        ...style,
        background:
          "linear-gradient(157.13deg, #53FEA6 -13.87%, #90CBFF 48.8%, #B9B3FF 112.68%)",
        borderRadius: "2px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={carinaMeyer}
        alt="Carina Meyer"
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          width: "auto",
          height: "65%",
          zIndex: 1,
        }}
      />
      {/* Decorative Elements: 3 animated, 3 static */}

      {/* 1. Large Animated Star */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "150px",
          height: "150px",
        }}
      >
        <FrameAnimation frameSources={star1Frames} frameRate={6} />
      </div>

      {/* 2. Small Static Star */}
      <img
        src={star2}
        alt=""
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          width: "50px",
          height: "auto",
        }}
      />

      {/* 3. Small Animated Star */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "15%",
          width: "150px",
          height: "150px",
        }}
      >
        <FrameAnimation frameSources={star1Frames} frameRate={6} delay={200} />
      </div>

      {/* 4. Small Static Star */}
      <img
        src={star2}
        alt=""
        style={{
          position: "absolute",
          top: "10%",
          right: "30%",
          width: "50px",
          height: "auto",
        }}
      />

      {/* 5. Small Animated Star */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: "150px",
          height: "150px",
        }}
      >
        <FrameAnimation frameSources={star1Frames} frameRate={6} delay={400} />
      </div>

      {/* 6. Static Star behind text box */}
      <img
        src={star2}
        alt=""
        style={{
          position: "absolute",
          bottom: "8%",
          right: "2%",
          width: "50px",
          height: "auto",
        }}
      />

      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
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
          width: "min(578px, 90vw)",
          height: "fit-content",
          position: "absolute",
          bottom: "clamp(24px, 8vh, 88px)",
          right: "clamp(24px, 8vw, 88px)",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontFamily:
              "'Jersey 10', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "clamp(32px, 8vw, 64px)",
            lineHeight: "1.1",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#242628",
            margin: 0,
            marginBottom: 8,
            width: "100%",
            position: "relative",
            wordBreak: "normal",
            overflowWrap: "normal",
          }}
          className="typing-container"
        >
          {title.split("").map((char, index) => (
            <React.Fragment key={index}>
              <span className={index < visibleChars ? "visible" : ""}>
                {char}
              </span>
              {index === Math.min(visibleChars - 1, title.length - 1) &&
                visibleChars <= title.length && (
                  <div
                    className="cursor title"
                    style={{ height: "clamp(32px, 8vw, 64px)" }}
                  />
                )}
            </React.Fragment>
          ))}
        </h1>
        <p
          style={{
            fontFamily: "'Ubuntu Mono', monospace",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 16px)",
            lineHeight: "1.4",
            color: "#242628",
            margin: 0,
            width: "100%",
            whiteSpace: "normal",
            position: "relative",
            wordBreak: "normal",
            overflowWrap: "normal",
          }}
          className={`typing-container typing-paragraph ${
            visibleChars > title.length ? "visible" : ""
          }`}
        >
          {paragraph.split("").map((char, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  index < visibleChars - title.length - 1 ? "visible" : ""
                }
              >
                {char}
              </span>
              {index ===
                Math.min(
                  visibleChars - title.length - 2,
                  paragraph.length - 1
                ) &&
                visibleChars > title.length && (
                  <div
                    className="cursor paragraph"
                    style={{ height: "clamp(14px, 3vw, 16px)" }}
                  />
                )}
            </React.Fragment>
          ))}
        </p>
      </motion.div>
      <HeroTransition />
    </section>
  );
};

export default Hero;
