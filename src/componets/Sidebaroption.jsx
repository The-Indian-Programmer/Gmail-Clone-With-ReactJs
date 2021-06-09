import React from "react";
import "./Sidebaroption.css";
const Sidebaroption = ({ Icon, title, number }) => {
  return (
    <div className="sidebar_option">
      <Icon />
      <div className="sidebar_text">
        <p className="sidebar_option_text">{title}</p>
        <p className="sidebar_option_number">{number}</p>
      </div>
    </div>
  );
};

export default Sidebaroption;
