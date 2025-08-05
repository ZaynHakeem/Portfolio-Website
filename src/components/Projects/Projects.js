import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/FacialRecognition.webp";
import emotion from "../../Assets/Projects/Invizio.webp";
import editor from "../../Assets/Projects/PasswordManager.webp";
import chatify from "../../Assets/Projects/FlappyBird.webp";
import suicide from "../../Assets/Projects/GoodVibes.webp";
import bitsOfCode from "../../Assets/Projects/FakeNews.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Flappy Bird Clone"
              description="A clone of the classic Flappy Bird game built with Unity and C#. Features include real-time score tracking, obstacle generation, and a responsive design."
              ghLink="https://github.com/ZaynHakeem/Flappy-bird-clone"
            // demoLink: will be added later"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Fake News Detector"
              description="A web application that uses machine learning to detect and flag fake news articles. Built with Flask and TensorFlow."
              ghLink="https://github.com/ZaynHakeem/AI-fake-news-detector"
            // demoLink: will be added later"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password Manager"
              description="A simple GUI-based password manager built with Python. It allows users to securely store and manage their passwords."
              ghLink="https://github.com/ZaynHakeem/password-manager"             
            // demoLink: Will be added later"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Facial Recognition System"
              description="A facial recognition system that uses OpenCV and deep learning to identify individuals in images. It includes features for face detection, recognition, and a user-friendly interface."
              ghLink="https://github.com/ZaynHakeem/Facial-Recognition-System"
            // demoLink: Will be added later"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Good Vibes"
              description="A spiritually grounded wellness app designed to uplift users through daily scripture, positive affirmations, mood tracking, and guided reflections. Good Vibes combines mental health support with faith-based encouragement, helping users cultivate peace and purpose in a chaotic world.Made with React, Tailwind CSS, Framer Motion and Firebase."
              ghLink="https://github.com/ZaynHakeem/Good-Vibes"
              // demoLink: Will be added later"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Invizio"
              description="A streamlined inventory management system built for small businesses and individual entrepreneurs to monitor stock levels, track item details, and get low-stock alerts in real-time. Designed with simplicity, speed, and mobile responsiveness in mind.
                          Created with React, Node.js, Express, MongoDB"
              ghLink="https://github.com/ZaynHakeem/Invizio"
              // demoLink: Will be added later"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
