import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const location = useLocation(); // Get current path

  const isContactPage = location.hash.replace(/\/$/, "") === "#/contact";
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />} {/* Hide footer on contact page */}
    </>
  );
};

export default App;
