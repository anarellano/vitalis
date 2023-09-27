import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testimonials from "../components/testimonials.jsx";

function TestimonialSlider() {
  return (
    <Carousel slide>
      {testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <Container className="d-flex flex-column align-items-center my-5">
            <img
              src={testimonial.image}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <Container>
              <Row className="justify-content-center">
                <Col className="my-5">
                  <Container>
                    <h3 className="text-center">{testimonial.name}</h3>
                    <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
                    <p className="text-center">{testimonial.review}</p>
                  </Container>

                  <Container>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                      {Array.from({ length: testimonial.stars }, (_, index) => (
                        <li key={index}>
                          <FontAwesomeIcon icon={faStar} size="sm" />
                        </li>
                      ))}
                      {Array.from(
                        { length: 5 - testimonial.stars },
                        (_, index) => (
                          <li key={testimonial.stars + index}>
                            <FontAwesomeIcon icon={farStar} size="sm" />
                          </li>
                        )
                      )}
                    </ul>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TestimonialSlider;
