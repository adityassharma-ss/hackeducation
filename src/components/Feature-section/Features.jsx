import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Interactive sessions with animated learning modules can help you all to learn quickly and efficiently",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "24/7 availability of tutors and support team in case of any difficulty",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Certified courses to make a rightful step in you career",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;