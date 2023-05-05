import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <h4>◦ Frameworks and Tools</h4>
      <p>
      - Scientific : MATLAB<br/>
- 3D Animation : Blender, MeshLab<br/>
- 2D Image Editing : GIMP,Blender<br/>
- IDEs : VScode, Oracle, Eclipse, pycharm, jupyter notebook<br/>
      </p>
      <h4>◦ Machine Learning:</h4>
      <p>
        Pytorch, Tensorflow, Keras, Node JS.
      </p>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
