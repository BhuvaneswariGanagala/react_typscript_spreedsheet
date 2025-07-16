import { useState } from "react";
import type { FC } from "react";
import clsx from "clsx";

const tabs = [
  "Q3 Financial Overview",
  "ABC",
  "Answer a question",
  "Extract"
];

const TabHeader: FC = () => {
  const [activeTab, setActiveTab] = useState("Q3 Financial Overview");

  return (
    <div className="flex space-x-2 px-4 pt-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            console.log(`${tab} tab clicked`);
          }}
          className={clsx(
            "px-3 py-1.5 text-sm rounded-md border",
            activeTab === tab
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabHeader;
