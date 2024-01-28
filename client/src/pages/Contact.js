import React from "react";
import PhoneNumberButton from "../components/PhoneNumberButton";
import SendUsMessage from "../components/SendUsMessage";

const Contact = () => {
  return (
    <div className="flex-div mx-auto w-3/4 md:max-w-6xl justify-center items-center">
      <div className="flex-col mx-auto max-w-6xl mb-5 justify-center items-center">
        <h1 className="display-4">Contact Us</h1>
        <h5 className="text-xl">
          We're here to answer any questions you might have
        </h5>
      </div>
      <div className="flex-col mx-auto max-w-6xl mb-5">
        <h2 className="display-5 mb-3">Chat with Us</h2>
        <ul className="space-y-4 text-xl">
          <li>Hours: 5:00 AM - 10:00 PM Pacific Time, Monday through Sunday</li>
          <li>Giving us a call will give you the fastest response time.</li>
          <li>
            <PhoneNumberButton />
          </li>
        </ul>
        {/* <h5>Hours: 5:00 AM - 10:00 PM Pacific Time, Monday through Sunday</h5>
        <h6>Giving us a call will give you the fastest response time. </h6> */}
      </div>
      <div className="flex-col mx-auto max-w-6xl mb-5">
        <SendUsMessage
          title="Send Us an Email"
          description="We'll get back to you as soon as possible"
        />
      </div>
    </div>
  );
};

export default Contact;
