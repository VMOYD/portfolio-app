import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter , FaYoutube } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Email>Email: vyomdubeykp@gmail.com</Email>
      <SocialLinks>
        <SocialIcon href="https://github.com/VMOYD" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/vyom-dubey/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/vyom" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw?sub_confirmation=1" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaYoutube />
        </SocialIcon>
        <SocialIcon href="https://www.codechef.com/users/imperial_head" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <SiCodechef />
        </SocialIcon>
        <SocialIcon href="https://leetcode.com/u/VMOY/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <SiLeetcode />
        </SocialIcon>
        <SocialIcon href="https://www.geeksforgeeks.org/user/vyom_dubey/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <SiGeeksforgeeks />
        </SocialIcon>
      </SocialLinks>
    </ContactWrapper>
  );
};

export default ContactMe;

// 🌙 Styled Components for Dark Mode
const ContactWrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  border-radius: 10px;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(15px);
  box-shadow: 0px 0px 15px rgba(155, 81, 224, 0.4);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #9b51e0;
  text-shadow: 0px 0px 10px #9b51e0;
`;

const Email = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ddd;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;
`;

const SocialIcon = styled(motion.a)`
  color: #ddd;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #9b51e0;
    text-shadow: 0px 0px 12px rgba(155, 81, 224, 1);
  }
`;
