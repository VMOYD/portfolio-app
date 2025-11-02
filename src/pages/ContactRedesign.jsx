import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaFileDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import StructuredData from "../components/StructuredData";
import { PersonSchema } from "../utils/schemas";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/VMOYD", color: "hover:text-gray-400" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/vyom-dubey/", color: "hover:text-blue-400" },
  { name: "X (Twitter)", icon: BsTwitterX, url: "https://x.com/dubey_vyom_", color: "hover:text-white" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw?sub_confirmation=1", color: "hover:text-red-400" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/VMOY/", color: "hover:text-orange-400" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/user/vyom_dubey/", color: "hover:text-green-400" },
  { name: "CodeChef", icon: SiCodechef, url: "https://www.codechef.com/users/imperial_head", color: "hover:text-amber-400" }
];

const ContactRedesign = () => {
  return (
    <>
      <StructuredData schema={PersonSchema} />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary pt-32 pb-16">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent)',
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
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Let's collaborate on your next project, or just have a conversation about tech
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="relative py-24 bg-bg-primary overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 text-center">
                Contact Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                <motion.div 
                  className="flex items-start gap-4 p-6 bg-bg-elevated rounded-xl border border-border hover:border-brand-primary/50 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                    <FaEnvelope className="text-2xl text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-2">Email</p>
                    <a 
                      href="mailto:vyomdubeykp@gmail.com"
                      className="text-lg text-text-primary hover:text-brand-primary transition-colors font-medium"
                    >
                      vyomdubeykp@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 p-6 bg-bg-elevated rounded-xl border border-border hover:border-brand-primary/50 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                    <FaMapMarkerAlt className="text-2xl text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-2">Location</p>
                    <p className="text-lg text-text-primary font-medium">Bangalore, India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 text-center">
                Connect With Me
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 p-6 bg-bg-elevated rounded-xl border border-border hover:border-brand-primary/60 transition-all group ${social.color}`}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <social.icon className="text-4xl text-text-muted group-hover:text-inherit transition-colors" />
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <Card className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 border-brand-primary/30">
                <div className="text-center p-8">
                  <FaFileDownload className="text-5xl text-brand-primary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
                    Download My Resume
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Get a detailed overview of my experience and skills
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg"
                    href="https://drive.google.com/file/d/1Le6HlSSsj40UfJ4xCL2MJK7tCKCp3Xmu/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full shadow-glow"
                  >
                    <FaFileDownload className="mr-2" />
                    View Resume
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Availability Banner */}
      <section className="relative py-16 bg-gradient-to-r from-brand-primary/10 via-purple-500/10 to-brand-secondary/10 border-y border-brand-primary/20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
                Currently Available for Opportunities
              </span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I'm open to full-time positions, freelance projects, and interesting collaborations. Let's build something amazing together!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactRedesign;
