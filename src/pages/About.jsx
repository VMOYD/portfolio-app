import { motion } from "framer-motion";

const skills = ["AI", "Web Development", "Hacking", "React.js", "Python"];

const About = () => {
  return (
    <section
  id="about"
  className="min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900"
>
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
        I specialize in AI, Web Development, and Cybersecurity.
      </p>
      <div className="flex space-x-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md text-gray-900 dark:text-white font-semibold text-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
