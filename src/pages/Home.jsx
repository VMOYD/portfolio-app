import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStackShowcase from "./TechStackDisplay";
import StructuredData from "../components/StructuredData";
import { PersonSchema } from "../utils/schemas";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const h3Ref = useRef(null);
  const sectionRef = useRef(null);
  const spiralRef = useRef(null);
  
  // Animation for text elements
  useEffect(() => {
    if (!h3Ref.current) return;
    
    const splitText = new SplitType(h3Ref.current, { types: "words" });
  
    gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 90%",
        end: "+=100%",
        scrub: 1,
      },
    })
    .fromTo(
      splitText.words,
      { color: "#ffcc66", opacity: 0.1 },
      { color: "#ff9966", opacity: 1, stagger: 0.1, duration: 1 }
    );
    
    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);
  
  // Spiral background animation
  useEffect(() => {
    if (!spiralRef.current) return;
    
    gsap.to(spiralRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <>
      <StructuredData schema={PersonSchema} />
      <section
        id="home"
        ref={sectionRef}
        className="flex flex-col justify-center items-center text-center bg-black overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
          minHeight: "100vh",
          position: "relative"
        }}
        role="banner"
        aria-label="Home page hero section"
      >
      {/* Grid background */}
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
      
      {/* Spiral effect in background */}
      <div 
        ref={spiralRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-10 pointer-events-none"
        style={{
          background: `conic-gradient(
            from 0deg,
            rgba(255, 153, 102, 0),
            rgba(255, 153, 102, 0.3),
            rgba(255, 153, 102, 0.5),
            rgba(255, 153, 102, 0.3),
            rgba(255, 153, 102, 0)
          )`,
          borderRadius: '50%',
          filter: 'blur(8px)'
        }}
      ></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center w-full"
      >
        {/* Header section */}
        <header 
          className="z-20 w-full flex justify-center" 
          style={{marginTop: "30vh", marginBottom: "30vh"}}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 pb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)"
            }}
          >
            <span itemProp="name">Hey, I&apos;m Vyom!</span> <br /> 
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Welcome to my corner <br /> of the internet!
            </motion.span>
          </motion.h1>
          
          {/* Animated glitch line */}
          <motion.div 
            className="absolute h-px w-3/4 bg-amber-400 bottom-0 left-1/2 -translate-x-1/2"
            animate={{ 
              x: ["-5%", "5%"],
              opacity: [0.3, 0.7, 0.3],
              width: ["70%", "75%", "70%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />
        </header>
        
        {/* Tech stack section */}
        <div className="relative z-10 w-full flex justify-center h-auto mb-20">
          <TechStackShowcase />
        </div>
        
        {/* About me section */}
        <article className="relative z-10 mt-10text-center min-h-[70vh]" role="article" aria-label="About Vyom Dubey">
          <h2 
            ref={h3Ref} 
            className="text-xl mb-20 md:text-2xl font-bold text-white tracking-wide px-4 md:px-0"
            style={{
              textShadow: "0 0 5px rgba(255, 153, 102, 0.3)"
            }}
          >
            <span itemProp="description">
              Tech enthusiast with a strong foundation in AI, cybersecurity, and web development. <br />
              I enjoy creating innovative, user-friendly, and secure applications <br />
              that solve real-world problems. Always exploring new technologies.
            </span>
          </h2>
          
          {/* CTA button */}
          <motion.div 
            className=" text-center"
            style={{marginTop: "30vh"}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-amber-400 text-xl mb-4"
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
              Check out my About section!
            </motion.h4>
            
            <Link to="/about">
              <motion.div
                className="inline-block bg-transparent text-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                  backgroundColor: "rgba(255, 153, 102, 0.1)"
                }}
                style={{
                  textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
                }}
              >
                Go to About
              </motion.div>
            </Link>
          </motion.div>
        </article>
      </motion.div>
      
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
    </section>
    </>
  );
};

export default Home;