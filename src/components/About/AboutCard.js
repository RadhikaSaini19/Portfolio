import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Radhika Saini </span>
            from <span className="purple"> Dheradun, India.</span>
            <br />I am a passionate third year student currently pursuing Bachelor of Technology in Computer Science Engineering in
Graphic Era University, Dehradun.
            <br />
            <br />
            My Interest fields are :-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Image Processing
            </li>
            <li className="about-activity">
              <ImPointRight /> Deep Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Computer Graphics
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
