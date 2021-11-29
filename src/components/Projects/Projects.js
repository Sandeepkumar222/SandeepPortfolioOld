import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



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
              imgPath={"https://miro.medium.com/max/566/1*j3xVt5zsYuAB19-QATkk_w.png"}
              isBlog={false}
              title="Url Shortner"
              description="A web application to shorten the URL links, build with Node.js alone for data used MongoDB. Have features which allows user for deleting adding url links and can able to view number of clicks."
              link="https://github.com/Sandeepkumar222/urlShortner.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg"}
              isBlog={false}
              title="Fitness Tracker"
              description="Used ReactJS, NodeJS , ExpressJS and MongoDB to build this app. This app helps in tracking daily calorie burnt stats and also allows user to add more exercise, need to add more features, working on it..."
              link="https://github.com/Sandeepkumar222/FitnessTrackerFE.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/max/768/1*gjA78w2_Q8lSNZAnTMScqA.png"}
              isBlog={false}
              title="React CRUD App FrontEnd"
              description="Crud app is a simple web application to create, read, update and delete data.Built using ReactJS and used JSONPlaceholder - Free Fake REST API website to retrieve data"
              link="https://github.com/Sandeepkumar222/CrudAppwithValidation.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/max/768/1*gjA78w2_Q8lSNZAnTMScqA.png"}
              isBlog={false}
              title="Node CRUD App BackEnd"
              description="Crud app is a simple web application to create, read, update and delete data.Built using NodeJS and ExpressJS. Need to get autenticated for accessing data"
              link="https://github.com/Sandeepkumar222/NodeCrud.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://rindiar.in/images/blogs/7730e2c247394eea61ef2e88d9777741.jpg"}
              isBlog={false}
              title="Shopping cart"
              description="A simple react task to add/remove product from the cart."
              link="https://github.com/Sandeepkumar222/Adding_to_cart.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
