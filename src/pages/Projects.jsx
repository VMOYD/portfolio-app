import { useState } from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPython, FaPhp,FaGamepad ,FaFileAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiHeroku, SiNetlify, SiFlask, SiMysql, SiVite } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";

// Icons mapping
const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  "Express.js": <SiExpress />,
  Firebase: <SiFirebase />,
  "Material-UI": <FaLayerGroup />,
  Heroku: <SiHeroku />,
  Netlify: <SiNetlify />,
  Python: <FaPython />,
  Flask: <SiFlask />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  JavaScript: <FaJs />,
  PHP: <FaPhp />,
  MySQL: <SiMysql />,
  Vite: <SiVite />,
  Game: <FaGamepad />,
  "File I/O": <FaFileAlt />,
};

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
                {project.techstackused.split(", ").map((tech, i) => (
                  <TechIcon key={i}>{techIcons[tech] || tech}</TechIcon>
                ))}
              </TechStack>
            </Card>
          </motion.div>
        ))}
      </Grid>

      {/* Modal */}
      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedProject(null)}>✖</CloseButton>
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.desc}</p>
            <TechStack>
              {selectedProject.techstackused.split(", ").map((tech, i) => (
                <TechIcon key={i}>{techIcons[tech] || tech}</TechIcon>
              ))}
            </TechStack>
            <p>
              <strong>Status:</strong> {selectedProject.link ? <LiveLink href={selectedProject.link} target="_blank">Live 🔴</LiveLink> : <span>Not Live ❌</span>}
            </p>
            <CodeLink href={selectedProject.code} target="_blank">View Code</CodeLink>
          </ModalContent>
        </ModalOverlay>
      )}
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
  color: rgb(255, 255, 255);
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
  box-shadow: 0px 0px 15px rgba(155, 81, 224, 0.4);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(155, 81, 224, 0.6) 0px 10px 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
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
  filter: drop-shadow(0px 0px 8px rgba(155, 81, 224, 0.6));

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 12px rgba(155, 81, 224, 1));
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(155, 81, 224, 0.5);
  max-width: 500px;
  width: 90%;
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;

const LiveLink = styled.a`
  color: #66ff66;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
`;

const CodeLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #ffcc66;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

