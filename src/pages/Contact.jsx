import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import StructuredData from "../components/StructuredData";
import { PersonSchema } from "../utils/schemas";

const ContactMe = () => {
  return (
    <>
      <StructuredData schema={PersonSchema} />
      
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
        style={{
          background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
          position: "relative",
        }}
        role="main"
        aria-label="Contact information and social media links for Vyom Dubey"
      >
      {/* Grid background - matched from Home.jsx */}
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
      
      {/* Ambient glow effects - matches Home.jsx */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      
      {/* Scanline effect - matches Home.jsx */}
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
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-black/60 backdrop-blur-md rounded-lg p-8 border border-amber-900/50">
        {/* Title with animated glow - matches Home.jsx and About.jsx */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)"
          }}
        >
          Contact Me
        </motion.h1>
        
        {/* Email with animation */}
        <motion.p
          className="text-xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Email: <span className="text-amber-400">vyomdubeykp@gmail.com</span>
        </motion.p>
        
        {/* Animated border corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div>
        
        {/* Social links with enhanced animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SocialLink href="https://github.com/VMOYD" aria-label="GitHub">
            <FaGithub className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.linkedin.com/in/vyom-dubey/" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://x.com/dubey_vyom_" aria-label="Twitter">
            <FaTwitter className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw?sub_confirmation=1" aria-label="YouTube">
            <FaYoutube className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.codechef.com/users/imperial_head" aria-label="CodeChef">
            <SiCodechef className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://leetcode.com/u/VMOY/" aria-label="LeetCode">
            <SiLeetcode className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.geeksforgeeks.org/user/vyom_dubey/" aria-label="GeeksforGeeks">
            <SiGeeksforgeeks className="text-3xl md:text-4xl" />
          </SocialLink>
        </motion.div>
        
        {/* Contact form or additional info could go here */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-300 mb-6">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:vyomdubeykp@gmail.com"
              className="inline-block bg-transparent text-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                backgroundColor: "rgba(255, 153, 102, 0.1)"
              }}
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
              }}
            >
              Send Email
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1Le6HlSSsj40UfJ4xCL2MJK7tCKCp3Xmu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                backgroundColor: "rgba(255, 153, 102, 0.1)"
              }}
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
              }}
            >
              <FaFileDownload className="text-lg" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

const SocialLink = ({ href, children, ariaLabel }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 relative group"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      <motion.div
        className="absolute -inset-2 bg-amber-500/20 rounded-full -z-10 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.6 }}
        whileHover={{ 
          scale: 1, 
          boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)" 
        }}
      />
    </motion.a>
  );
};

export default ContactMe;
