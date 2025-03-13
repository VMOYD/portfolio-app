import { useState } from "react";
import { motion } from "framer-motion";
// Fix the imports to match your actual project structure
import ProjectModal from "./ProjectModal"; 
import { getTechIcon } from "./TechIcons";

const projects = [
  { 
    name: "Past Preserve -- Coming Soon", 
    desc: "A digital time capsule web app.", 
    link: "", 
    code: "https://github.com/vyom/past-preserve", 
    techstackused: "React.js, Node.js, MongoDB, Express.js, Firebase",
    techstackicons: ["reactjs", "nodejs", "mongodb", "expressjs", "firebase"]
  },
  {
    name: "VisionScript",
    desc: "An AI-powered project that utilizes OCR and deep learning for image processing using OpenCV, Tesseract OCR, and TensorFlow.",
    link: "",
    code: "https://github.com/vmoyd/VisionScript",
    techstackused: "Python, OpenCV, Tesseract OCR, TensorFlow, Deep Learning, Image Processing",
    techstackicons: ["python", "opencv", "tensorflow"]
  },
  { 
    name: "Portfolio", 
    desc: "My personal portfolio website.", 
    link: "https://vmoyd.github.io/portfolio-app/", 
    code: "https://github.com/VMOYD/portfolio-app", 
    techstackused: "React.js, Vite, HTML5, CSS3, JavaScript, Material-UI",
    techstackicons: ["reactjs", "vitejs", "html5", "css3", "js", "materialui"]
  },
  { 
    name: "Sokoban Game", 
    desc: "A classic puzzle game where you push boxes onto target spots, built using Python and Pygame.", 
    link: "", 
    code: "https://github.com/VMOYD/sokoban-game", 
    techstackused: "Python, Py-Game",
    techstackicons: ["python"]
  },
  {
    name: "Selenium MultiScraper",
    desc: "A high-performance, multi-threaded web scraper for extracting student result data from Bundelkhand University.",
    link: "",
    code: "https://github.com/vmoyd/selenium-speedscraper",
    techstackused: "Python, Selenium, Web Scraping, Multithreading",
    techstackicons: ["python"]
  },
  { 
    name: "Library Management System", 
    desc: "A console-based system to manage books, borrowing, and librarian functions.", 
    link: "", 
    code: "https://github.com/VMOYD/library-management-system", 
    techstackused: "C++, File I/O, Curses",
    techstackicons: ["c++"]
  },
  { 
    name: "VoteX", 
    desc: "A secure online voting platform.", 
    link: "", 
    code: "https://github.com/VMOYD/VoteX", 
    techstackused: "PHP, MySQL, HTML5, CSS3, JavaScript",
    techstackicons: ["php", "mysql", "html5", "css3", "js"]
  },
  { 
    name: "AI Assistant", 
    desc: "An AI-powered browser extension.", 
    link: "https://ai-assistant.com", 
    code: "https://github.com/vyom/ai-assistant", 
    techstackused: "Python, Flask, HTML5, CSS3, JavaScript",
    techstackicons: ["python", "flask", "html5", "css3", "js"]
  },
  { 
    name: "BGMI Live Tracker", 
    desc: "A real-time game stats dashboard.", 
    link: "", 
    code: "https://github.com/vyom/bgmi-tracker", 
    techstackused: "React.js, Node.js, Firebase, Material-UI",
    techstackicons: ["reactjs", "nodejs", "firebase", "materialui"]
  },
];

// Add CSS animation for shine effect to your main stylesheet or inline styles
const shineKeyframes = `
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
        position: "relative",
        padding: "6rem 2rem"
      }}
    >
      {/* Add keyframes to document */}
      <style dangerouslySetInnerHTML={{ __html: shineKeyframes }} />
      
      {/* Grid background - matched from Home & About */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute w-full h-px" 
            style={{
              top: `${i * 5}%`,
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.3'
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute h-full w-px" 
            style={{
              left: `${i * 5}%`,
              background: 'linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.3'
            }}
          />
        ))}
      </div>
      
      {/* Ambient glow effects */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      
      {/* Scanline effect */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 4px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />

      <div className="w-full max-w-6xl mx-auto z-10">
        {/* Title with animated glow - matches Home & About */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)",
            marginBottom: "2rem",
            marginTop: "2rem"

          }}
        >
          Projects
        </motion.h1>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className="relative cursor-pointer group"
            >
              <div className="relative p-6 bg-black/60 backdrop-blur-md rounded-lg border border-amber-900/50 overflow-hidden h-full">
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg"></div>
                
                {/* Animated border corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-amber-400 mb-2 relative z-10">
                  {project.name}
                  
                  {/* Glitch animation on hover */}
                  <motion.span
                    className="absolute inset-0"
                    style={{ mixBlendMode: 'exclusion' }}
                    animate={{
                      opacity: [0, 0.03, 0, 0.03, 0],
                      x: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </h3>
                
                <p className="text-gray-300 mb-4 relative z-10">{project.desc}</p>
                
                {/* Tech stack icons */}
                <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                  {project.techstackicons.map((tech, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-amber-500"
                    >
                      {getTechIcon(tech)}
                    </motion.div>
                  ))}
                </div>
                
                {/* View Project Button - only shown if links exist */}
                {(project.link || project.code) && (
                  <motion.div 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.div>
                )}
                
                {/* Shine effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.1) 50%, transparent 55%)",
                    animation: "shine 3s infinite",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
