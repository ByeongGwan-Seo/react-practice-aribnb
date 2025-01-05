import React from "react";

export interface PrefooterCellProps {
  title: string;
  subtitle: string;
}

const Cell: React.FC<PrefooterCellProps> = ({ title, subtitle }) => {
  return (
    <div className="prefooter-cell">
      <p className="prefooter-cell-title">{title}</p>
      <p className="prefooter-cell-subtitle">{subtitle}</p>
    </div>
  );
};

export default Cell;
