import React, { useState } from "react";

const PrefooterHeader: React.FC = () => {
  const prefooterHeaderData = [
    "Destinations for arts & culture",
    "Destinations for outdoor adventure",
    "Mountain cabins",
    "Beach destinations",
    "Popular destinations",
    "Unique Stays",
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="prefooter-header-container">
      {prefooterHeaderData.map((data, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={activeTab === index ? "active-tab" : "inactive-tab"}
        >
          {data}
        </p>
      ))}
    </div>
  );
};

export default PrefooterHeader;
