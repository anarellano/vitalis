import React from "react";
import ApplyNowButton from "../components/ApplyNowButton.js";
import EmployeeCard from "../components/EmployeeCard.js";
import anton from "../images/anton.jpg";
import justine from "../images/justine.jpg";
import raquel from "../images/raquel.jpg";
import HireStaffButton from "../components/HireStaffButton.js";

export default function About() {
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
      <div>
        <div>
          <h3 className="display-6 p-2">How We Help</h3>
          <ul className="text-xl list-disc list-inside">
            <li>
              <strong>Flexible Scheduling:</strong> Enhanced work-life balance
              with adjustable schedules.
            </li>
            <li>
              <strong>Competitive Compensation:</strong> Fair and higher pay for
              healthcare professionals.
            </li>
            <li>
              <strong>Quality Patient Care:</strong> Improved care outcomes
              through staff well-being.
            </li>
          </ul>
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

      <div className="my-5">
        <div className="lastSection">
          <div>
            <h1 className=" display-4 d-flex justify-content-center pb-3">
              Interested in Partnering Vitalis?
            </h1>
          </div>
          <div className="d-flex justify-content-center">
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
