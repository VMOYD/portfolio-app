import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-purple-700 dark:from-gray-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <h1
          className="text-4xl text-white font-bold"
          style={{ textAlign: "center", marginTop: "10rem", fontSize: "4rem" }}
        >
          Hey, I&apos;m 
          Vyom!           <br />
          Welcome to my corner <br /> of the internet!
        </h1>
      </motion.div>
    </section>
  );
};

export default Home;
