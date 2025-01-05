import React from "react";
import FooterColumn from "./FooterColumn";
import FooterKicker from "./FooterKicker";

const Footer: React.FC = () => {
  const footerColumnsData = [
    {
      title: "Support",
      subtitles: [
        "Help Center",
        "Safety information",
        "Cancellation options",
        "Our COVID-19 Response",
        "Supporting people with disabilities",
        "Report a neighborhood concern",
      ],
    },
    {
      title: "Community",
      subtitles: [
        "Airbnb.org: disaster relief housing",
        "Support: Afghan refugees",
        "Celebrating diversity & belonging",
        "Combating discrimination",
      ],
    },
    {
      title: "Hosting",
      subtitles: [
        "Try hosting",
        "AirCover: protection for Hosts",
        "Explore hosting resources",
        "Visit our community forum",
        "How to host responsibly",
      ],
    },
    {
      title: "About",
      subtitles: [
        "Newsroom",
        "Learn about new features",
        "Letter from our founders",
        "Careers",
        "Investors",
        "Airbnb Luxe",
      ],
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-container-columns">
        {footerColumnsData.map((column, index) => (
          <FooterColumn
            key={index}
            title={column.title}
            subtitles={column.subtitles}
          />
        ))}
      </div>
      <FooterKicker />
    </div>
  );
};

export default Footer;
