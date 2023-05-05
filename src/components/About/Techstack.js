import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <h4>◦ Computer Graphics</h4>
    <p>
    -MODELING : 3D Modeling, 3D Sculpting, UV Editing, Texture Painting, geometry
Nodes, Mapping,Environment Modeling, Character Rigging, Modifiers,
<br/>- ANIMATION : Animation , Keyframes, Simulations, Camera Projections, Scripting
(on going), Rendering.
    </p>
    <h4>◦ Languages</h4>
    <p>
- Core : Python, Java, C, C++<br/>
- Web : HTML, CSS, Javascript, JQuery , React.js<br/>
- Database : SQL<br/>
- Others : Markdown, LATEX<br/>
    </p>
     <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
    </Row>
  );
}

export default Techstack;
