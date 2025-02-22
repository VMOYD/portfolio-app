import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <HeaderContainer>
      <Logo src="/portfolio-app/VD.png" alt="Logo header" />

      {/* Desktop Navigation */}
      <Nav>
        {links.map((link) => (
          <NavLink
            key={link}
            to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
          >
            {link}
          </NavLink>
        ))}
      </Nav>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <MobileNav>
          {links.map((link) => (
            <MobileNavLink
              key={link}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </MobileNavLink>
          ))}
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header;

// 🌙 Styled Components

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181818;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;

  &:hover {
    color: #9b51e0;
    text-shadow: 0px 0px 8px #9b51e0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(155, 81, 224, 0.5);
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const MobileNavLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  padding: 0.8rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background: rgba(155, 81, 224, 0.2);
    color: #9b51e0;
    border-radius: 5px;
  }
`;
