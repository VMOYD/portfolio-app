
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactWrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ddd;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #ddd;
  transition: color 0.3s;

  &:hover {
    color: #1da1f2;
  }
`;

const ContactMe = () => {
  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Email>Email: vyomdubeykp@gmail.com</Email>
      {/* <SocialLinks>
        <SocialIcon href="https://github.com/vyom" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/vyom" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/vyom" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
      </SocialLinks> */}
    </ContactWrapper>
  );
};

export default ContactMe;
