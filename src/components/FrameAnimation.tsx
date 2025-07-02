import React, { useState, useEffect, useRef } from "react";

interface FrameAnimationProps {
  frameSources: string[];
  frameRate?: number;
  width?: number;
  height?: number;
  loop?: boolean;
  autoPlay?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

const FrameAnimation: React.FC<FrameAnimationProps> = ({
  frameSources,
  frameRate = 12,
  width,
  height,
  loop = true,
  autoPlay = true,
  delay = 0,
  style,
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoPlay) {
      startTimeoutRef.current = setTimeout(() => {
        setIsPlaying(true);
      }, delay);
    } else {
      setIsPlaying(false);
    }

    return () => {
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }
    };
  }, [autoPlay, delay]);

  useEffect(() => {
    if (isPlaying && frameSources.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          const nextFrame = prevFrame + 1;
          if (nextFrame >= frameSources.length) {
            if (loop) {
              return 0; // Loop back to the first frame
            } else {
              setIsPlaying(false); // Stop animation if not looping
              return prevFrame;
            }
          }
          return nextFrame;
        });
      }, 1000 / frameRate);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, loop, frameRate, frameSources.length]);

  const containerStyle: React.CSSProperties = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    ...style,
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle}>
      <img
        src={frameSources[currentFrame]}
        alt={`Animation frame ${currentFrame + 1}`}
        style={imageStyle}
      />
    </div>
  );
};

export default FrameAnimation;
