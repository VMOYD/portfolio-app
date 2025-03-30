import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons"; // Import the tech-stack-icons package

// Tech stack data
const techCategories = [
  { 
    category: "Frontend", 
    theme: "neural",
    techs: ["React", "Vite", "HTML5", "CSS3", "JavaScript", "Material UI"] 
  },
  { 
    category: "Backend", 
    theme: "terminal",
    techs: ["Node.js", "Express", "Flask", "PHP"] 
  },
  { 
    category: "Database", 
    theme: "vortex",
    techs: ["MongoDB", "MySQL", "Firebase"] 
  },
  { 
    category: "AI/Automation", 
    theme: "ai",
    techs: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Selenium", "Web Scraping"] 
  }
];

// Custom icon component with fallback to custom implementation

const TechIcon = ({ tech, theme }) => {
  // Different glow colors based on theme
  const glowColors = {
    neural: "#00ffff",    // Cyan
    terminal: "#00ff00",  // Green
    vortex: "#a855f7",    // Purple
    ai: "#3b82f6"         // Blue
  };
  
  const color = glowColors[theme] || "#00ffff";
  
  // Mapping of tech names to tech-stack-icons identifiers
  const techIconsMap = {
    "React": "reactjs",
    "ReactJS": "reactjs",
    "Vite": "vitejs",
    "HTML5": "html5",
    "CSS3": "css3",
    "JavaScript": "js",
    "JS": "js",
    "Node.js": "nodejs",
    "NodeJS": "nodejs",
    "MongoDB": "mongodb",
    "Python": "python",
    "Material UI": "materialui",
    "C++": "c++",
    "PHP": "php",
    "MySQL": "mysql"
  };
  
  // Check if we have a matching icon in tech-stack-icons
  const iconKey = techIconsMap[tech];
  
  if (iconKey) {
    return (
      <div className="relative w-14 h-14 flex flex-col items-center justify-center">
        <div className="w-12 h-12 flex items-center justify-center">
          <StackIcon name={iconKey} />
        </div>
        <span className="text-xs mt-1 text-gray-300 whitespace-nowrap">{tech}</span>
      </div>
    );
  }
  
  // Fallback to our custom implementation
  return (
    <div className="relative w-12 h-12 flex flex-col items-center justify-center">
      <div 
        className="text-2xl font-bold flex items-center justify-center w-10 h-10 rounded-lg"
        style={{ 
          color: color,
          textShadow: `0 0 5px ${color}, 0 0 10px ${color}`
        }}
      >
        {tech.charAt(0)}
      </div>
      <span className="text-xs mt-1 text-gray-300 whitespace-nowrap">{tech}</span>
    </div>
  );
};

