import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spiral = `
.spiral {
  --b: 25px;
  --s: 700px;
  --c: #fff;

  width: var(--s);
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    repeating-radial-gradient(calc(2 * var(--b)) at top, #0000 -1px, var(--c) 0 calc(50% - 1px), #0000 50% calc(100% - 1px)) calc(50% + var(--b)) 100%, 
    repeating-radial-gradient(calc(2 * var(--b)) at bottom, var(--c) -1px, #0000 0 calc(50% - 1px), var(--c) 50% calc(100% - 1px)) 50% 0;
  background-size: 150% 50%;
  background-repeat: no-repeat;
  mask: radial-gradient(circle, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
  box-shadow: inset 8px 16px 20px 0px rgb(75 66 66);
  animation: floatSpiral 3s infinite alternate ease-in-out;
}

@keyframes floatSpiral {
  from { transform: translateY(0); }
  to { transform: translateY(-15px); }

}

.icons-wrapper {

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon {
  border-radius: 50%;
  position: absolute;
  width: 70px;
  height: 70px;
  }
  .icon:hover {
    
    box-shadow: 0 0 10px rgba(15, 15, 15, 0.8), 0 0 20px rgba(10, 6, 6, 0.6), 0 0 30px rgba(19, 19, 19, 0.4);
transition: transform 5s;
scale: 1.1;
}

`;

const icons = [
  "linux-opened-svgrepo-com.svg",
  "github-142-svgrepo-com.svg",
  "docker-svgrepo-com.svg",
  "icons8-visual-studio-code.svg",
  "mongo-svgrepo-com.svg",
  "mysql-logo-svgrepo-com.svg",
];

const Home = () => {
  const h3Ref = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = spiral;
    document.head.appendChild(style);

    if (h3Ref.current) {
      const splitText = new SplitType(h3Ref.current, { types: "chars" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: h3Ref.current,
            start: "top 80%",
            end: "+=70%",
            scrub: 0.75,
          },
        })
        .fromTo(
          splitText.chars,
          { color: "#ffcc66", opacity: 0.1 },
          { color: "#ff00ff", opacity: 1, stagger: 0.1, duration: 1 }
        );
    }
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-purple-700 dark:from-gray-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center"
        
      >
        <h1
          className="text-4xl text-white font-bold "
          style={{
            position: "relative",
            left: "16rem",
            marginTop: "10rem",
            fontSize: "4rem",
            color: "#ffcc66",
            width: "fit-content",
            ...(typeof window !== 'undefined' && window.innerWidth < 768 ? {
              left: "3rem",
              top: "10vh",
              width: "80%",
              // marginTop: "5rem",
              fontSize: "2.5rem",
              // textAlign: "center",
              // border: "1px solid red",
            } : {})
          }}
        >
          Hey, I&apos;m Vyom! <br />
          Welcome to my corner <br /> of the internet!
        </h1>

        {/* Spiral element */}
        <div className="relative" style={{display:"flex", flexDirection:"row"}}>
          {/* <div className="text-white" style={{position:"relative", left:"20%", marginTop:"33vh"}}>
            <h2 className="text-2xl font-bold" style={{
            position: "relative",
            marginTop: "10rem",
            fontSize: "2rem",
            color: "#ffcc66",
            width: "fit-content",
            textAlign: "center",
          }}>
             Tech stack <br/> & <br /> Tools I use
            </h2>
          </div> */}
          <div
            className="spiral"
            style={{ position: "relative", left: "30%", marginTop: "33vh",
              ...(typeof window !== 'undefined' && window.innerWidth < 768 ? {
                left: "0",
              } : {})
             }}
          >
            <div className="icons-wrapper">
              {icons.map((icon, index) => {
                const angle = (index / icons.length) * 2 * Math.PI;
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <img
                    key={index}
                    src={`src/Icons/${icon}`}
                    alt={icon.replace(".svg", "")}
                    className="icon"
                    style={{ transform: `translate(${x - 30}px, ${y - 30}px)` }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated H3 */}
        <div
          style={{
            marginTop: "40vh",
            height: "100vh",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3
            ref={h3Ref}
            className="text-2xl font-bold text-white mt-4"
            style={{ fontSize: "2rem",
              ...(typeof window !== 'undefined' && window.innerWidth < 768 ? {
                // left: "2rem",
                // marginTop: "5rem",
                padding: "0 1.2rem",
                fontSize: "2.1rem",
                textAlign: "center",
              } : {})
             }}
          >
            Tech enthusiast with a strong foundation in <br /> AI,
            cybersecurity, and web development. <br />I enjoy creating
            innovative, user-friendly, and secure applications <br /> that solve
            real-world problems.
            <br /> Always exploring new technologies.
          </h3>
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h4 style={{ color: "#ffcc66", fontSize: "1.8rem", marginBottom: "1rem", marginTop: "20%"}}>
              Check out my About section!
            </h4>
            <a
              href="/about"
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
              Go to About
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
