import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
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

  // Check if link is active
  const isActiveLink = (link) => {
    const path = location.pathname;
    if (link === "Home") return path === "/" || path === "/redesign";
    return path.toLowerCase().includes(link.toLowerCase());
  };

  return (
    <header 
      className={`fixed top-0 w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-bg-primary/60 backdrop-blur-sm"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="relative group">
        <img 
          src="/VD.png" 
          alt="Vyom Dubey Logo" 
          className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
        />
        {/* Subtle glow on hover only */}
        <div className="absolute -inset-2 bg-brand-primary opacity-0 group-hover:opacity-20 blur-lg rounded-full transition-opacity duration-300 -z-10"></div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {links.map((link) => {
          const isActive = isActiveLink(link);
          return (
            <Link
              key={link}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
              className={`font-medium text-base relative group transition-colors duration-300 ${
                isActive ? "text-brand-primary" : "text-text-primary hover:text-brand-primary-light"
              }`}
            >
              {link}
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              {/* Hover underline for non-active links */}
              {!isActive && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary-light group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="md:hidden relative text-text-primary hover:text-brand-primary transition-colors duration-300 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Mobile Dropdown Menu */}
      <motion.div 
        className="absolute top-full right-6 w-56 mt-2 bg-bg-elevated backdrop-blur-md border border-border rounded-lg shadow-xl md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="py-2">
          {links.map((link) => {
            const isActive = isActiveLink(link);
            return (
              <Link
                key={link}
                to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 font-medium transition-colors duration-200 ${
                  isActive 
                    ? "text-brand-primary bg-brand-primary/10" 
                    : "text-text-primary hover:text-brand-primary hover:bg-brand-primary/5"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;