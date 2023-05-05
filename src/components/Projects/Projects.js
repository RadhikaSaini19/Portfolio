import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  
  return (
 
    <Container fluid className="project-section">
      <Particle />
      <Container>

      <h1 className="project-heading">
        <hr/>
          My <strong className="purple">ARTWORK </strong>Gallery
        </h1>
       <h3 style={{ color:"plum" , fontStyle:"italic"}}>My first 3D model</h3>
        <div>
        <img style={{ width: 800 , height: 500}}src={require('../../Assets/Projects/well1.png')}/>
       </div>
      <hr/>
       <h3 style={{ color:"plum" , fontStyle:"italic"}} >Water Simulations</h3>
        <div>
        <img style={{ width: 500 , height: 500}} src={require('../../Assets/Projects/water1.png')}/>
        <img style={{ width: 500 , height: 500}} src={require('../../Assets/Projects/water2.png')}/>
        <img style={{ width: 500 , height: 500}} src={require('../../Assets/Projects/water3.png')}/>
       </div>
       <hr/>
       <h3 style={{ color:"plum" , fontStyle:"italic"}} >Logo design</h3>
        <div>
        <img style={{ width: 500 , height: 500}} src={require('../../Assets/Projects/l.png')}/>
        <img style={{ width: 600 , height: 500}} src={require('../../Assets/Projects/logo22.png')}/>
       </div>
       <hr/>
       <h3 style={{ color:"plum" , fontStyle:"italic"}} >Ramp Walk</h3>
        <div>
        <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/walk1.png')}/>
        <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/walk2.png')}/>
       </div>
     <hr/>

     <h3 style={{ color:"plum" , fontStyle:"italic"}} >Cube Man</h3>
        <div>
        <img style={{width: 350 , height: 600 }} src={require('../../Assets/Projects/cube1.png')}/>
        <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/cube2.png')}/>
       </div>
     <hr/> 

     <h3 style={{ color:"plum" , fontStyle:"italic"}} >Cloth Simulations</h3>
        <div>
        <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/c1.PNG')}/>
        <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/c2.png')}/>
       </div>
       <hr/> 
       <hr/>
<h3 style={{ color:"plum" , fontStyle:"italic"}} >Particle Simulations</h3>
   <div>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/p22.png')}/>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/p11.png')}/>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/p33.png')}/>
  </div>

  <h3 style={{ color:"plum" , fontStyle:"italic"}} >Spider Keyframes</h3>
   <div>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/s1.png')}/>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/s3.png')}/>
  </div>
  <hr/>
  <h3 style={{ color:"plum" , fontStyle:"italic"}} >Others</h3>
   <div>
   <img style={{width: 500 , height: 500 }} src={require('../../Assets/Projects/o1.png')}/>
   <img style={{width: 400 , height: 400 }} src={require('../../Assets/Projects/y.png')}/>
   <img style={{width: 300 , height: 500 }} src={require('../../Assets/Projects/o3.png')}/>
   <img style={{width: 350 , height: 400 }} src={require('../../Assets/Projects/x.jpg')}/>
   <img style={{width: 400 , height: 500 }} src={require('../../Assets/Projects/05.png')}/>
   <img style={{width: 600 , height: 300 }} src={require('../../Assets/Projects/o2.png')}/>
   <img style={{width: 600 , height: 300 }} src={require('../../Assets/Projects/o4.png')}/>
  </div>

<hr/>
  <h3 style={{ color:"plum" , fontStyle:"italic"}} >Pencil Work</h3>
   <div>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/1.jpg')}/>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/3.jpg')}/>
   {/* <img style={{width: 600 , height: 300 }} src={require('../../Assets/Projects/4.jpg')}/> */}
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/5.jpg')}/>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/6.jpg')}/>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/2.jpg')}/>
  </div>
  <hr/>
  <h3 style={{ color:"plum" , fontStyle:"italic"}} >Brush Work</h3>
   <div>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/a.jpg')}/>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/b.jpg')}/>
   <img style={{width: 300 , height: 400 }} src={require('../../Assets/Projects/c.jpg')}/>
   <img style={{width: 250 , height: 400 }} src={require('../../Assets/Projects/d.jpg')}/>
   <img style={{width: 300 , height: 200 }} src={require('../../Assets/Projects/e.jpg')}/>
   <img style={{width: 300 , height: 250 }} src={require('../../Assets/Projects/f.jpg')}/>
  </div>
  <hr/>
        <h1 className="project-heading">
          My Course <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <hr/>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Group Facial Emotion Recognition using Deep Learning"
              description="Developed an convolutional neural network for recognizing emotions. Network was trained and tested using FER 2013 Facial Expression Dataset.Face detection with Haarcascade classifier. Tested on opencv."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
       
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Medical Image Denoising using Deep Learning"
              description="Developed an artificial neutral network (Autoencoder). Used chest X-RAY images Dataset from Kaggle platform for traing , testing and vadidation purposes. "
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

         
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Converting 2D images to 3D using NeRF Architecture(on going)"
              description="Training NeRF model for generating neral networkds of 3D model. Creating self-made dataset for testing purposes."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
     
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Website Portfolio"
              description="Used concepts of HTML , CSS , JAVACRIPT , REACT.JS developed an interactive website. It includes multi-page layout and react-Bootstrapping.Tookit includes Node.js"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> <Col sm={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cartoonifying an image using Machine learning and Deep Learning"
              description="For machine learning K-mean clustering algorithm is used. Divided in three steps - edge detection , color quantisation and combination of masked image and quantised images.For Deep Learning used trained white box model for improved results."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
      
          <hr/>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
