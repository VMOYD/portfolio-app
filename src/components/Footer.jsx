import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <Icon href="https://github.com/VMOYD" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Icon>
        <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Icon>
        <Icon href="https://www.linkedin.com/in/vyom-dubey/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Icon>
        <Icon href="https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </Icon>
      </IconContainer>
      <Copyright>© Vyom Dubey</Copyright>
    </FooterContainer>
  );
};

export default Footer;

// 🌙 Styled Components

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #181818;
  color: white;
  box-shadow: 0px -2px 10px rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const Icon = styled.a`
  color: white;
  font-size: 24px;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    color: #9b51e0;
    transform: scale(1.2);
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.7;
`;
