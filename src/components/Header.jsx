import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full px-4 md:px-8 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,153,102,0.15)]" 
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      {/* Animated border bottom - updated to amber/orange */}
      <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden">
        <motion.div 
          className="h-px w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
        />
      </div>

      {/* Logo - updated glow to amber */}
      <div className="relative">
        <img 
          src="/VD.png" 
          alt="Vyom Dubey Logo" 
          className="h-12 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -inset-1 bg-amber-500 opacity-20 blur-md rounded-full -z-10"></div>
      </div>

      {/* Desktop Navigation - updated colors to amber/orange */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link}
            to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
            className="text-gray-300 text-lg relative group"
          >
            <span className="relative z-10 transition-colors hover:text-amber-400">
              {link}
            </span>
            
            {/* Hover effects - updated to amber */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-amber-400 blur-sm rounded transition-opacity duration-300"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button - updated glow to amber */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="text-2xl text-gray-200 md:hidden relative"
        aria-label="Toggle menu"
      >
        <span className="absolute -inset-2 bg-amber-500 opacity-0 hover:opacity-20 blur-md rounded-full transition-opacity duration-300"></span>
        {isMenuOpen ? <FaTimes className="relative z-10" /> : <FaBars className="relative z-10" />}
      </button>

      {/* Mobile Dropdown Menu - updated colors */}
      <div 
        className={`absolute top-full right-4 w-56 mt-2 bg-gray-900/90 backdrop-blur-md border border-amber-900/50 rounded-lg shadow-lg shadow-amber-500/10 md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-2">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:bg-amber-900/30 hover:text-amber-400 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
        
        {/* Animated border - updated to amber */}
        <div className="absolute inset-0 pointer-events-none border border-amber-500/30 rounded-lg">
          <div className="absolute top-0 left-0 h-px w-1/2 bg-amber-400/50"></div>
          <div className="absolute bottom-0 right-0 h-px w-1/2 bg-amber-400/50"></div>
        </div>

        {/* Corner accents - matching other components */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-[1px] border-l-[1px] border-amber-400 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-amber-400 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-amber-400 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1px] border-r-[1px] border-amber-400 rounded-br-lg"></div>
      </div>
      
      {/* Glitch effect on the entire header - subtle scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-scanline opacity-5"></div>
    </header>
  );
};

// Add this to your global CSS or component-level CSS using styled-jsx
const HeaderStyles = () => {
  return (
    <style jsx global>{`
      @keyframes moveGradient {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      .bg-scanline {
        background: repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.5) 2px,
          rgba(0, 0, 0, 0.5) 4px
        );
      }
    `}</style>
  );
};

const HeaderWithStyles = () => (
  <>
    <HeaderStyles />
    <Header />
  </>
);

export default Header;