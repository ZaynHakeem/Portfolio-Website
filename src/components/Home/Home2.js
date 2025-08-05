import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A DEEP DIVE INTO MY <span className="purple"> WORLD </span>
            </h1>
            
            <p className="home-about-body">
              I have a strong desire to strive in all that I do and a passion for learning, growing, as well as contributing and leaving an impact on the teams I work with.
              <br />
              <br />I enjoy creating interfaces and coming up with ideas that not only solve problems, but also user friendly to all age ranges
              <br /> 
              <br />I have considerable experience in languages like:
              <i>
                <b className="purple"> C#, Python and Javascript. </b>
              </i>
              <br />
              <br />
              Beyond my academic and technical pursuits, my love of games that challenge intellect, strategy, and creativity, often inspires me to explore the intersection of gaming and software development. &nbsp;
              
              <br />
              <br />
              <i>
                I also have strong interest in
                areas related to{" "}
                <b className="purple">
                  Software Development, Quantitative Reaserch, UI/UX and Fullstack Development.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="binary">

            <div class="ai-matrix-loader">
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="digit">1</div>
              <div class="digit">0</div>
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="digit">1</div>
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="digit">1</div>
              <div class="digit">0</div>
              <div class="digit">1</div>
              <div class="glow"></div>
            </div>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>READY TO COLLABORATE?</h1>
            <p>
              Let’s <span className="purple">connect!!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZaynHakeem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons github-icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ChaosControl68"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons twitter-icon"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dalitso-nyirenda88"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons linkedin-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dalitso.nyirenda_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons instagram-icon"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
