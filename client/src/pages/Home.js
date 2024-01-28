import React from "react";
import ApplyNowButton from "../components/ApplyNowButton.js";
import HireStaffButton from "../components/HireStaffButton.js";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div className="min-h-80vh flex">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  ">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="m-4 firstHeader  md:block">
            Your Schedule, Your Income, Your Journey
          </h1>
          <h4 className="m-4 text-2xl">
            At Vitalis Staffing, We Support Our Nurses with Competitive Pay,
            Flexible Schedules, and Opportunities that Enrich Life and Career.
          </h4>
          <div className="d-flex justify-end">
            <ApplyNowButton />
            <HireStaffButton />
          </div>
        </div>
        <div className="items-center  p-5 hidden md:flex">
          <img src={logo} alt="logo" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
