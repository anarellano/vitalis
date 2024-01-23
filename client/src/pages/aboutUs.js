import React from "react";
import ApplyNowButton from "../components/ApplyNowButton";
import EmployeeCard from "../components/EmployeeCard";
import anton from "../images/anton.jpg";
import justine from "../images/justine.jpg";
import raquel from "../images/raquel.jpg";
import HireStaffButton from "../components/HireStaffButton.js";

export default function AboutUs(props) {
  return (
    <div className="flex-div mx-auto max-w-6xl">
      <div className="mb-5">
        <div>
          <h1 className="display-3">Our Story</h1>
          <h5 className="text-xl">
            In 2022, to tackle underpayment and inflexibility faced by Bay Area
            nurses, mother-daughter duo Justine and Raquel founded Vitalis,
            aiming to enhance working conditions for local nursing
            professionals.
          </h5>
        </div>
      </div>
      <div className="">
        <div>
          <h3 className="display-6">How We Help</h3>
          <h5>
            Vitalis Staffing offers flexible scheduling and higher pay for
            healthcare professionals, ensuring job satisfaction and quality
            patient care
          </h5>
        </div>
      </div>

      <div className="display-6 my-5">
        <h2>Meet Our Team</h2>
        <div xs="1" sm="2" md="4" className="g-4 d-flex justify-content-around">
          <EmployeeCard
            img={justine}
            name="Justine Acuña"
            role="CEO"
            // description="Justine Acuna, the CEO of VitaliStaffing, has fulfilled her passion for equality and care by opening her own nursing agency. With Justine at the helm, VitaliStaffing embodies a commitment to exceptional healthcare and a nurturing environment that sets it apart in the industry."
          />

          <EmployeeCard
            img={raquel}
            name="Raquel Heck"
            role="COO"
            // description="Raquel Heck, COO of the organization, is the driving force behind the seamless operations and team success at VitaliStaffing. With her exceptional leadership, she ensures that every aspect runs smoothly, paving the way for the agency's continued excellence."
          />

          <EmployeeCard
            img={anton}
            name="Anton Arellano"
            role="Financial Analyst"
            // description="Anton Arellano, our adept Financial Analyst, is an integral part of VitaliStaffing, providing essential updates on payroll, profits, and cost-cutting strategies. His expertise enables us to make informed decisions that optimize our financial performance and drive gdivth, ensuring a prosperous future for our organization."
          />
        </div>
      </div>

      {/* Section 2: group phoyo */}
      {/* <div className="my-5 grpPhoto"></div> */}

      {/* section 3: problem with other agencies and hospitals */}

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

      {/* <div className="mt-md-5 my-5">
        <div>
          <div md={5} className="prblms prblms-content">
            <img src={callMe} className=" shadow-sm" alt="Call us" />
          </div>
          <div md={7} className="prblms text-center">
            <h2 className="font-weight-bold my-4">
              Want to chat and learn more?
            </h2>
            <p className="text-muted mb-4">
              Give us a call and we would be delighted to answer all your
              questions and concerns.
            </p>
            <div className="justify-content-center">
              <PhoneNumberButton className="btn-primary" />
            </div>
          </div>
        </div>
      </div>

      <BottomBox /> */}
    </div>
  );
}
