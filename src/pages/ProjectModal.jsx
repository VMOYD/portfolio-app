import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const ProjectModal = ({ project, onClose }) => {
  console.log("ProjectModal", project);
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!project?.code) return;
    
    const fetchReadme = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Convert GitHub URL to API URL format
        const repoUrl = project.code;
        const apiUrl = repoUrl.replace('github.com', 'api.github.com/repos') + '/readme';
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status}`);
        }
        
        const data = await response.json();
        
        // The content is base64 encoded, so we need to decode it
        if (data.content && data.encoding === 'base64') {
          // Properly decode base64 content with UTF-8 support for emojis
          const base64 = data.content.replace(/\n/g, '');
          const binary = atob(base64);
          const bytes = new Uint8Array(binary.length);
          
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          
          // Convert bytes to UTF-8 string
          const decodedContent = new TextDecoder('utf-8').decode(bytes);
          
          // Ensure Markdown line breaks are properly preserved
          // This ensures ReactMarkdown renders newlines correctly
          setReadmeContent(decodedContent);
        } else {
          throw new Error('Unexpected response format from GitHub API');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching README:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchReadme();
  }, [project]);
  
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
        className="relative bg-black/60 backdrop-blur-md p-8 rounded-lg border border-amber-900/50 max-w-4xl w-full mx-4 overflow-y-auto max-h-[80vh]"
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
        {/* <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div> */}
        
        {/* Shine effect */}
        {/* <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.1) 50%, transparent 55%)",
            animation: "shine 3s infinite",
            zIndex: -1
          }}
        ></div> */}
        
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
        
        {/* README Content Section */}
        {project.code && (
          <motion.div
            className="mt-8 border-t border-amber-900/50 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-amber-300 mb-4">For Nerds:</h3>
            
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-400"></div>
                <span className="ml-3 text-amber-300">Loading project details...</span>
              </div>
            )}
            
            {error && (
              <div className="bg-red-900/20 border border-red-800 p-4 rounded-md text-red-300">
                <p>Could not load README: {error}</p>
              </div>
            )}
            
            {!isLoading && !error && readmeContent && (
              <div className="markdown-content bg-black/30 rounded-md p-4 text-gray-300 prose prose-invert prose-sm max-w-none overflow-x-auto">
                <div className="prose prose-invert max-w-none"
                  style={{ overflowY: "auto" }}>
                  <ReactMarkdown>{readmeContent}</ReactMarkdown>
                </div>
              </div>
            )}
          </motion.div>
        )}
        
        {/* Action links */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
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
        
        {/* Code pattern background effect */}
        {/* <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 40 L40 20 L45 25 L30 40 L45 55 L40 60z' fill='%23ffb74d' /%3E%3Cpath d='M60 40 L80 20 L75 25 L60 40 L75 55 L80 60z' fill='%23ffb74d' /%3E%3C/svg%3E\")",
            backgroundSize: "100px 100px",
            zIndex: -1
          }}
        /> */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"></div>

      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    techstackused: PropTypes.string,
    link: PropTypes.string,
    code: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired
};

export default ProjectModal;