import React from "react";

const PhoneNumberButton = ({ customClass }) => {
  return (
    <a
      href="tel:+1-415-812-4343"
      className={
        customClass ||
        "inline-block bg-green-400 border-green-400 text-white font-bold py-3 px-5 rounded-full text-lg hover:bg-green-700"
      }
    >
      Call Now
    </a>
  );
};

export default PhoneNumberButton;
