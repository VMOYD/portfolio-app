import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;