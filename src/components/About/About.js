import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Languages from "./Languages";
import Aboutcard from "./AboutCard";
import homeLogo from "../../Assets/home-main.png";
import Tools from "./Tools";
import TechLibraries from "./TechLibraries";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Discover the <strong className="purple">Player</strong> Behind the <strong className="purple">Name</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img 
            src={homeLogo} 
            alt="about" 
            className="img-fluid"
            style={{ borderRadius: "50px", width: "80%", marginLeft: "50px" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Languages & Frameworks</strong> I've used
        </h1>

        <Languages />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I've used
        </h1>
        <Tools />

        <h1 className="project-heading">
          <strong className="purple">Technologies & Libraries</strong>
        </h1>
        <TechLibraries />

      </Container>
    </Container>
  );
}

export default About;
