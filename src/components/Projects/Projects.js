import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import home from "../../Assets/Projects/home-dealer.png";
import mountain from "../../Assets/Projects/mountain.png";
import gaming from "../../Assets/Projects/gaming.png";
import burger from "../../Assets/Projects/burger-list.png";
import liquor from "../../Assets/Projects/liquor.png";
import dealer from "../../Assets/Projects/dealer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few webpages that I have made.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burger}
              isBlog={false}
              title="Burger"
              description="This the website that was used to show what Burger/Shakes categories that outlet had and the best cook for every month was also displayed."
              ghLink="https://github.com/anuj-bishtt/burger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dealer}
              isBlog={false}
              title="Service Dealer"
              description="This website was for the customers who wanted to buy or sell the vehicles, for buying vehicles customer had to submit their contact details along with the their proposed quote."
              ghLink="https://github.com/anuj-bishtt/service"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gaming}
              isBlog={false}
              title="Gaming Website"
              description="Gaming website was used to organize championships of various games along with the pool prize description belonging in various categories of PvP, 1v1, 5v5 and team events. This website was also used for displaying various games and their price along with offers or discounts."
              ghLink="https://github.com/anuj-bishtt/gaming"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="Home Dealers"
              description="Home Dealer webiste gave an option to customers whether they want to book a House online or have their details sent to the company so that they can be contacted. This Webiste also showed the near-by houses available for purchase."
              ghLink="https://github.com/anuj-bishtt/home-dealer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liquor}
              isBlog={false}
              title="Liquor Shop"
              description="Liquor Website was created to display all kind of Hard Drinks available in the store, which can later be bought by the customers. It also showcased antique collections along with price and manufacture year."
              ghLink="https://github.com/anuj-bishtt/liquor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mountain}
              isBlog={false}
              title="Mountain Trek"
              description="This website was used to target special category of customers who are professional trekkers and using this webisite they could get to know which mountains can be trekked along the actual photos to the mountains. This website also contained auto runnig caraousel."
              ghLink="https://github.com/anuj-bishtt/mountain" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
