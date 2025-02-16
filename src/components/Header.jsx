import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <img src="/src/icons/VD.PNG" alt="Logo" className="logo" />

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        {links.map((link) => (
          <a key={link} href={`/${link.toLowerCase()}`} className="nav-link">
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn">
        <button onClick={toggleMenu} className="menu-button">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
