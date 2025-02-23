// import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>{project.name}</Title>
        <Description>{project.desc}</Description>
        <Links>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">Source Code</a>}
        </Links>
      </ModalContent>
    </Overlay>
  );
};

export default ProjectModal;

// Styled Components
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: #222;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: white;
  max-width: 400px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #9b51e0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const Links = styled.div`
  margin-top: 1rem;

  a {
    color: #9b51e0;
    margin: 0 0.5rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
