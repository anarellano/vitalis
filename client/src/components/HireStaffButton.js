import React from "react";

const HireStaffButton = ({ customClass }) => {
  return (
    <a href="tel:+1-415-812-4343">
      <button className={customClass || "hireStaffBtn py-3 px-5 rounded-full"}>
        Hire Staff
      </button>
    </a>
  );
};

export default HireStaffButton;
