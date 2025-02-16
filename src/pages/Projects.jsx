import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiHeroku, SiNetlify, SiFlask } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  "Express.js": <SiExpress /> ,
  Firebase: <SiFirebase />,
  "Material-UI": <FaLayerGroup/> ,
  Heroku: <SiHeroku />,
  Netlify: <SiNetlify />,
  Python: <FaPython />,
  Flask: <SiFlask />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3 /> ,
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
    <section id="projects" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-800" style={{height:"100vh"}}>
      <h2 className="text-1xl font-bold text-gray-900 dark:text-white text-center mb-10" style={{textAlign:"center", 
              marginTop: "3rem", fontSize:"2rem"}}>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
      }}>
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-transform 
                      transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-850"
            style={{
              
              margin: "0 auto",
              marginTop: "3rem",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "rgb(231 231 231 / 28%) 2px 2px 17px 8px",
            }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>

            <div className="flex flex-wrap mt-4 space-x-3">
              {project.techstackused.split(", ").map((tech, i) => (
                <span key={i} className="text-2xl">{techIcons[tech] || tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
