import { motion } from "framer-motion";

const certificates = [
    { 
      certificate: "Google Cloud Computing Fundamentals", 
      provider: "Google Cloud", 
      issuedate: "JAN 2023", 
      desc: "Introduction to core computing services in Google Cloud.",
      image: "GCP-Computing-Fundamentals.png",
      url: "https://cloud.google.com/training"
    },
    { 
      certificate: "The Basics of Google Cloud Computing", 
      provider: "Google Cloud", 
      issuedate: "JUL 2023", 
      desc: "Fundamentals of cloud computing on Google Cloud.",
      image: "The-Basics-of-Google-Cloud-Compute.png",
      url: "https://cloud.google.com/training"
    },
    { 
      certificate: "Google Cloud App Engine Fundamentals", 
      provider: "Google Cloud", 
      issuedate: "AUG 2023", 
      desc: "Learn to deploy and manage applications with Google App Engine.",
      image: "App_Engine_GCP.png",
      url: "https://cloud.google.com/training"
    },
    { 
      certificate: "NVIDIA Deep Learning Institute Certification", 
      provider: "NVIDIA", 
      issuedate: "SEPT 2023", 
      desc: "Deep learning fundamentals and AI model training with NVIDIA.",
      image: "NVIDIA-DLI.jpeg",
      url: "https://www.nvidia.com/en-us/deep-learning-ai/education/"
    },
    { 
      certificate: "Google Cloud Networking Fundamentals", 
      provider: "Google Cloud", 
      issuedate: "December 2023", 
      desc: "Introduction to networking and security principles on Google Cloud.",
      image: "Network-Fundamentals-GCP.png",
      url: "https://cloud.google.com/training"
    },
    { 
      certificate: "Google Associate Cloud Engineer", 
      provider: "Google Cloud", 
      issuedate: "FEB 2024", 
      desc: "Proficiency in deploying and managing applications on Google Cloud.",
      image: "GCP-Computing-Fundamentals.png",
      url: "https://cloud.google.com/certification"
    },
    { 
      certificate: "AWS Certified Solutions Architect", 
      provider: "Amazon Web Services", 
      issuedate: "JUL 2024", 
      desc: "Validated expertise in AWS cloud solutions.",
      image: "AWS_Solution_Architecture.png"
    }
  ];
  

const Certificates = () => {
  return (
    <section 
      id="certificates" 
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
        padding: "4rem 2rem 8rem" // Adjusted padding
      }}
    >
      {/* Visual connection to Projects section - animated flowing element */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden h-20 z-10">
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-amber-400 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 1.5 }}
        />
      </div> */}

      {/* Grid background - matched with Projects */}
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
      
      {/* Ambient glow effects - matches Projects */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      
      {/* Scanline effect - matches Projects */}
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

      {/* Section transition decoration */}
      {/* <motion.div
        className="relative w-full max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="h-6 w-6 rounded-full bg-amber-500/20 border border-amber-400 relative">
            <motion.div 
              className="absolute inset-0 rounded-full bg-amber-400"
              animate={{ scale: [0.6, 1, 0.6], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-amber-400 via-transparent to-transparent"></div>
        </div>
      </motion.div> */}

      {/* Title with animated glow - matched with Projects */}
      {/* <h1 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)"
        }}
      >
        Certificates
      </h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto relative z-10">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative cursor-pointer group transition-all duration-300"
          >
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full"
            >
              <div className="relative p-6 bg-black/60 backdrop-blur-md rounded-lg border border-amber-900/50 overflow-hidden h-full">
                {/* Animated border corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
                
                {/* Certificate image */}
                <div className="mb-4 relative group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-md border border-amber-900/30 bg-gradient-to-b from-black to-gray-900">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.certificate} 
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "";
                        }}
                      />
                    ) : (
                      <div className="text-amber-500/40 text-5xl font-bold">
                        {cert.provider?.charAt(0) || "C"}
                      </div>
                    )}
                  </div>
                  
                  {/* Shine effect on image hover - same as Projects cards */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.1) 50%, transparent 55%)"
                    }}
                    animate={{
                      left: ["-100%", "100%"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  {cert.certificate}
                </h3>
                
                <p className="text-gray-300 mb-1 flex items-center">
                  <span className="w-20 inline-block opacity-70">Provider:</span> 
                  <span className="ml-2">{cert.provider}</span>
                </p>
                
                <p className="text-gray-300 mb-1 flex items-center">
                  <span className="w-20 inline-block opacity-70">Issued:</span>
                  <span className="ml-2">{cert.issuedate}</span>
                </p>
                
                <p className="text-gray-300 mt-2 border-t border-amber-900/30 pt-2">{cert.desc}</p>
                
                {/* View button - styled to match Projects */}
                {/* <motion.div 
                  className="mt-3 flex justify-end"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    opacity: 1
                  }}
                >
                  <span className="text-sm text-amber-400 border border-amber-900/50 px-3 py-1 rounded-md inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </span>
                </motion.div> */}
                
                {/* Hover glow effect - matches Projects cards */}
                <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </a>
          </motion.div>

        ))}

      </div>
      <div>
        
      </div>
        <motion.div
          className="flex justify-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => window.location.href = '#projects'}
            className="relative overflow-hidden group bg-transparent text-amber-400 px-8 py-4 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
            whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(255, 153, 102, 0.6)",
            backgroundColor: "rgba(255, 153, 102, 0.1)"
            }}
            style={{
            textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
            Projects 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3 " />
            </svg>
            </span>
            
            <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(45deg, transparent 45%, rgba(255, 153, 102, 0.2) 50%, transparent 55%)",
              animation: "shine 3s infinite",
            }}
            />
            
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-400"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-400"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-400"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-400"></div>
          </motion.button>
        </motion.div>

        {/* Bottom decoration - transition to footer */}
      <motion.div 
        className="w-full max-w-4xl mx-auto mt-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <div className="mx-4">
            <motion.div
              className="w-6 h-6 rotate-45 border-2 border-amber-400/50"
              animate={{ rotate: 225 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
          </div>
          <div className="h-px w-1/3 bg-gradient-to-r from-amber-400/50 to-transparent"></div>
        </div>
      </motion.div>
      
      
      {/* Add required keyframes for animations */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Certificates;
