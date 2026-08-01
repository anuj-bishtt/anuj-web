import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaTint } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
  DiPhp,
  DiPython,
  DiMysql,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiWordpress,
  SiShopify,
  SiWix,
} from "react-icons/si";



function Techstack() {
  const techStack = [
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiJqueryLogo />, name: "jQuery" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <SiShopify />, name: "Shopify" },
    { icon: <FaTint />, name: "Liquid" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiWix />, name: "Wix" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiMysql />, name: "MySQL" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech) => (
        <Col key={tech.name} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <p className="tech-name">{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
