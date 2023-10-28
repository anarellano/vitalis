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
import PhoneNumberButton from "../components/PhoneNumberButton";
import consultation from "../images/consultation.jpg";
import providingCare from "../images/providingCare.jpg";

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
        <Col className="">
          <h1 className="display-4">Medical Concierge Services</h1>
          <p className="page-intro">
            We offer personalized medical assistance, round-the-clock support,
            and immediate appointments with top specialists. Experience
            healthcare like never before!
          </p>
          <PhoneNumberButton />
        </Col>
      </Container>

      <Container className="my-5">
        <h2>Introducing Vitalis Staffing's Elite Medical Concierge Program</h2>
        <p>
          Recognizing the immense benefits of home-based recovery and medical
          management, Vitalis Staffing collaborates with top-tier in-home care
          providers. There's no place like home, especially when it comes to
          healing. With dedicated, personalized care and unparalleled privacy,
          our aim is to ensure that patients can recover in a familiar,
          comforting environment. Our partnership with Concierge Nursing
          Referral Services and Heal At Home enables us to rigorously vet and
          introduce patients to a wide spectrum of clinicians. This includes
          services across numerous Californian communities. Whenever the need
          arises for private duty nurses or specialized clinicians, Vitalis
          Staffing is here to support. Our vast network encompasses experienced
          healthcare professionals such as RNs, LVNs, and other certified
          practitioners. Their areas of expertise range from surgical
          preparations to post-operative care, handling of acute and chronic
          conditions, and dedicated palliative and end-of-life care.
        </p>
      </Container>

      <Container className="my-5">
    <Row>
        <Col>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>What Makes Us Different?</h2>
            <ul style={{ listStyleType: "none", fontSize: '1rem', lineHeight: '2.5rem' }}>
                <li style={{ marginBottom: '20px' }}>
                    💼 <strong>Personalized Care:</strong> Every patient is unique,
                    and so is our approach. We tailor our services to meet your
                    individual health needs.
                </li>
                <li style={{ marginBottom: '20px' }}>
                    ⏰ <strong>24/7 Accessibility:</strong> Our care team is
                    available around the clock to ensure you always have the support
                    you need.
                </li>
                <li style={{ marginBottom: '20px' }}>
                    🩺 <strong>Highly Trained Staff:</strong> Our team comprises
                    top-tier medical professionals dedicated to providing the best
                    care possible.
                </li>
                <li>
                    💰 <strong>Cost Transparency:</strong> No hidden fees or
                    surprises. We provide clear cost structures, ensuring you're
                    always informed.
                </li>
            </ul>
        </Col>
        <Col className="prblms prblms-content">
            <img src={providingCare} />
        </Col>
    </Row>
</Container>


      <Container className="d-flex my-5">
        <Row>
          <Col className="prblms prblms-content">
            <img
              src={consultation}
              style={{ maxHeight: "100%", width: "auto" }}
            />
          </Col>
          <Col className="prblms ">
            <h4>OUR PROCESS</h4>
            <h2>How does our Concierge work?</h2>
            <ol style={{ lineHeight: "2" }}>
              <li>
                First, we conduct an initial phone consultation to understand
                what your healthcare needs are and to be sure a self-directed
                care program is a good fit.
              </li>
              <li>
                A Nurse Care Manager then conducts a comprehensive care
                consultation to understand your needs and preferences, and also
                connects with your physician to go over the care plan.
              </li>
              <li>
                Your dedicated Care Coordination Manager identifies the
                appropriate type of clinicians based on your specific care needs
                and preferences and coordinates introductions to the available
                pool of qualified clinicians for your consideration.
              </li>
            </ol>
          </Col>
        </Row>
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
              <Input
                className="mt-4"
                type="number"
                placeholder="Phone number"
              />
              <Input
                className="mt-4"
                type="textarea"
                placeholder="Send us a message"
              />
            </FormGroup>
            <Button className="rounded-pill" color="primary" size="lg">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="me-5">{/* Add an Image or Content here */}</Col>
      </Container>
    </div>
  );
}

export default MedicalConcierge;
