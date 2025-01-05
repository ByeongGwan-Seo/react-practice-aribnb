import React from "react";
import PrefooterRow from "./Row";
import PrefooterHeader from "./Header";

const Prefooter: React.FC = () => {
  const prefooterData = [
    [
      { title: "Phoenix", subtitle: "Arizona" },
      { title: "Hot Springs", subtitle: "Arkansas" },
      { title: "Los Angeles", subtitle: "California" },
      { title: "San Diego", subtitle: "California" },
    ],
    [
      { title: "San Francisco", subtitle: "California" },
      { title: "Barcelona", subtitle: "Catalonia" },
      { title: "Prague", subtitle: "Czechia" },
      { title: "Washington", subtitle: "District of Columbia" },
    ],
    [
      { title: "Keswick", subtitle: "England" },
      { title: "London", subtitle: "England" },
      { title: "Scarborough", subtitle: "England" },
      { title: "Show More", subtitle: "" },
    ],
  ];

  return (
    <>
      <div className="prefooter-container">
        <h1>Inspiration for future getaways</h1>
        <PrefooterHeader />
        {prefooterData.map((row, rowIndex) => (
          <PrefooterRow key={rowIndex} cells={row} />
        ))}
      </div>
    </>
  );
};

export default Prefooter;
