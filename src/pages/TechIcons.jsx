import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { DiMongodb, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiFirebase, SiTensorflow, SiOpencv } from "react-icons/si";
import { getIcon } from "tech-stack-icons";
import StackIcon from "tech-stack-icons";
// Fallback Icons
const fallbackIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  MongoDB: <DiMongodb />,
  HTML: <DiHtml5 />,
  CSS: <DiCss3 />,
  JavaScript: <DiJavascript1 />,
  Express: <SiExpress />,
  Firebase: <SiFirebase />,
  TensorFlow: <SiTensorflow />,
  OpenCV: <SiOpencv />
};

// Function to get tech icon
export const getTechIcon = (tech) => {
  try {
    // console.log(tech);
    console.log(getIcon(tech));
    return <StackIcon name={tech} />
    // return getIcon(tech) || fallbackIcons[tech] || <span>{tech}</span>;
  } catch {
    return fallbackIcons[tech] || <span>{tech}</span>;
  }
};