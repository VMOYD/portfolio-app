import React from "react";
import { SiExpress, SiFirebase, SiTensorflow, SiOpencv } from "react-icons/si";
import StackIcon from "tech-stack-icons";

// List of technologies that are failing
const failingIcons = [
  "expressjs",
  "opencv",
  "tesseract-ocr",
  "tensorflow",
  "deep-learning",
  "image-processing",
  "pygame",
  "selenium",
  "web-scraping",
  "multithreading",
  "file-io",
  "ncurses"
];

// Fallback Icons
const fallbackIcons = {
  expressjs: <SiExpress />,
  firebase: <SiFirebase />,
  tensorflow: <SiTensorflow />,
  opencv : <SiOpencv />
};

// Function to get tech icon with error handling
export const getTechIcon = (tech) => {
  // If tech is in failing list, fetch an alternative source
  if (failingIcons.includes(tech.toLowerCase())) {
    console.log("Failing icon:", tech);
    return (
      fallbackIcons[tech] || <span>{tech}</span>
      // <img
      //   src={`https://img.shields.io/badge/${tech.replace(/ /g, "%20")}-blue?style=flat-square`}
      //   alt={tech}
      //   style={{ width: "24px", height: "24px" }}
      // />
    );
  }

  try {
    const icon = <StackIcon name={tech} style={{ fontSize: '1.5rem', width: '24px', height: '24px' }} />;
    return React.isValidElement(icon) ? icon : fallbackIcons[tech] || <span>{tech}</span>;
  } catch (error) {
    console.log("Error fetching icon for:", tech);
    return fallbackIcons[tech] || <span>{tech}</span>;
  }
};
