import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there!! I am <span className="purple">Dalitso Nyirenda</span>
            , a proud International Student from <span className="purple"> Zambia</span>
            <br />
            <br />
            I am currently a sophomore at Grambling State University, where I’m grinding towards a BSc in Computer Science with a Business minor.
            <br />
            <br />
            I have completed courses in AI, Design Thinking, and Consulting
            <br />
            <br />
            When I'm not grining on my computer, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading My Bible
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "For the Lord God is our sun and our shield. He gives us grace and glory. The Lord will withhold no good thing from those who do what is right."{" "}
          </p>
          <footer className="blockquote-footer">Psalms 84:11</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
