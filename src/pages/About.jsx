import { motion } from "framer-motion";

const timeline = [
  { 
    year: "2024-Present", 
    title: "AI Intern", 
    desc: "Currently working as an AI Intern at NetApp, building AI-driven solutions. Diving deep into machine learning, automation, and real-world problem-solving while making models smarter (and hopefully not self-aware).", 
    iconPath: "src/Icons/icons8-netapp-logo.svg" // replace with actual path ,
    ,
    path: "https://www.netapp.com/"
  },
  { 
    year: "2023-2024", 
    title: "Master's Degree", 
    desc: "Completed my MCA from VIT Vellore, where I spent countless nights debugging, optimizing, and surviving deadlines. Specialized in AI, cloud computing, and software development while working on projects that made me question my life choices (but in a good way).", 
    iconPath: "src/Icons/Vellore_Institute_of_Technology_seal_2017.svg.png" // replace with actual path,
    ,
    path: "https://www.vit.ac.in/"
  },
  { 
    year: "2020-2023", 
    title: "Bachelor's Degree", 
    desc: "Earned my BCA from Bundelkhand University, Jhansi. This is where my coding journey truly kicked off—building projects, exploring new tech, and realizing that Stack Overflow is a coder's best friend.", 
    iconPath: "src/Icons/bundelkhand_university_logo.png" // replace with actual path,
    ,
    path: "https://www.bujhansi.ac.in/en"
  },
  { 
    year: "2016", 
    title: "Started Coding", 
    desc: "Started coding in class 9 with HTML, thinking I was hacking the matrix. Built my first webpage with 'blink' tags and bright colors—because who needed UI/UX back then? That moment ignited my love for development!", 
    iconPath: "src/Icons/dragon.png" // replace with actual path,
    ,
    path: ""
  },
  { 
    year: "2002 (Born!)", 
    title: "The Beginning", 
    desc: "The origin story of a curious mind who would one day tinker with AI and build cool things. From baby steps to keystrokes, the journey began with an insatiable curiosity for how things work.", 
    iconPath: "src/Icons/brain-ok3.png" // replace with actual path,
    ,
    path: ""
  }
];

const containerStyle = {
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  width: "40%",  
  padding: "20px",
  borderRadius: "12px", 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@media (max-width: 768px)": {
    width: "90%",
    padding: "15px",
    background: "rgb(255, 0, 0)",
  },
};

const containerLeft = {
  boxShadow: "rgba(221, 216, 216, 0.73) 7px -3px 20px 6px",
  position: "relative",
  left: "10%",
  "@media (max-width: 768px)": {
    width: "90%",
    padding: "15px",
    background: "rgb(255, 0, 0)",
  },
};

const containerRight = {
  boxShadow: "rgba(221, 216, 216, 0.73) -8px 0px 20px 6px",
  position: "relative",
  left: "50%",
  "@media (max-width: 768px)": {
    width: "90%",
    padding: "15px",
    background: "rgb(255, 0, 0)",
  },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6" style={{
      ...(typeof window !== 'undefined' && window.innerWidth < 768 ? {
        position: "relative",
        top: "10vh",
        textAlign: "center",
        border: "1px solid #ffcc66",
        marginBottom: "10vh",
      } : {})
    }}>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10" style={{ textAlign: "center"              }}>My Career Timeline</h1>
      <div className="relative flex flex-col items-center w-full max-w-2xl">
        <div
          className="absolute w-1 bg-blue-500 dark:bg-blue-400 h-full left-1/2 transform -translate-x-1/2"
          style={{
            content: '""',
            position: "absolute",
            width: "6px",
            background: "#fffl"
          }}
        ></div>
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-center mb-10 w-full"
            style={{ margin: "1rem 0" }}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? "text-right pr-6" : "text-left pl-6"} 
              bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 
              hover:scale-105 hover:shadow-lg `}
              style={{
                ...containerStyle,
                ...(index % 2 === 0 ? containerLeft : containerRight)
              }}
            >
              <div className="" style={{display:"flex", flexDirection:"column"}}>
<a href={event.path} target="_blank" rel="noopener noreferrer">
  
              <img 
              
              src={event.iconPath} 
              alt={`${event.title} icon`} 
              className="w-12 h-12" 
              style={{
                // boxShadow: "0 4px 15px rgba(255, 255, 255, 0.92)",
                borderRadius: "50%",
                width: "4rem",
                height: "4rem",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                animation: "float 6s ease-in-out infinite",
                ...(index % 2 === 0 
                  ? { right: "-40px" }  // Floating on right for left container
                  : { left: "-40px" }   // Floating on left for right container
                )
              }}
/>
              </a>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white" style={{alignSelf:"flex-start"}}>{event.title}</h3>
              </div>
              <i style={{margin:"0", padding:"0" , fontSize:"small"}}>{event.year}</i>
              <p>{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;