import { motion } from "framer-motion";
import styled from "styled-components";

// Timeline Data
const timeline = [
  {
    year: "2024-Present",
    title: "AI Intern",
    desc: "Currently working as an AI Intern at NetApp, building AI-driven solutions. Diving deep into machine learning, automation, and real-world problem-solving while making models smarter (and hopefully not self-aware).",
    iconPath: "icons8-netapp-logo.svg",
    path: "https://www.netapp.com/",
  },
  {
    year: "2023-2024",
    title: "Master's Degree",
    desc: "Completed my MCA from VIT Vellore, where I spent countless nights debugging, optimizing, and surviving deadlines. Specialized in AI, cloud computing, and software development while working on projects that made me question my life choices (but in a good way).",
    iconPath: "Vellore_Institute_of_Technology_seal_2017.svg.png",
    path: "https://www.vit.ac.in/",
  },
  {
    year: "2020-2023",
    title: "Bachelor's Degree",
    desc: "Earned my BCA from Bundelkhand University, Jhansi. This is where my coding journey truly kicked off—building projects, exploring new tech, and realizing that Stack Overflow is a coder's best friend.",
    iconPath: "bundelkhand_university_logo.png",
    path: "https://www.bujhansi.ac.in/en",
  },
  {
    year: "2016",
    title: "Started Coding",
    desc: "Started coding in class 9 with HTML, thinking I was hacking the matrix. Built my first webpage with 'blink' tags and bright colors—because who needed UI/UX back then? That moment ignited my love for development!",
    iconPath: "dragon.png",
    path: "",
  },
  {
    year: "2002 (Born!)",
    title: "The Beginning",
    desc: "The origin story of a curious mind who would one day tinker with AI and build cool things. From baby steps to keystrokes, the journey began with an insatiable curiosity for how things work.",
    iconPath: "brain-ok3.png",
    path: "",
  },
];

// Styled Components (Dark Mode)
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color:rgb(224, 224, 224);
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0px 0px 10px rgb(3, 3, 3);
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineLine = styled.div`
  position: absolute;
  width: 10px;
  background:rgb(255, 255, 255);
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  padding: 20px;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  text-align: center;
  box-shadow: ${(props) =>
    props.left
      ? "rgba(244, 246, 247, 0.4) 7px -3px 20px 6px"
      : "rgba(241, 241, 241, 0.4) -8px 0px 20px 6px"};
  position: relative;
  left: ${(props) => (props.left ? "-40%" : "50%")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(255, 255, 255) 0px 10px 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    left: 0;
    padding: 15px;
    text-align: left;
    background: rgba(20, 20, 20, 0.9);
  }
`;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0px 0px 8px rgb(255, 255, 255));

  ${(props) => (props.left ? "right: -40px;" : "left: -40px;")}

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 10px;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Title>My Career Timeline</Title>
      <TimelineContainer>
        <TimelineLine />
        {timeline.map((event, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ContentBox left={index % 2 === 0}>
              <a href={event.path} target="_blank" rel="noopener noreferrer">
                <Icon
                  src={"/portfolio-app/" + event.iconPath}
                  alt={`${event.title} icon`}
                  left={index % 2 === 0}
                />
              </a>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <i style={{ fontSize: "small", color: "#00bcd4" }}>
                {event.year}
              </i>
              <p>{event.desc}</p>
            </ContentBox>
          </TimelineItem>
        ))}
      </TimelineContainer>
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h4 style={{ color: "#ffcc66", fontSize: "1.8rem", marginBottom: "1rem", marginTop: "20%"}}>
              Check out my Project section!
            </h4>
            <a
              href="/#/projects/"
              style={{
                display: "inline-block",
                backgroundColor: "#ffcc66",
                color: "#000",
                padding: "0.8rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ffc107")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffcc66")}
            >
              Project
            </a>
          </div>
    </Section>
  );
};

export default About;
