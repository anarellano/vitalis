import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function FreeEducation() {
  const handleEnrollNow = () => {
    // Handle enroll now button click event
    // Add your logic here, such as opening an enrollment form or redirecting to a specific page
  };

  return (
    <div className="free-education-page">
      <Container>
        <h1 className="page-heading">Unlock Your Potential with Our Free Education Plan</h1>
        <p className="page-intro">Invest in Your Future with Zero Tuition Fees</p>

        <section className="benefits-section">
          <h2>Why Choose Our Free Education Plan?</h2>
          <Row>
            <Col md="4">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h3>Quality Education</h3>
                <p>Access high-quality educational resources and comprehensive courses that prepare you for a successful career.</p>
              </div>
            </Col>
            <Col md="4">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-money"></i>
                </div>
                <h3>No Tuition Fees</h3>
                <p>Eliminate the financial barrier to education. Our free education plan covers all the tuition fees, ensuring accessibility for everyone.</p>
              </div>
            </Col>
            <Col md="4">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-clock-o"></i>
                </div>
                <h3>Flexible Learning</h3>
                <p>Enjoy the flexibility of online learning. Study at your own pace and schedule, making education convenient for your lifestyle.</p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="enrollment-section">
          <h2>Enroll Today and Shape Your Future</h2>
          <Row>
            <Col md="6">
              <div className="enrollment-card">
                <h3>Professional Development</h3>
                <p>Upgrade your skills and knowledge with our diverse range of courses tailored to meet industry demands and enhance your employability.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="enrollment-card">
                <h3>Career Advancement</h3>
                <p>Take a significant step towards career growth and advancement by acquiring new qualifications and expanding your expertise.</p>
              </div>
            </Col>
          </Row>
          <Button color="primary" onClick={handleEnrollNow}>Enroll Now</Button>
        </section>

        <section className="testimonials-section">
          <h2>What Our Students Say</h2>
          <Row>
            <Col md="6">
              <div className="testimonial">
                <div className="testimonial-text">
                  <p>"Thanks to the free education plan, I was able to earn a valuable certification that helped me secure a promotion at work. Highly recommended!"</p>
                </div>
                <div className="testimonial-author">
                  <h4>John Doe</h4>
                  <p>Marketing Professional</p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="testimonial">
                <div className="testimonial-text">
                  <p>"I couldn't afford to pursue higher education until I found this free education plan. It has opened up new possibilities and boosted my confidence."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Jane Smith</h4>
                  <p>IT Specialist</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="cta-section">
          <h2>Start Your Learning Journey Today</h2>
          <p>Don't miss out on this incredible opportunity to gain a quality education without the burden of tuition fees. Enroll now and pave the way for a successful future.</p>
          <Button color="primary" onClick={handleEnrollNow}>Enroll Now</Button>
        </section>
      </Container>
    </div>
  );
}

export default FreeEducation;
