import React from "react";
import ApplyNowButton from "../components/ApplyNowButton";
import EmployeeCard from "../components/EmployeeCard";
import anton from "../images/anton.jpg";
import justine from "../images/justine.jpg";
import raquel from "../images/raquel.jpg";
import HireStaffButton from "../components/HireStaffButton.js";

export default function AboutUs() {
  return (
    <div className="flex-div mx-auto w-3/4 md:max-w-6xl">
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
          <EmployeeCard img={justine} name="Justine Acuña" role="CEO" />

          <EmployeeCard img={raquel} name="Raquel Heck" role="COO" />

          <EmployeeCard
            img={anton}
            name="Anton Arellano"
            role="Financial Analyst"
          />
        </div>
      </div>

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
        </div>
      </div>
    </div>
  );
}
