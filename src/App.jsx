import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import HomeRedesign from "./pages/HomeRedesign"; // NEW REDESIGNED HOME
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/Contact";
import Footer from "./components/Footer";
import Certificates from "./pages/Certificate";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { PAGE_SEO } from "./utils/seoConfig";
import { WebsiteSchema } from "./utils/schemas";
import "./App.css";

const App = () => {
  const location = useLocation(); // Get current path

  const isContactPage = location.pathname === "/contact";
  
  // Get current route for SEO
  const getCurrentRoute = () => {
    const path = location.pathname;
    if (path === '/' || path === '' || path === '/redesign') return 'home';
    if (path.includes('/about')) return 'about';
    if (path.includes('/projects')) return 'projects';
    if (path.includes('/contact')) return 'contact';
    return 'home';
  };

  const currentRoute = getCurrentRoute();
  const seoData = PAGE_SEO[currentRoute] || PAGE_SEO.home;
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
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
          {/* TEMP: Use redesigned home as default */}
          <Route path="/" element={<HomeRedesign />} />
          <Route path="/redesign" element={<HomeRedesign />} />
          <Route path="/old" element={<Home />} />
          <Route path="/about" element={<> <About /> <Certificates/> </>} />
          <Route path="/projects" element={<Projects />  } />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />} {/* Hide footer on contact page */}
    </>
  );
};

export default App;
