import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import StructuredData from "../components/StructuredData";
import { PersonSchema } from "../utils/schemas";

// Timeline Data
const timeline = [
  {
    year: "2025-Present",
    title: "Software Engineer-2",
    company: "NetApp",
    desc: "After my AI internship at NetApp, I was converted to a Software Developer on Cloud Volume Service, primarily working on Azure NetApp Files.",
    iconPath: "/icons8-netapp-logo.svg",
    path: "https://www.netapp.com/products/cloud-services/cloud-volumes/",
  },
  {
    year: "2024-2025",
    title: "AI Intern",
    company: "NetApp",
    desc: "Built AI-driven solutions, diving deep into machine learning, automation, and real-world problem-solving.",
    iconPath: "/icons8-netapp-logo.svg",
    path: "https://www.netapp.com/",
  },
  {
    year: "2023-2024",
    title: "Master's Degree (MCA)",
    company: "VIT Vellore",
    desc: "Specialized in AI, cloud computing, and software development. Completed projects in machine learning and distributed systems.",
    iconPath: "/Vellore_Institute_of_Technology_seal_2017.svg.png",
    path: "https://www.vit.ac.in/",
  },
  {
    year: "2020-2023",
    title: "Bachelor's Degree (BCA)",
    company: "Bundelkhand University",
    desc: "Built foundation in programming, data structures, algorithms, and software engineering principles.",
    iconPath: "/bundelkhand_university_logo.png",
    path: "https://www.bujhansi.ac.in/en",
  },
];

// Skills organized by category
const skills = {
  "Cloud & Infrastructure": ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  "Frontend Development": ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
  "Backend Development": ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "AI/ML": ["TensorFlow", "OpenCV", "PyTorch", "Scikit-learn"],
};

const AboutRedesign = () => {
  return (
    <>
      <StructuredData schema={PersonSchema} />
      
      {/* Hero Section with Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary pt-24 pb-16">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
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
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-brand-primary/30 shadow-2xl shadow-brand-primary/20">
                {/* Your Photo - clear and sharp */}
                <img 
                  src="/photo.jpg" 
                  alt="Vyom Dubey - Software Development Engineer" 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle bottom gradient overlay - doesn't blur the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent pointer-events-none"></div>
                
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
              
              {/* Decorative elements */}
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
            </motion.div>
            
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Hi! I'm <span className="text-brand-primary font-semibold">Vyom Dubey</span>, a Software Development Engineer II at <span className="text-brand-secondary font-semibold">NetApp</span>, specializing in cloud infrastructure and AI-driven solutions.
                </p>
                
                <p>
                  I build scalable systems on <strong className="text-text-primary">AWS, Azure, and GCP</strong>, working primarily with <strong className="text-text-primary">Azure NetApp Files</strong> to deliver enterprise-grade cloud storage solutions.
                </p>
                
                <p>
                  My journey in tech started with a simple HTML page in 9th grade and evolved into a passion for building intelligent systems that solve real-world problems.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="relative py-24 bg-bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <SectionHeader 
            title="Skills & Expertise" 
            subtitle="Technologies I work with to build scalable solutions"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-elevated border border-border rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-brand-primary/10 text-text-primary rounded-full border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="relative py-24 bg-gradient-to-b from-bg-primary to-bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary opacity-60"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <SectionHeader 
            title="My Journey" 
            subtitle="From first line of code to cloud engineering"
            align="center"
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-purple-500 to-brand-secondary transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-bg-elevated border-2 border-brand-primary/50 overflow-hidden flex items-center justify-center shadow-lg shadow-brand-primary/20">
                    <img 
                      src={event.iconPath} 
                      alt={`${event.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    className="bg-bg-elevated border border-border rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-brand-secondary text-sm font-semibold">{event.year}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-1">
                      {event.title}
                    </h3>
                    <p className="text-brand-primary text-sm font-medium mb-3">
                      {event.company}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificates Section */}
      <section className="relative py-24 bg-bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
        
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #d4af37 1px, transparent 1px),
            linear-gradient(to bottom, #d4af37 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent)',
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
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <SectionHeader 
            title="Certifications & Training" 
            subtitle="Professional certifications in cloud computing and AI"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-bg-elevated border border-border rounded-xl p-6 hover:border-brand-primary/60 transition-all duration-300 overflow-hidden"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-secondary/40 transition-all duration-300 group-hover:border-brand-secondary"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-secondary/40 transition-all duration-300 group-hover:border-brand-secondary"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-secondary/40 transition-all duration-300 group-hover:border-brand-secondary"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-secondary/40 transition-all duration-300 group-hover:border-brand-secondary"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-secondary/0 group-hover:from-brand-primary/5 group-hover:to-brand-secondary/5 transition-all duration-300 rounded-xl"></div>
                
                {/* Certificate badge/image */}
                <div className="relative mb-4">
                  <div className="aspect-video w-full flex items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-bg-secondary to-bg-primary/50">
                    {cert.image ? (
                      <img 
                        src={`/${cert.image}`}
                        alt={cert.certificate}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full flex items-center justify-center" style={{ display: cert.image ? 'none' : 'flex' }}>
                      <div className="text-brand-secondary text-4xl font-bold opacity-40">
                        {cert.provider?.charAt(0) || "C"}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Certificate details */}
                <div className="relative">
                  <h3 className="font-heading text-base font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {cert.certificate}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-brand-secondary">
                      {cert.provider}
                    </span>
                    <span className="text-xs text-text-muted">•</span>
                    <span className="text-xs text-text-muted">
                      {cert.issuedate}
                    </span>
                  </div>
                  
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {cert.desc}
                  </p>
                </div>
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, transparent 45%, rgba(212, 175, 55, 0.1) 50%, transparent 55%)',
                  }}
                  animate={{
                    left: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear"
                  }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Certificate data
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
    issuedate: "DEC 2023", 
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
    image: "AWS_Solution_Architecture.png",
    url: "https://aws.amazon.com/certification/"
  }
];

export default AboutRedesign;
