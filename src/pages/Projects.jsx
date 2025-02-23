import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
// import techIcons from "./TechIcons"; // Import icon mapping
import { getTechIcon } from "./TechIcons";
// const techIcons = {
//     React: 'react',
//     'Node.js': 'nodejs',
//     MongoDB: 'mongodb',
//     'Express.js': 'express',
//     Firebase: 'firebase',
//     'Material-UI': 'materialui',
//     Heroku: 'heroku',
//     Netlify: 'netlify',
//     Python: 'python',
//     Flask: 'flask',
//     HTML: 'html5',
//     CSS: 'css3',
//     JavaScript: 'javascript',
//     PHP: 'php',
//     MySQL: 'mysql',
//     Vite: 'vite',
//     Game: 'gamepad', // Custom icon
//     'File I/O': 'file-alt', // Custom icon
//     // Add more mappings as needed
//   };

const projects = [
  { 
    name: "Past Preserve -- comming Soon", 
    desc: "A digital time capsule web app.", 
    link: "", 
    code: "https://github.com/vyom/past-preserve", 
    techstackused: "React, Node.js, MongoDB, Express.js, Firebase",
    techstack: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"]
  },
  {
    "name": "VisionScript",
    "desc": "An AI-powered project that utilizes OCR and deep learning for image processing using OpenCV, Tesseract OCR, and TensorFlow.",
    "link": "",
    "code": "https://github.com/vmoyd/VisionScript",
    "techstackused": "Python, OpenCV, Tesseract OCR, TensorFlow, Deep Learning, Image Processing",
    "techstack": ["Python", "OpenCV", "Tesseract OCR", "TensorFlow", "Deep Learning", "Image Processing"]
  },
  { 
    name: "Portfolio", 
    desc: "My personal portfolio website.", 
    link: "https://vmoyd.github.io/portfolio-app/", 
    code: "https://github.com/VMOYD/portfolio-app", 
    techstackused: "React, Vite, HTML, CSS, JavaScript, Material-UI",
    techstack: ["React", "HTML", "CSS", "JavaScript", "material-ui"]
  },
  { 
    name: "Sokoban Game", 
    desc: "A classic puzzle game where you push boxes onto target spots, built using Python and Pygame.", 
    link: "", 
    code: "https://github.com/VMOYD/sokoban-game", 
    techstackused: "Python, Game",
    techstack: ["Python", "Game"]
  },
  {
    "name": "Selenium MultiScraper",
    "desc": "A high-performance, multi-threaded web scraper for extracting student result data from Bundelkhand University.",
    "link": "",
    "code": "https://github.com/vmoyd/selenium-speedscraper",
    "techstackused": "Python, Selenium, Web Scraping, Multithreading",
    "techstack": ["Python", "Selenium", "Web Scraping", "Multithreading"]
  },
  { 
    name: "Library Management System", 
    desc: "A console-based system to manage books, borrowing, and librarian functions.", 
    link: "", 
    code: "https://github.com/VMOYD/library-management-system", 
    techstackused: "C++, File I/O",
    techstack: ["C++", "File I/O", "Curses"]
  },
  { 
    name: "VoteX", 
    desc: "A secure online voting platform.", 
    link: "", 
    code: "https://github.com/VMOYD/VoteX", 
    techstackused: "PHP, MySQL, HTML, CSS, JavaScript",
    techstack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  { 
    name: "AI Assistant", 
    desc: "An AI-powered browser extension.", 
    link: "https://ai-assistant.com", 
    code: "https://github.com/vyom/ai-assistant", 
    techstackused: "Python, Flask, HTML, CSS, JavaScript",
    techstack: ["Python", "Flask", "HTML", "CSS", "JavaScript"]
  },
  { 
    name: "BGMI Live Tracker", 
    desc: "A real-time game stats dashboard.", 
    link: "", 
    code: "https://github.com/vyom/bgmi-tracker", 
    techstackused: "React, Node.js, Firebase, Material-UI",
    techstack: ["React", "Node.js", "Firebase", "Material-UI"]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Grid>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(project)}
          >
            <Card>
              <ProjectTitle>{project.name}</ProjectTitle>
              <Description>{project.desc}</Description>
              <TechStack>
                {project.techstack.map((tech, i) => (
                  <TechIcon key={i}>{getTechIcon(tech)}</TechIcon>
                ))}
              </TechStack>
            </Card>
          </motion.div>
        ))}
      </Grid>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </Section>
  );
};

export default Projects;

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  padding: 6rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0px 0px 10px #9b51e0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
`;

const Card = styled.div`
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  text-align: center;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(155, 81, 224, 0.6) 0px 10px 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #9b51e0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const TechIcon = styled.span`
  font-size: 2rem;
  color: #9b51e0;
  transition: 0.3s;
`;
