import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import ApplyNowButton from "../components/ApplyNowButton.js";
import money from "../images/money.jpg";
import insurance from "../images/insurance.jpg";
import vacation from "../images/vacation.jpg";
import SendUsMessage from "../components/SendUsMessage.js";
import hiring from "../images/hiring.jpg";

function Jobs() {
  return (
    <div className="flex-div mx-auto w-3/4 md:max-w-6xl">
      {/* Section 1: Hook; real them in */}
      <div className="flex-col mx-auto max-w-6xl">
        <div>
          <h1 className="display-3 ">Explore Nursing Opportunities</h1>
          <p className=" p-3 text-xl">
            At Vitalis Staffing, we are committed to providing exceptional
            patient care. Join our team of skilled nurses and make a difference
            in people's lives.
          </p>
          <ApplyNowButton />
        </div>
      </div>

      {/* section 3: CTO  */}
      <div className="flex-col mx-auto max-w-6xl">
        <div className="text-center mt-5">
          <h2 className="display-5 p-4">Career Opportunities</h2>
          <p className="text-xl p-2">
            Pursue Your Passion and Embark on a Rewarding Journey in Healthcare.
          </p>
        </div>
        <div className="d-flex justify-content-around">
          <Card
            className="my-2 values"
            divor="light"
            outline
            style={{
              width: "35rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Licensed Vocational Nurse</CardTitle>
              <CardText>
                <p>
                  Compensation:<strong> $45/hr</strong>
                </p>
                <p>
                  Highest standards, dignity in patient care, and courteous
                  interactions.
                </p>
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2 values"
            divor="light"
            outline
            style={{
              width: "35rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Registered Nurse</CardTitle>
              <CardText>
                <p>
                  Compensation:<strong> $75/hr</strong>
                </p>
                <p>
                  24/7 support for seamless client care, whenever you need it.
                </p>
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
              width: "35rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Certified Nursing Assistant</CardTitle>
              <CardText>
                <p>
                  Compensation:<strong> $22.5/hr</strong>
                </p>
                <p>
                  Seasoned professionals making a difference in patient
                  outcomes.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="flex-col mx-auto max-w-6xl my-5">
        <h2 className="display-5 text-center mb-5">Benefits We Offer!</h2>

        <div className="flex">
          <div md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={vacation}
                  alt="flexibility"
                  className="mb-3 w-full h-auto"
                />
                <h4>Unmatched Flexibility</h4>
                <p>
                  At Vitalis Staffing, we offer exceptionally flexible rates.
                  Pick up shifts as per your convenience, giving you more
                  control over your life.
                </p>
              </CardBody>
            </Card>
          </div>

          <div md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={insurance}
                  alt="insurance"
                  className="mb-3 w-full h-auto"
                />
                <h4>Insurance for Full-Time Employees</h4>
                <p>
                  Full-time employees at Vitalis Staffing are our priority.
                  Enjoy comprehensive medical insurance coverage.
                </p>
              </CardBody>
            </Card>
          </div>

          <div md={4} className="mb-4">
            <Card className="h-100 shadow">
              <CardBody>
                <img
                  src={money}
                  alt="competitive pay"
                  className="mb-3 w-full h-auto"
                />
                <h4>Competitive Compensation</h4>
                <p>
                  Recognizing your dedication, we offer a compensation that
                  stands out in the industry.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div className="lastSection flex-col mx-auto max-w-6xl">
        <h1 className="display-4 mb-4">Ready to Elevate Your Career?</h1>
        <ApplyNowButton />
      </div>
      <div className="flex-col mx-auto max-w-6xl p-5">
        <div className="d-flex">
          {/* First divumn: Hiring Steps */}
          <div className="process-steps pr-4 h-full">
            <ol className="list-decimal list-inside space-y-4">
              {/* Step 1 */}
              <li className="text-3xl font-bold mb-1">Apply Online</li>
              <p className="text-lg">
                Fill out our online application to get started with the hiring
                process.
              </p>

              {/* Step 2 */}
              <li className="text-3xl font-bold mb-1">Orientation</li>
              <p className="text-lg">
                Attend an orientation session to understand our work culture and
                expectations.
              </p>

              {/* Step 3 */}
              <li className="text-3xl font-bold mb-1">Placement</li>
              <p className="text-lg">
                Once approved, you'll be placeds to your designated work
                location.
              </p>
            </ol>
          </div>
          <div className="prblms prblms-content">
            <img src={hiring} alt="Hire Nurses" />
          </div>
        </div>
      </div>

      <div className="flex-col mx-auto max-w-6xl my-4">
        <div className="me-5">
          <SendUsMessage />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
