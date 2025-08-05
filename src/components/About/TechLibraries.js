import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiUnitySmall } from "react-icons/di";
import { SiPandas, SiScikitlearn, SiOpencv, SiTensorflow, SiKaggle } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// import { FaRobot } from "react-icons/fa"; // generic placeholder

function TechLibraries() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* AI / ML Libraries */}
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Framer Motion">
        <TbBrandFramerMotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenCV">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kaggle">
        <SiKaggle />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
        <SiScikitlearn />
      </Col>
      {/* Game Engine */}
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <DiUnitySmall />
      </Col>
    </Row>
  );
}

export default TechLibraries;
