import React from "react";
import PhoneNumberButton from "../components/PhoneNumberButton";
import consultation from "../images/consultation.jpg";

import SendUsMessage from "../components/SendUsMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDotsFromLine,
  faCalendar,
  faUserDoctor,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function MedicalConcierge() {
  return (
    <div className="flex-div mx-auto w-3/4 md:max-w-6xl">
      <div className="flex-col mx-auto max-w-6xl">
        <h1 className="display-3 mb-4">Medical Concierge </h1>

        <h4 className="">
          We offer personalized medical assistance, round-the-clock support, and
          immediate appointments with top specialists. Experience healthcare
          like never before!
        </h4>

        <div className="my-4">
          <PhoneNumberButton />
        </div>
      </div>

      {/* <div className="flex-col mx-auto max-w-6xl my-8">
        <p className="text-3xl font-semibold">
          Introducing Vitalis Staffing's Elite Medical Concierge Program
        </p>
        <p className="text-xl mt-4">
          Vitalis Staffing partners with leading in-home care providers to
          deliver personalized, private healthcare at home. Our network of
          skilled clinicians, covering everything from surgery to palliative
          care, ensures top-quality home-based recovery across the bay area.
        </p>
      </div> */}

      <div className="flex-col mx-auto max-w-6xl my-5">
        <h1 className="display-5">What Makes Us Different?</h1>
        <ul className="list-inside space-y-4 text-xl">
          <li className="my-4">
            <FontAwesomeIcon icon={faPersonDotsFromLine} />
            <strong> Personalized Care:</strong> Every patient is unique, so we
            tailor our services to meet your individual health needs.
          </li>
          <li className="my-4">
            <FontAwesomeIcon icon={faCalendar} />
            <strong> 24/7 Accessibility:</strong> Our care team is available
            around the clock to ensure you always have the support you need.
          </li>
          <li className="my-4">
            <FontAwesomeIcon icon={faUserDoctor} />
            <strong> Highly Trained Staff:</strong> Our team comprises top-tier
            medical professionals dedicated to providing the best care possible.
          </li>
          <li className="my-4">
            <FontAwesomeIcon icon={faDollarSign} />{" "}
            <strong> Cost Transparency:</strong> No hidden fees or surprises. We
            provide clear cost structures, ensuring you're always informed.
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-6xl my-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pe-5">
            <img
              className="rounded-3xl"
              src={consultation}
              style={{ maxHeight: "100%", width: "auto" }}
              alt="consultation"
            />
          </div>
          <div className="w-full md:w-1/2 pe-5">
            <h2 className="display-6 mb-4">How does our Concierge work?</h2>
            <ol className="list-decimal list-inside space-y-4 text-xl">
              <li>
                Initial phone consultation to assess your healthcare needs.
              </li>
              <li>
                Comprehensive evaluation by a Nurse Care Manager to tailor your
                care plan.
              </li>
              <li>
                Coordination by a Care Manager to connect you with suitable
                clinicians.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Getting in Touch Section */}
      <div className="flex-col mx-auto max-w-6xl">
        <SendUsMessage />
      </div>
    </div>
  );
}

export default MedicalConcierge;
