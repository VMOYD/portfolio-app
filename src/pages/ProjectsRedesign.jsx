import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import StructuredData from "../components/StructuredData";

const projects = [
  { 
    id: 1,
    name: "VisionScript", 
    desc: "AI-powered OCR and deep learning image processing tool using OpenCV, Tesseract, and TensorFlow. Processes and analyzes images with advanced machine learning models.",
    fullDesc: "VisionScript is a comprehensive AI-driven solution that combines optical character recognition with deep learning for advanced image processing. Built with OpenCV for computer vision tasks, Tesseract OCR for text extraction, and TensorFlow for neural network models.",
    link: "", 
    code: "https://github.com/vmoyd/VisionScript", 
    image: "/project-placeholder.png",
    tags: ["Python", "TensorFlow", "OpenCV", "AI/ML", "Deep Learning"],
    category: "AI/ML",
    featured: true,
    status: "Completed"
  },
  { 
    name: "Portfolio Website", 
    desc: "Modern, performant portfolio built with React, Vite, and Framer Motion. Features SEO optimization, Core Web Vitals monitoring, and responsive design.",
    fullDesc: "A high-performance portfolio website showcasing projects and skills. Built with modern web technologies including React 18, Vite for blazing-fast builds, Tailwind CSS for styling, and Framer Motion for smooth animations. Implements best practices for SEO, accessibility, and performance.",
    link: "https://vyomdubey.com/", 
    code: "https://github.com/VMOYD/portfolio-app", 
    image: "/project-placeholder.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "SEO"],
    category: "Web Development",
    featured: true,
    status: "Live"
  },
  {
    name: "Selenium MultiScraper",
    desc: "High-performance multi-threaded web scraper for extracting student result data at scale. Built with Python and Selenium.",
    fullDesc: "A robust web scraping solution designed to extract large volumes of student result data from Bundelkhand University's website. Implements multi-threading for parallel data extraction, dramatically improving scraping speed and efficiency.",
    link: "",
    code: "https://github.com/vmoyd/selenium-speedscraper",
    image: "/project-placeholder.png",
    tags: ["Python", "Selenium", "Multithreading", "Web Scraping"],
    category: "Automation",
    featured: true,
    status: "Completed"
  },
  {
    name: "Code Visualizer",
    desc: "VSCode extension that visualizes code structure and flow, helping developers understand complex codebases.",
    fullDesc: "A Visual Studio Code extension that provides interactive visualizations of code structure, dependencies, and execution flow. Built with TypeScript and the VSCode Extension API to help developers navigate and understand large codebases more effectively.",
    link: "",
    code: "https://github.com/VMOYD/Code-Visualizer-VS-code-Extention-",
    image: "/project-placeholder.png",
    tags: ["TypeScript", "JavaScript", "VSCode API", "Developer Tools"],
    category: "Developer Tools",
    featured: false,
    status: "Completed"
  },
  {
    name: "Intrusion Detection System",
    desc: "Machine learning-based system to detect network intrusions and security threats in real-time.",
    fullDesc: "A security-focused project that uses machine learning algorithms to detect and classify network intrusion attempts. Analyzes network traffic patterns to identify potential security threats and anomalies.",
    link: "",
    code: "",
    image: "/project-placeholder.png",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Data Science"],
    category: "AI/ML",
    featured: false,
    status: "Completed"
  },
  { 
    name: "VoteX", 
    desc: "Secure online voting platform with user authentication and real-time vote counting.",
    fullDesc: "A secure web-based voting system designed to facilitate online elections. Features user authentication, encrypted vote storage, real-time vote tallying, and administrative dashboard for election management.",
    link: "", 
    code: "https://github.com/VMOYD/VoteX", 
    image: "/project-placeholder.png",
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    category: "Web Development",
    featured: false,
    status: "Completed"
  },
  { 
    name: "Sokoban Game", 
    desc: "Classic puzzle game where you push boxes onto target spots, built with Python and Pygame.",
    fullDesc: "A recreation of the classic Sokoban puzzle game using Python and Pygame. Features multiple levels, smooth animations, and intuitive controls. Implements game logic, collision detection, and level progression.",
    link: "", 
    code: "https://github.com/VMOYD/sokoban-game", 
    image: "/project-placeholder.png",
    tags: ["Python", "Pygame", "Game Development"],
    category: "Games",
    featured: false,
    status: "Completed"
  },
  { 
    name: "Library Management System", 
    desc: "Console-based system to manage books, borrowing records, and librarian functions.",
    fullDesc: "A comprehensive library management system built in C++ with file I/O operations. Manages book inventory, member records, borrowing and returning of books, and provides administrative functions for librarians.",
    link: "", 
    code: "https://github.com/VMOYD/library-management-system", 
    image: "/project-placeholder.png",
    tags: ["C++", "File I/O", "Data Structures"],
    category: "Systems",
    featured: false,
    status: "Completed"
  },
  { 
    name: "Past Preserve", 
    desc: "A digital time capsule web app for preserving memories and messages for the future.",
    fullDesc: "An innovative web application that allows users to create digital time capsules - storing memories, messages, photos, and videos to be opened at a future date. Built with modern full-stack technologies including React, Node.js, MongoDB, and Firebase for storage.",
    link: "", 
    code: "", 
    image: "/project-placeholder.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    category: "Web Development",
    featured: false,
    status: "In Development"
  }
];

