import React from "react";
import { Card } from "react-bootstrap";

import Faq from "../components/Faq.js";
import timetable from "../images/timetable.png";
import money from "../images/money.png";
import trophy from "../images/trophy.png";
import firstPicture from "../images/firstPicture.jpg";
import hiring from "../images/hiring.jpg";
import ApplyNowButton from "../components/ApplyNowButton.js";
import HireStaffButton from "../components/HireStaffButton.js";
import SendUsMessage from "../components/SendUsMessage.js";

function Homepage() {
  const questionsAndAnswers = [
    {
      question: "What are the pay rates, and do you offer benefits or bonuses?",
      answer:
        "Pay rates vary based on location and facility. Full-time employees receive health and dental benefits. Specifics can be discussed further based on your qualifications and preferences.",
    },
    {
      question:
        "How flexible are the schedules? Can I choose preferred shifts or locations?",
      answer:
        "We offer flexible schedules, allowing you to choose preferred shifts and locations within our affiliated facilities in the Bay Area.",
    },
    {
      question: "What types of assignments are available?",
      answer:
        "We offer a variety of full-time and part-time assignments, including positions as Registered Nurses, Licensed Vocational Nurses, and Certified Nursing Assistants.",
    },
    {
      question: "Do you provide orientation or training for new assignments?",
      answer:
        "Yes, we provide comprehensive on-site training and orientation, along with bi-monthly check-ins for continuous support and assessment.",
    },
    {
      question:
        "Do you assist with obtaining CNA licenses or reimburse these costs?",
      answer:
        "Yes, we support your nursing education pursuits, covering expenses related to obtaining a CNA license through a school-to-work program agreement.",
    },
    {
      question: "Do you provide housing or stipends for travel nurses?",
      answer:
        "Yes, we offer housing and travel support, varying based on the contract. Specifics are negotiated during the hiring process.",
    },
    {
      question:
        "What support can I expect from my recruiter or point of contact?",
      answer:
        "You can reach out 24/7 for work-related concerns. Expect prompt and supportive communication to assist with any issues or queries.",
    },
  ];

  return (
    <div className="flex-div mx-auto w-3/4 md:max-w-6xl">
      <div>
        {/* Section 1: Apply now button with contact */}
        <div className="firstdiv">
          {/* <h1 className="mb-1 firstHeader hidden md:block">
            Your Schedule, Your Income, Your Journey
          </h1>
          <h4 className="mb-3 text-warp hidden md:block">
            At Vitalis Staffing, We Support Our Nurses with Competitive Pay,
            Flexible Schedules, and Opportunities that Enrich Life and Career"
          </h4> */}
          <div className="d-flex ">
            <div>
              <ApplyNowButton />
            </div>
            <div>
              <HireStaffButton />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Cater to Audience/nurse beneifits */}
      <div className=" my-5">
        <div className="flex flex-wrap my-5">
          <div className="w-full md:w-1/2 ">
            <img
              src={firstPicture}
              alt="Description"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Card.Body>
              <Card.Title>
                <img src={timetable} alt="timetable" />
                Flexible Hours
              </Card.Title>
              <Card.Text>
                "Reclaim your time with flexible hours, giving you the freedom
                to choose when to work."
              </Card.Text>
            </Card.Body>

            <Card.Body className="threeReasondiv">
              <Card.Title>
                <img src={money} alt="money" />
                Competitive Rates
              </Card.Title>
              <Card.Text>
                "Earn up to 29% more than the average hourly wage in the Bay
                Area!"
              </Card.Text>
            </Card.Body>

            <Card.Body className="">
              <Card.Title>
                <img
                  src={trophy}
                  alt="Trophy icon"
                  className="object-contain h-full"
                />
                Opportunity to Grow
              </Card.Title>
              <Card.Text>
                Give your nursing career a boost with us through continuous
                learning and advancement opportunities.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </div>

      {/* section 3: who are we hiring and where we operate */}
      {/* <div className="my-5">
        <div md={8}>
          <div>
            <div>
              <h1 className="homepageHeaders textCenter">
                Join Our Elite Nursing Team
              </h1>
              <h4 className="textCenter">
                We're on the lookout for dedicated and passionate nurses ready
                to make a difference.
              </h4>
            </div>
            <div className="my-5">
              <div className="textCenter">
                <h5>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ divor: "#ffb514" }}
                  />{" "}
                  Registered Nurses (RN)
                </h5>
                <p>
                  Be at the forefront of patient care, ensuring the best
                  outcomes with your expertise.
                </p>
              </div>
              <div className="textCenter pt-5">
                <div>
                  <h5>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ divor: "#ffb514" }}
                    />{" "}
                    Licensed Vocational Nurses (LVN)
                  </h5>
                  <p>
                    Play a pivotal role in patient recovery with your
                    specialized skills and care.
                  </p>
                </div>
                <div>
                  <h5>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ divor: "#ffb514" }}
                    />{" "}
                    Certified Nursing Assistants (CNA)
                  </h5>
                  <p>
                    Support our nursing team and be an essential part of our
                    patient's journey to wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 4: the proccess of hiring */}
      <div className=" my-5">
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

      {/* section 7: Call to action */}
      <div className="my-5 ">
        <div className="lastSection">
          <div>
            <h1 className=" display-4 d-flex justify-content-center mb-5">
              Interested in Partnering Vitalis?
            </h1>
          </div>
          <div className="d-flex justify-content-center ">
            <div>
              <ApplyNowButton />
            </div>
            <div>
              <HireStaffButton customClass="font-bold bg-white py-3 px-5 rounded-full" />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="pl-2 justify-center h-full ">
        <Faq items={questionsAndAnswers} />
      </div>

      {/* section 6: FAQ with number and email again one the right side */}
      <div className="my-5">
        <div className="pr-2">
          <SendUsMessage />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
