import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import CourseDetails from "../Course-details/Course-details";

const coursesData = [
  {
    id: "01",
    title: "Engineering",
    lesson: 12,
    students: 9.5,
    rating: "4.9/5",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Science & Technology",
    lesson: 12,
    students: 11.5,
    rating: "4.8/5",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Mathematics",
    lesson: 12,
    students: 13.5,
    rating: "4.7/5",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Our popular courses cover major fields of Science, Engineering and Mathematics.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;