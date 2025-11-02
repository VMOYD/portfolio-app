import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - Vyom Dubey Portfolio"
        description="The requested page could not be found. Navigate back to Vyom Dubey's portfolio homepage to explore projects and professional information."
        keywords="404, page not found, Vyom Dubey portfolio, navigation"
        type="website"
      />
      
      <section 
        className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
        style={{
          background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
          position: "relative"
        }}
        role="main"
        aria-label="Page not found error"
      >
        {/* Grid background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-8"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 153, 102, 0.5)",
                "0 0 40px rgba(255, 153, 102, 0.8)",
                "0 0 20px rgba(255, 153, 102, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The page you're looking for doesn't exist. Let's get you back on track!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <motion.button
                className="bg-transparent text-amber-400 px-8 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(255, 153, 102, 0.6)",
                  backgroundColor: "rgba(255, 153, 102, 0.1)"
                }}
                aria-label="Go back to homepage"
              >
                Go Home
              </motion.button>
            </Link>
            
            <Link to="/projects">
              <motion.button
                className="bg-transparent text-white px-8 py-3 rounded-lg font-bold shadow-lg border border-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                aria-label="View my projects"
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default NotFound;