
import styled from "styled-components";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiHeroku, SiNetlify, SiFlask } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";

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
};

const projects = [
  { name: "Past Preserve", desc: "A digital time capsule web app.", link: "#", techstackused: "React, Node.js, MongoDB, Express.js, Firebase, Material-UI, Heroku, Netlify" },
  { name: "AI Assistant", desc: "An AI-powered browser extension.", link: "#", techstackused: "Python, Flask, HTML, CSS, JavaScript, Heroku, Netlify" },
  { name: "BGMI Live Tracker", desc: "A real-time game stats dashboard.", link: "#", techstackused: "React, Node.js, MongoDB, Express.js, Firebase, Material-UI, Heroku, Netlify" },
  { name: "Online Voting System", desc: "A secure online voting platform.", link: "#", techstackused: "React, Node.js, MongoDB, Express.js, Firebase, Material-UI, Heroku, Netlify" },
];

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Grid>
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.a>
        ))}
      </Grid>
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h4 style={{ color: "#ffcc66", fontSize: "1.8rem", marginBottom: "1rem", marginTop: "20%"}}>
              Contact ME !
            </h4>
            <a
              href="#/contact/"
              style={{
                display: "inline-block",
                backgroundColor: "#ffcc66",
                color: "#000",
                padding: "0.8rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ffc107")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffcc66")}
            >
              Contact
            </a>
          </div>
    </Section>
  );
};

export default Projects;

// 🌙 Styled Components for Dark Mode
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
  color:rgb(255, 255, 255);
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
