import { motion } from "framer-motion";
import { useState } from "react";

const TechStackTerminal = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const techTree = {
    "📁 cloud-infrastructure": [
      { name: "AWS", icon: "☁️", color: "text-orange-400", level: "Expert" },
      { name: "Azure", icon: "🔷", color: "text-blue-400", level: "Advanced" },
      { name: "GCP", icon: "🌐", color: "text-green-400", level: "Intermediate" },
      { name: "Docker", icon: "🐳", color: "text-cyan-400", level: "Expert" },
      { name: "Kubernetes", icon: "☸️", color: "text-blue-500", level: "Advanced" },
    ],
    "📁 frontend-stack": [
      { name: "React", icon: "⚛️", color: "text-cyan-300", level: "Expert" },
      { name: "TypeScript", icon: "📘", color: "text-blue-400", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400", level: "Expert" },
      { name: "Vite", icon: "⚡", color: "text-purple-400", level: "Advanced" },
      { name: "Next.js", icon: "▲", color: "text-white", level: "Intermediate" },
    ],
    "📁 backend-systems": [
      { name: "Node.js", icon: "🟢", color: "text-green-500", level: "Expert" },
      { name: "Python", icon: "🐍", color: "text-yellow-400", level: "Expert" },
      { name: "Express", icon: "🚂", color: "text-gray-400", level: "Advanced" },
      { name: "FastAPI", icon: "⚡", color: "text-emerald-400", level: "Advanced" },
      { name: "REST APIs", icon: "🔌", color: "text-indigo-400", level: "Expert" },
    ],
    "📁 databases": [
      { name: "MongoDB", icon: "🍃", color: "text-green-400", level: "Expert" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-300", level: "Advanced" },
      { name: "MySQL", icon: "🐬", color: "text-blue-400", level: "Advanced" },
      { name: "Redis", icon: "🔴", color: "text-red-400", level: "Intermediate" },
    ],
    "📁 ai-ml-tools": [
      { name: "TensorFlow", icon: "🧠", color: "text-orange-500", level: "Advanced" },
      { name: "OpenCV", icon: "👁️", color: "text-green-500", level: "Advanced" },
      { name: "PyTorch", icon: "🔥", color: "text-red-500", level: "Intermediate" },
      { name: "Scikit-learn", icon: "📊", color: "text-orange-400", level: "Advanced" },
    ],
  };

  const categories = [
    { key: "all", label: "All", icon: "🗂️" },
    { key: "cloud-infrastructure", label: "Cloud", icon: "☁️" },
    { key: "frontend-stack", label: "Frontend", icon: "⚛️" },
    { key: "backend-systems", label: "Backend", icon: "🟢" },
    { key: "databases", label: "Databases", icon: "🍃" },
    { key: "ai-ml-tools", label: "AI/ML", icon: "🧠" },
  ];

  const getFilteredTech = () => {
    if (activeCategory === "all") {
      return Object.entries(techTree);
    }
    return [[`📁 ${activeCategory}`, techTree[`📁 ${activeCategory}`]]];
  };

  const levelColors = {
    Expert: "text-brand-secondary",
    Advanced: "text-brand-primary",
    Intermediate: "text-purple-400",
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Terminal Header - Tabs */}
      <div className="bg-bg-elevated border-2 border-border rounded-t-2xl overflow-hidden">
        {/* Window Controls */}
        <div className="bg-bg-secondary px-4 py-3 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-xs sm:text-sm font-mono truncate">tech-stack.terminal</span>
          </div>
          <div className="w-16 sm:w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Category Tabs */}
        <div className="bg-bg-primary px-2 sm:px-4 py-2 flex flex-wrap items-center gap-2 border-b border-border">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === category.key
                  ? "bg-brand-primary/20 text-brand-primary border border-brand-primary/40"
                  : "bg-bg-elevated text-text-muted hover:text-text-primary hover:bg-bg-elevated/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              <span className="hidden xs:inline">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Terminal Body - File Tree */}
      <div className="bg-bg-elevated border-2 border-t-0 border-border rounded-b-2xl p-3 sm:p-6 font-mono text-xs sm:text-sm h-[420px] flex flex-col">
        {/* Command Prompt */}
        <div className="mb-4 flex items-center gap-1 sm:gap-2 text-brand-primary flex-shrink-0 overflow-x-auto">
          <span className="text-brand-secondary text-xs sm:text-sm">vyom@portfolio</span>
          <span className="text-text-muted">:</span>
          <span className="text-blue-400 text-xs sm:text-sm truncate">~/tech-stack</span>
          <span className="text-text-muted">$</span>
          <motion.span
            className="text-text-primary text-xs sm:text-sm whitespace-nowrap"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {activeCategory === "all" ? "ls -la" : `cd ${activeCategory.substring(2)}`}
          </motion.span>
        </div>

        {/* File Tree Structure - Fixed Height with Scroll */}
        <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-1 custom-scrollbar overflow-x-hidden">
          {getFilteredTech().map(([folder, techs], folderIndex) => (
            <motion.div
              key={folder}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: folderIndex * 0.1 }}
            >
              {/* Folder Name - Only show if "all" category */}
              {activeCategory === "all" && (
                <div className="flex items-center gap-2 text-brand-primary font-bold mb-2 mt-4 first:mt-0">
                  <span className="text-brand-secondary">├──</span>
                  <span>{folder}</span>
                </div>
              )}

              {/* Files in Folder */}
              {techs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: folderIndex * 0.1 + techIndex * 0.05 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                  className="group flex items-center gap-2 sm:gap-3 py-2 px-2 sm:px-3 rounded-lg transition-all cursor-pointer"
                >
                  {/* Tree Branch */}
                  <span className="text-text-muted flex-shrink-0">
                    {techIndex === techs.length - 1 ? "└──" : "├──"}
                  </span>

                  {/* Icon */}
                  <span className="text-xl sm:text-2xl transform group-hover:scale-125 transition-transform flex-shrink-0">
                    {tech.icon}
                  </span>

                  {/* Tech Name */}
                  <span className={`${tech.color} font-semibold flex-1 truncate`}>
                    {tech.name}
                  </span>

                  {/* Expertise Level Badge - Hidden on very small screens */}
                  <motion.span
                    className={`hidden sm:inline px-2 sm:px-3 py-1 rounded-full text-xs font-bold border ${levelColors[tech.level]} border-current opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    {tech.level}
                  </motion.span>

                  {/* File extension indicator - Hidden on mobile */}
                  <span className="hidden md:inline text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    .skill
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Terminal Bottom - Stats */}
        <motion.div
          className="mt-4 pt-4 border-t border-border flex items-center justify-between text-text-muted text-xs flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <span>
              📊 {activeCategory === "all" 
                ? `${Object.values(techTree).flat().length} technologies` 
                : `${getFilteredTech()[0][1].length} in ${activeCategory.replace("-", " ")}`
              }
            </span>
            <span className="hidden md:inline">
              ⚡ {Object.keys(techTree).length} categories
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Active</span>
          </div>
        </motion.div>
      </div>

      {/* Command Suggestions Below Terminal */}
      <motion.div
        className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-text-muted text-xs sm:text-sm font-mono px-2 sm:px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <span className="text-brand-primary flex-shrink-0">💡 Tip:</span>
        <span className="text-xs sm:text-sm">Click tabs to filter by category</span>
        <span className="hidden lg:inline">|</span>
        <span className="hidden lg:inline text-xs sm:text-sm">Hover over items to see expertise level</span>
      </motion.div>
    </div>
  );
};

export default TechStackTerminal;
