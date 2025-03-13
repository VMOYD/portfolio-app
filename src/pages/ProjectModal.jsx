import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
      style={{
        background: "radial-gradient(circle at center, rgba(15, 21, 35, 0.7) 0%, rgba(0, 0, 0, 0.9) 100%)"
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute w-full h-px" 
            style={{
              top: `${i * 10}%`,
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.2'
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute h-full w-px" 
            style={{
              left: `${i * 10}%`,
              background: 'linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.2'
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="relative bg-black/60 backdrop-blur-md p-8 rounded-lg border border-amber-900/50 max-w-2xl w-full mx-4 overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-orange-500 opacity-10 blur-3xl -z-10"></div>
        
        {/* Animated border corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div>
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.1) 50%, transparent 55%)",
            animation: "shine 3s infinite",
            zIndex: -1
          }}
        ></div>
        
        {/* Close button */}
        <motion.button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-amber-400 hover:text-amber-300 focus:outline-none"
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
        
        {/* Title with text gradient and glow */}
        <motion.h2 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{
            textShadow: "0 0 15px rgba(255, 153, 102, 0.5)"
          }}
        >
          {project.name}
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {project.desc}
        </motion.p>
        
        {/* Tech stack */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Tech Stack:</h3>
          <p className="text-gray-400">{project.techstackused || "Various technologies"}</p>
        </motion.div>
        
        {/* Action links */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-transparent text-amber-400 rounded-lg font-bold border border-amber-400 hover:bg-amber-500/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 153, 102, 0.3)"
              }}
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.5)"
              }}
            >
              View Live Demo
            </motion.a>
          )}
          
          {project.code && (
            <motion.a 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-transparent text-amber-400 rounded-lg font-bold border border-amber-400 hover:bg-amber-500/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 153, 102, 0.3)"
              }}
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.5)"
              }}
            >
              View Source Code
            </motion.a>
          )}
        </motion.div>
        
        {/* Scanline effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-5"
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
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
