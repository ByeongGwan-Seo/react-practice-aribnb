import React from "react";
import Cell, { PrefooterCellProps } from "./Cell";

interface PrefooterRowProps {
  cells: PrefooterCellProps[];
}

const PrefooterRow: React.FC<PrefooterRowProps> = ({ cells }) => {
  return (
    <div className="prefooter-row">
      {cells.map((cell, index) => {
        const isLastRow =
          index === cells.length - 1 && cell.title === "Show More";
        return (
          <div
            key={index}
            className={
              isLastRow ? "prefooter-cell show-more" : "prefooter-cell"
            }
            onClick={() => isLastRow && alert("Show More Clicked!")}
            style={
              isLastRow
                ? { textDecoration: "underline", cursor: "pointer" }
                : {}
            }
          >
            <Cell {...cell} />
          </div>
        );
      })}
    </div>
  );
};

export default PrefooterRow;