const categories = ["All", "AI/ML", "Web Development", "Automation", "Developer Tools", "Games", "Systems"];

const ProjectsRedesign = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <StructuredData schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Vyom Dubey's Software Projects",
        "description": "A collection of innovative software projects by Vyom Dubey",
        "itemListElement": projects.map((project, index) => ({
          "@type": "SoftwareApplication",
          "position": index + 1,
          "name": project.name,
          "description": project.desc,
          "url": project.link || project.code,
          "applicationCategory": "DeveloperApplication",
          "author": {
            "@type": "Person",
            "name": "Vyom Dubey"
          }
        }))
      }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary pt-32 pb-16">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in AI/ML, cloud infrastructure, web development, and software engineering
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="relative py-8 bg-bg-secondary border-y border-border">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-glow"
                    : "bg-bg-elevated text-text-muted hover:text-text-primary hover:bg-bg-elevated/80 border border-border"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <motion.p 
            className="text-center text-text-muted mt-6"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </motion.p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="relative py-24 bg-bg-primary overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col overflow-hidden border-border hover:border-brand-primary/60 transition-all duration-300">
                    {/* Project Image Placeholder */}
                    <div className="relative w-full h-48 bg-gradient-to-br from-brand-primary/20 via-purple-500/10 to-brand-secondary/20 flex items-center justify-center overflow-hidden">
                      <span className="text-6xl opacity-30 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {project.category === "AI/ML" ? "🤖" : 
                         project.category === "Web Development" ? "🌐" :
                         project.category === "Automation" ? "⚡" :
                         project.category === "Developer Tools" ? "🛠️" :
                         project.category === "Games" ? "🎮" : "💻"}
                      </span>
                      
                      {/* Status badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          project.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/40" :
                          project.status === "In Development" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40" :
                          "bg-brand-primary/20 text-brand-primary border border-brand-primary/40"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Top gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-text-secondary text-sm mb-4 flex-1 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary rounded-md border border-brand-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium text-text-muted">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.link && (
                          <Button 
                            variant="primary" 
                            size="sm" 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            Live Demo
                          </Button>
                        )}
                        {project.code && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={project.link ? "flex-1" : "w-full"}
                          >
                            View Code
                          </Button>
                        )}
                        {!project.link && !project.code && (
                          <span className="text-text-muted text-sm italic w-full text-center py-2">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-text-muted">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsRedesign;
