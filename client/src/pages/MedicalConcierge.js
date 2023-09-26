import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
// import medicalImage from '../images/your-medical-image.jpg'; // Update the path
import TestimonialSlider from "../components/testimonialSlider";

function MedicalConcierge() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let contactAnswers = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };
    console.log(contactAnswers);
  };
  
  return (
    <div>
      <Container className="d-flex my-5">
       
        <Col className="ms-5">
          <h1 className="display-4 ">Medical Concierge Services</h1>
          <p className="page-intro">
            Describe the services offered by your Medical Concierge.
          </p>
          <Button
            size="lg"
            className="rounded-pill btn btn-secondary text-nowrap square bold"
          >
            <a className="bt2a" href="tel:+1-415-812-4343">
              +1 (415) 812 - 4343
            </a>
          </Button>
        </Col>
      </Container>

      {/* Testimonial Section */}
      <Container>
        <TestimonialSlider />
      </Container>

      {/* Getting in Touch Section */}
      <Container className="d-flex my-5">
        <Col className="me-5">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <h2 className="display-5">Get in touch</h2>
              <p>We would love to hear from you</p>
              <Input placeholder="First Name" />
              <Input className="mt-4" placeholder="Last Name" />
              <Input className="mt-4" type="email" placeholder="Email" />
              <Input className="mt-4" type="number" placeholder="Phone number" />
              <Input className="mt-4" type="textarea" placeholder="Send us a message" />
            </FormGroup>
            <Button
              className="rounded-pill"
              color="primary"
              size="lg"
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="me-5">
          {/* Add an Image or Content here */}
        </Col>
      </Container>
    </div>
  );
}

export default MedicalConcierge;
