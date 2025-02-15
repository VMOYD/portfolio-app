const projects = [
  { name: "Past Preserve", desc: "A digital time capsule web app.", link: "#" },
  { name: "AI Assistant", desc: "An AI-powered browser extension.", link: "#" },
  { name: "BGMI Live Tracker", desc: "A real-time game stats dashboard.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">Projects</h2>
      <div className="flex justify-center space-x-6">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="block w-64 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
