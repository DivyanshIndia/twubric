import React, { useState } from "react";

function SortToolbar({ onSort, activeCriteria }) {
  const [isOpen, setIsOpen] = useState(false);
  const criteriaOptions = [
    { value: "total", label: "Twubric Score" },
    { value: "friends", label: "Friends" },
    { value: "influence", label: "Influence" },
    { value: "chirpiness", label: "Chirpiness" },
  ];

  const handleSort = (value) => {
    onSort(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <span className="text-gray-700 font-semibold">Sort by:</span>
      <div className="relative inline-block text-left w-full sm:w-auto">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {
              criteriaOptions.find((option) => option.value === activeCriteria)
                ?.label
            }
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {criteriaOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSort(option.value)}
                  className={`${
                    option.value === activeCriteria
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortToolbar;
