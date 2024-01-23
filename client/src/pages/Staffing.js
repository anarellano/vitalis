import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import InfoCards from "../components/InfoCards";
import PhoneNumberButton from "../components/PhoneNumberButton";
import callMeStaffing from "../images/callMeStaffing.jpg";
import SendUsMessage from "../components/SendUsMessage";

function Staffing() {
  return (
    <div>
      <div className="mx-auto max-w-6xl ">
        <div className="ms-5 text-start space-y-4">
          <h1 className="display-1">Join the Vitalis Family</h1>
          <p className="text-xl">
            Vitalis Staffing selectively recruits top nurses, ensuring a team of
            passionate, well-trained professionals committed to clinical
            excellence and compassionate care.
          </p>
          <div>
            <PhoneNumberButton />
          </div>
        </div>
      </div>

      {/* <div className="my-5 mx-auto max-w-6xl ">
        <h2 className="mb-3 display-6 ">The Best Nurses in the Industry</h2>
        <p className="texl-xl">
          Vitalis Staffing selectively recruits top nurses, ensuring a team of
          passionate, well-trained professionals committed to clinical
          excellence and compassionate care.
        </p>
      </div> */}

      {/* Section 4: Values */}
      <div className="mt-5">
        <div className="text-center mt-5">
          <h2 className="display-5 mb-4">Core Values</h2>
          <p className="lead">
            Our commitment to these values fuels exceptional care and service.
          </p>
        </div>
        <div className="mx-auto max-w-6xl ">
          <div className="d-flex justify-content-around">
            <Card
              className="my-2 values"
              divor="light"
              outline
              style={{
                width: "40rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">🫱🏻‍🫲🏾 Professionalism</CardTitle>
                <CardText>
                  Highest standards, dignity in patient care, and courteous
                  interactions.
                </CardText>
              </CardBody>
            </Card>
            <Card
              className="my-2 values"
              divor="light"
              outline
              style={{
                width: "40rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">📞 Availability</CardTitle>
                <CardText>
                  24/7 support for seamless client care, whenever you need it.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="d-flex justify-content-around">
            <Card
              className="my-2 values"
              divor="light"
              outline
              style={{
                width: "40rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">👨‍⚕️ Experienced</CardTitle>
                <CardText>
                  Seasoned professionals making a difference in patient
                  outcomes.
                </CardText>
              </CardBody>
            </Card>
            <Card
              className="my-2 values"
              divor="light"
              outline
              style={{
                width: "40rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h5">🌐 Transparency</CardTitle>
                <CardText>
                  Clear communication and openness, fostering trust in our
                  services.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 2: infor cards */}
      <div className="mx-auto max-w-6xl my-5 space-y-4">
        <div className="w-full">
          <h1 className="display-5">Our Office</h1>
          <h2 className="text-2xl">
            347 Gellert Blvd, Suite D1, Daly City, CA, 94015
          </h2>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.263025234756!2d-122.47013052354825!3d37.66652691838727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7beb63c53bf5%3A0x650428ac7957468e!2s347%20Gellert%20Blvd%2C%20Daly%20City%2C%20CA%2094015!5e0!3m2!1sen!2sus!4v1705961101375!5m2!1sen!2sus"
            className="w-full h-72"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Section 3: Client TestimonialSlider */}
      {/* <div>
        <TestimonialSlider />
      </div> */}

      {/* section 5: get in touch */}
      <div className="mx-auto max-w-6xl ">
        <SendUsMessage />
      </div>
    </div>
  );
}

export default Staffing;