const TechStackDisplay = () => {
  const containerRef = useRef(null);
  
  // Animation variants for different themes
  const cardVariants = {
    neural: {
      hover: { boxShadow: "0 0 15px 2px rgba(0, 255, 255, 0.7)", scale: 1.02 }
    },
    terminal: {
      hover: { boxShadow: "0 0 15px 2px rgba(0, 255, 0, 0.7)", scale: 1.02 }
    },
    vortex: {
      hover: { boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.7)", scale: 1.02 }
    },
    ai: {
      hover: { boxShadow: "0 0 15px 2px rgba(59, 130, 246, 0.7)", scale: 1.02 }
    }
  };

  // Function to generate grid background lines
  useEffect(() => {
    const createGridLines = () => {
      if (!containerRef.current) return;
      
      const gridContainer = document.createElement('div');
      gridContainer.className = 'absolute inset-0 overflow-hidden pointer-events-none';
      
      // Create horizontal lines
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'absolute w-full h-px';
        line.style.top = `${i * 5}%`;
        line.style.background = 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)';
        line.style.opacity = '0.3';
        gridContainer.appendChild(line);
      }
      
      // Create vertical lines
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'absolute h-full w-px';
        line.style.left = `${i * 5}%`;
        line.style.background = 'linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.2), transparent)';
        line.style.opacity = '0.3';
        gridContainer.appendChild(line);
      }
      
      if (containerRef.current.firstChild) {
        containerRef.current.insertBefore(gridContainer, containerRef.current.firstChild);
      } else {
        containerRef.current.appendChild(gridContainer);
      }
    };
    
    createGridLines();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen p-4 md:p-10 bg-black text-white overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #0f1523 0%, #000000 100%)'
      }}
    >
      {/* Animated grid background will be added via useEffect */}
      
      {/* Glow effects */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff" }}
      >
        Tech Stack Showcase
      </motion.h1>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {techCategories.map(({ category, techs, theme }) => (
          <motion.div
            key={category}
            className="border border-gray-700 p-6 rounded-xl backdrop-blur-sm relative flex flex-col items-center min-h-[250px] shadow-lg bg-gray-900 bg-opacity-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={cardVariants[theme].hover}
          >
            {/* Glitch line effect */}
            <div className="absolute h-px w-full top-0 left-0 overflow-hidden">
              <motion.div 
                className="h-px bg-cyan-400" 
                animate={{ 
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear"
                }}
              />
            </div>
            
            <motion.h2 
              className="text-xl font-bold mb-6 text-center"
              style={{ 
                textShadow: theme === 'neural' ? "0 0 5px #00ffff, 0 0 10px #00ffff" :
                           theme === 'terminal' ? "0 0 5px #00ff00, 0 0 10px #00ff00" :
                           theme === 'vortex' ? "0 0 5px #a855f7, 0 0 10px #a855f7" :
                           "0 0 5px #3b82f6, 0 0 10px #3b82f6"
              }}
              animate={{
                textShadow: [
                  theme === 'neural' ? "0 0 5px #00ffff, 0 0 10px #00ffff" : 
                  theme === 'terminal' ? "0 0 5px #00ff00, 0 0 10px #00ff00" :
                  theme === 'vortex' ? "0 0 5px #a855f7, 0 0 10px #a855f7" :
                  "0 0 5px #3b82f6, 0 0 10px #3b82f6",
                  
                  theme === 'neural' ? "0 0 2px #00ffff, 0 0 5px #00ffff" : 
                  theme === 'terminal' ? "0 0 2px #00ff00, 0 0 5px #00ff00" :
                  theme === 'vortex' ? "0 0 2px #a855f7, 0 0 5px #a855f7" :
                  "0 0 2px #3b82f6, 0 0 5px #3b82f6",
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {category}
            </motion.h2>
            
            <div className="relative flex flex-wrap justify-center items-center gap-4 w-full">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex flex-col items-center p-2 rounded-xl bg-gray-800 bg-opacity-60 border border-gray-700 relative overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: theme === 'neural' ? 5 : 
                            theme === 'terminal' ? 0 : 
                            theme === 'vortex' ? [0, 5, -5, 0] : 3,
                    y: theme === 'vortex' ? -5 : 0
                  }}
                  style={{
                    boxShadow: theme === 'neural' ? "0 0 5px rgba(0, 255, 255, 0.3)" :
                              theme === 'terminal' ? "0 0 5px rgba(0, 255, 0, 0.3)" :
                              theme === 'vortex' ? "0 0 5px rgba(168, 85, 247, 0.3)" :
                              "0 0 5px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <TechIcon tech={tech} theme={theme} />
                  
                  {/* Theme-specific effects */}
                  {theme === 'neural' && (
                    <motion.div 
                      className="absolute inset-0 border border-cyan-500 rounded-xl"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  {theme === 'terminal' && (
                    <motion.div 
                      className="absolute inset-0 bg-green-500 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  
                  {theme === 'vortex' && (
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"
                        animate={{ 
                          rotate: [0, 360],
                          opacity: 0.1
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  )}
                  
                  {theme === 'ai' && (
                    <motion.div 
                      className="absolute inset-0 bg-blue-500 rounded-xl"
                      animate={{ 
                        opacity: [0.05, 0.2, 0.05],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      
    </div>
  );
};

export default TechStackDisplay;