import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/Contact";
import Footer from "./components/Footer";
import Certificates from "./pages/Certificate";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { PAGE_SEO } from "./utils/seoConfig";
import { WebsiteSchema } from "./utils/schemas";
import "./App.css";

const App = () => {
  const location = useLocation(); // Get current path

  const isContactPage = location.hash.replace(/\/$/, "") === "#/contact";
  
  // Get current route for SEO
  const getCurrentRoute = () => {
    const path = location.pathname + location.hash;
    if (path === '/' || path === '') return 'home';
    if (path.includes('/about') || path.includes('#/about')) return 'about';
    if (path.includes('/projects') || path.includes('#/projects')) return 'projects';
    if (path.includes('/contact') || path.includes('#/contact')) return 'contact';
    return 'home';
  };

  const currentRoute = getCurrentRoute();
  const seoData = PAGE_SEO[currentRoute] || PAGE_SEO.home;
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  
  return (
    <>
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      
      {/* SEO Components */}
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        type={seoData.type}
      />
      <StructuredData schema={WebsiteSchema} />
      
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<> <About /> <Certificates/> </>} />
          <Route path="/projects" element={<Projects />  } />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />} {/* Hide footer on contact page */}
    </>
  );
};

export default App;
