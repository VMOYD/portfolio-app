import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import TechStackTerminal from "../components/TechStackTerminal";
import StructuredData from "../components/StructuredData";
import { PersonSchema } from "../utils/schemas";

// Featured projects - top 3
const featuredProjects = [
  {
    id: 1,
    title: "VisionScript",
    description: "AI-powered OCR and deep learning image processing tool using OpenCV, Tesseract, and TensorFlow.",
    tags: ["Python", "TensorFlow", "OpenCV", "AI/ML"],
    github: "https://github.com/vmoyd/VisionScript",
    live: null,
    image: "/project-placeholder.png", // You'll replace with actual images
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Modern, performant portfolio built with React, Vite, and Framer Motion. Features SEO optimization and Core Web Vitals monitoring.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/VMOYD/portfolio-app",
    live: "https://vyomdubey.com/",
    image: "/project-placeholder.png",
  },
  {
    id: 3,
    title: "Selenium MultiScraper",
    description: "High-performance multi-threaded web scraper for extracting student result data at scale.",
    tags: ["Python", "Selenium", "Multithreading"],
    github: "https://github.com/vmoyd/selenium-speedscraper",
    live: null,
    image: "/project-placeholder.png",
  },
];

const HomeRedesign = () => {
  return (
    <>
      <StructuredData schema={PersonSchema} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.2), transparent)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), rgba(251, 191, 36, 0.2), transparent)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-brand-primary/20 rounded-lg rotate-12"
          animate={{
            rotate: [12, 24, 12],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border-2 border-brand-secondary/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.p 
              className="text-brand-secondary font-medium text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            
            {/* Name with gradient */}
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
              Vyom Dubey
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              SDE II @ <span className="text-brand-primary font-semibold">NetApp</span> | 
              Building Scalable Cloud Systems & AI Automation Tools
            </p>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="lg">
                  Let's Connect
                </Button>
              </Link>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              className="mt-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-text-muted text-sm mb-2">Scroll to explore</p>
              <div className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Tech Snapshot Section */}
      <section className="relative py-24 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
        
        <motion.div
          className="absolute top-1/2 left-10 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <SectionHeader 
            title="Tech Stack" 
            subtitle="Interactive file tree of technologies I master"
            align="center"
          />
          
          {/* New Terminal Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TechStackTerminal />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="relative py-24 bg-bg-primary overflow-hidden">
        {/* Royal purple accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary opacity-60"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-10 right-10 w-40 h-40 border border-brand-primary/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-brand-secondary/10 rounded-full"></div>
        
        {/* Ambient glow */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A selection of my recent work in cloud engineering and AI"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Card className="flex flex-col h-full relative overflow-hidden border-border hover:border-brand-primary/60 transition-all duration-300">
                  {/* Royal corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top gradient border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Image Placeholder */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-brand-primary/20 via-purple-500/10 to-brand-secondary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl opacity-30 relative z-10 transform group-hover:scale-110 transition-transform duration-300">🚀</span>
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-text-secondary mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary-light rounded-full border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.live && (
                      <Button 
                        variant="primary" 
                        size="sm" 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.live ? "flex-1" : "w-full"}
                    >
                      Code
                    </Button>
                  </div>
                  
                  {/* Bottom decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-secondary to-brand-primary group-hover:w-full transition-all duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* View All Projects CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <Button variant="ghost" size="lg">
                View All Projects →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Teaser Section */}
      <section className="relative py-24 bg-gradient-to-br from-bg-secondary to-bg-primary overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #6366f1 0px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #6366f1 0px, transparent 1px, transparent 40px)
          `,
        }}></div>
        
        {/* Floating accent shapes */}
        <motion.div
          className="absolute top-20 right-1/4 w-20 h-20 border-2 border-brand-secondary/20 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-brand-primary to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Blending engineering precision with creative energy — I build systems that scale and stories that inspire.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Currently at NetApp, I work on Cloud Volume Service and Azure NetApp Files, focusing on scalable cloud infrastructure and AI-driven automation. 
                My journey spans AI research, full-stack development, and cloud architecture.
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Learn More About Me
                </Button>
              </Link>
            </motion.div>
            
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Enhanced visual with royal colors */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/30 via-purple-500/20 to-brand-secondary/30 flex items-center justify-center border-2 border-brand-primary/30 shadow-2xl shadow-brand-primary/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 backdrop-blur-sm"></div>
                <span className="text-9xl opacity-40 relative z-10">👨‍💻</span>
                
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-brand-primary/40"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 border-2 border-brand-primary/40 rounded-lg -z-10"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-brand-secondary/40 rounded-lg -z-10 rotate-12" />
              
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-2xl -z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-bg-primary to-bg-secondary border-t border-brand-primary/20 overflow-hidden">
        {/* Royal gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary"></div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-brand-primary/30"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-brand-secondary/30"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-brand-secondary/30"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-brand-primary/30"></div>
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-brand-primary/10 via-purple-500/5 to-brand-secondary/10 rounded-3xl border-2 border-brand-primary/30 shadow-2xl shadow-brand-primary/10">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-brand-primary/50 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-brand-secondary/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-brand-secondary/50 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-brand-primary/50 rounded-br-lg"></div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
                  Let's Build Something Together
                </span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Open to collaborations, speaking opportunities, and innovative projects. 
                Let's connect and create impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="shadow-glow hover:shadow-glow-gold">
                    Get In Touch
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="lg"
                  href="https://www.linkedin.com/in/vyom-dubey/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </Button>
              </div>
              
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 -z-10 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeRedesign;
