import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StructuredData from "../components/StructuredData";
import { PersonSchema, FAQSchema } from "../utils/schemas";

// Timeline Data
const timeline = [
  {
    year: "2025-Present",
    title: "Software Engineer-2",
    desc: "After my AI internship at NetApp, I was converted to a Software Developer on Cloud Volume Service, primarily working on Azure NetApp Files.",
    iconPath: "icons8-netapp-logo.svg",
    path: "https://www.netapp.com/products/cloud-services/cloud-volumes/",
  },
  {
    year: "2024-2025",
    title: "AI Intern",
    desc: "Currently working as an AI Intern at NetApp, building AI-driven solutions. Diving deep into machine learning, automation, and real-world problem-solving while making models smarter (and hopefully not self-aware).",
    iconPath: "icons8-netapp-logo.svg",
    path: "https://www.netapp.com/",
  },
  {
    year: "2023-2024",
    title: "Master's Degree",
    desc: "Completed my MCA from VIT Vellore, where I spent countless nights debugging, optimizing, and surviving deadlines. Specialized in AI, cloud computing, and software development while working on projects that made me question my life choices (but in a good way).",
    iconPath: "Vellore_Institute_of_Technology_seal_2017.svg.png",
    path: "https://www.vit.ac.in/",
  },
  {
    year: "2020-2023",
    title: "Bachelor's Degree",
    desc: "Earned my BCA from Bundelkhand University, Jhansi. This is where my coding journey truly kicked off—building projects, exploring new tech, and realizing that Stack Overflow is a coder's best friend.",
    iconPath: "bundelkhand_university_logo.png",
    path: "https://www.bujhansi.ac.in/en",
  },
  {
    year: "2016",
    title: "Started Coding",
    desc: "Started coding in class 9 with HTML, thinking I was hacking the matrix. Built my first webpage with 'blink' tags and bright colors—because who needed UI/UX back then? That moment ignited my love for development!",
    iconPath: "dragon.png",
    path: "",
  },
  {
    year: "2002 (Born!)",
    title: "The Beginning",
    desc: "The origin story of a curious mind who would one day tinker with AI and build cool things. From baby steps to keystrokes, the journey began with an insatiable curiosity for how things work.",
    iconPath: "brain-ok3.png",
    path: "",
  },
];

const About = () => {
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StructuredData schema={PersonSchema} />
      <StructuredData schema={FAQSchema} />
      
      <section 
        id="about" 
        className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
        style={{
          background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
          position: "relative"
        }}
        role="main"
        aria-label="About Vyom Dubey - Professional background and career journey"
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

      <div className="w-full max-w-6xl mt-10 mx-auto px-4 md:px-8 py-16 z-10">
        {/* Title with animated glow - updated to match Home.jsx text style */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)", marginTop: "0vh"
          }}
        >
          My Career Timeline
        </motion.h1>
        
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Timeline vertical line with animated gradient */}
          <div className="absolute w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 h-full left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
            {/* Animated nodes that travel along the timeline */}
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-amber-400 left-1/2 transform -translate-x-1/2"
              animate={{ 
                top: ["0%", "100%", "0%"],
                boxShadow: [
                  "0 0 10px 2px rgba(255, 153, 102, 0.7)",
                  "0 0 15px 3px rgba(255, 153, 102, 0.7)",
                  "0 0 10px 2px rgba(255, 153, 102, 0.7)"
                ]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            
            {/* Fixed nodes at the top and bottom */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400" style={{ boxShadow: "0 0 15px 5px rgba(255, 153, 102, 0.4)" }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500" style={{ boxShadow: "0 0 15px 5px rgba(255, 153, 102, 0.4)" }}></div>
          </div>
          
          {/* Timeline items */}
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center w-full my-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon container - improved mobile positioning */}
              <div className="absolute z-20 w-16 h-16 flex items-center justify-center md:left-1/2 md:transform md:-translate-x-1/2 left-0">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-900 border-2 border-amber-500/50 overflow-hidden relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10 
                  }}
                  style={{
                    zIndex: 30, // Ensure icon is always on top
                    boxShadow: "0 0 10px rgba(255, 153, 102, 0.5)"
                  }}
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-amber-400 opacity-20 blur-sm"></div>
                  
                  {/* Link wrapper with improved image handling */}
                  <a 
                    href={event.path || "#"} 
                    target={event.path ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block w-full h-full flex items-center justify-center"
                  >
                    <img 
                      src={`/${event.iconPath}`} 
                      alt={`${event.title} icon`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-icon.png";
                      }}
                    />
                  </a>
                  
                  {/* Animated pulse effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-50"></div>
                </motion.div>
              </div>
              
              {/* Content box - improved mobile positioning */}
              <div className={`relative ${
                index % 2 === 0 ? 'md:mr-12 ml-8 md:ml-0' : 'md:ml-12 ml-8'
              } w-4/5 md:w-5/12 mt-4 md:mt-0`}>
                <motion.div 
                  className="relative p-6 rounded-lg bg-black/60 backdrop-blur-md border border-amber-900/50 overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(255, 153, 102, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-amber-300 transition-colors duration-300">{event.title}</h3>
                  <p className="text-sm italic text-orange-400 mb-2">{event.year}</p>
                  <p className="text-gray-300">{event.desc}</p>
                  
                  {/* Glitch effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 bg-amber-900/20"
                    whileHover={{ opacity: [0, 0.2, 0, 0.1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
                  ></motion.div>
                  
                  {/* Animated border corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
                  
                  {/* Shine effect animation */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{
                      background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.1) 50%, transparent 55%)",
                      animation: "shine 3s infinite",
                    }}
                  ></div>
                </motion.div>
                
                {/* Connecting line to the timeline */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'left-[-30px] md:right-[-30px] md:left-auto' : 'left-[-30px]'
                } w-7 h-1 bg-amber-500/50`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Projects CTA section with enhanced animations - updated to match Home.jsx style */}
        {/* <motion.div 
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-2xl font-bold text-amber-400 mb-6 relative inline-block"
            animate={{
              textShadow: [
                "0 0 5px rgba(255, 153, 102, 0.5)",
                "0 0 15px rgba(255, 153, 102, 0.8)",
                "0 0 5px rgba(255, 153, 102, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Check out my Project section!
          </motion.h4>
          
          <motion.div>
            <Link
              to="/projects"
              className="inline-block bg-transparent text-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
              }}
            >
              <motion.span
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                  backgroundColor: "rgba(255, 153, 102, 0.1)"
                }}
                className="inline-block w-full"
              >
                Projects
              </motion.span>
            </Link>
          </motion.div>
        </motion.div> */}
      </div>
      
      {/* Add required CSS for animations */}
      <style jsx>{`
        @keyframes moveGradient {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
    </>
  );
};

export default About;