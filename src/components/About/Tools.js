import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiClaude,
  SiSlack,
  SiVercel,
  SiGit,
  SiPycharm,
  SiUnity,
  SiDiscord,
  SiGithub,
  SiGithubcopilot,
  SiFigma,
  SiCanva,
  SiWix,
  SiGooglegemini,
  SiHuggingface,
  SiGithubpages,
  SiOpenai,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

// import ms office and vscode

// import { FaRobot } from "react-icons/fa"; // Placeholder icon for AI tools

import { 
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill
  } from "react-icons/pi";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyCharm">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub Pages">
        <SiGithubpages />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>   
      <Col xs={4} md={2} className="tech-icons" title="Unity Hub">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Discord">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Hugging Face">
        <SiHuggingface />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenAI">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Claude AI">
        <SiClaude />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub Copilot">
        <SiGithubcopilot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Gemini">
        <SiGooglegemini />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Word">
        <PiMicrosoftWordLogoFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Excel">
        <PiMicrosoftExcelLogoFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft PowerPoint">
        <PiMicrosoftPowerpointLogoFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Wix">
        <SiWix />
      </Col>
    </Row>
  );
}

export default Toolstack;

