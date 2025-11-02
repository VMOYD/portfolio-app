import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect similar to header
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

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/VMOYD",
      label: "GitHub",
      color: "hover:text-brand-primary"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://x.com/dubey_vyom_",
      label: "Twitter",
      color: "hover:text-brand-primary-light"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/vyom-dubey/",
      label: "LinkedIn",
      color: "hover:text-brand-primary"
    },
    { 
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw?sub_confirmation=1",
      label: "YouTube",
      color: "hover:text-brand-secondary"
    }
  ];

  return (
    <footer className="relative w-full bg-bg-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img 
                src="/VD.png" 
                alt="Vyom Dubey" 
                className="h-8"
              />
              <span className="font-heading font-bold text-lg text-text-primary">
                Vyom Dubey
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              Building scalable cloud systems & AI tools
            </p>
          </div>
          
          {/* Center: Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-text-secondary text-2xl transition-colors duration-300 ${link.color}`}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Vyom Dubey
            </p>
            <p className="text-xs text-text-muted mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
        
        {/* Decorative gradient line */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-center text-xs text-text-muted">
            Designed with <span className="text-brand-secondary">☕</span> and <span className="text-brand-primary">💜</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;