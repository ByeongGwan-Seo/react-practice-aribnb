import React from "react";

interface FooterColumnProps {
  title: string;
  subtitles: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, subtitles }) => {
  return (
    <div className="footer-column-container">
      <p className="footer-column-title">{title}</p>
      {subtitles.map((subtitle, index) => (
        <p className="footer-column-subtitle" key={index}>
          {subtitle}
        </p>
      ))}
    </div>
  );
};

export default FooterColumn;
