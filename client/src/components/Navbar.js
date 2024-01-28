import React, { useState } from "react";
import logo from "../images/3.png"; // Replace path_to_logo with the correct path

// import ApplyNow from "/Users/antonarellano/Vitalis/client/src/pages/applyNow.js"; // Replace path_to_ApplyNow with the correct path

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 mb-5">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-b-xl">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12 md:h-8" alt="Flowbite Logo" />
            <span className="self-center text-6xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vitalis Staffing
            </span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden  inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "fixed  bg-white" : "hidden p-3 rounded-4xl"
            } inset-0 z-40 w-full h-full md:block md:w-auto overflow-y-auto flex flex-col dark:bg-gray-800 justify-center`}
            id="navbar-default"
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-0 right-0 p-5 text-5xl md:hidden"
            >
              {" "}
              X{" "}
            </div>
            <div>
              <ul className="font-medium items-center w-full flex flex-col md:flex-row md:items-center">
                <li>
                  <a
                    href="/"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutUs"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/Careers"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/Staffing"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="/MedicalConcierge"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {" "}
                    Medical Concierge
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className=" text-2xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
