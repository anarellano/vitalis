import React from "react";

export default function EmployeeCard({ name, role, description, img }) {
  return (
    <div className="px-3 my-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-0">
        <img className="rounded-t-lg w-full" src={img} alt={name} />
        <div className="p-3">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6 className="text-base text-gray-600 dark:text-gray-400">{role}</h6>
          {/* <p className="text-gray-700 dark:text-gray-400">{description}</p> */}
        </div>
      </div>
    </div>
  );
}
