import React from "react";
import ingress from "../assets/I4G.png";

export const Footer = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center py-4 footer">
      <h4>
        Zuri<span>.</span>Internship
      </h4>
      <small className="text-muted">HNG Internship 9 Frontend Task</small>
      <img src={ingress} alt="ingress" />
    </div>
  );
};
