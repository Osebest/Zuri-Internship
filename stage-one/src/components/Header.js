import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group (1).png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top py-4 mb-5">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className="img" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-lg-4">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li className="nav-item mx-lg-4">
              <Link to={"/place-to-stay"} className="nav-link">Place to stay</Link>
            </li>
            <li className="nav-item mx-lg-4">
              <a className="nav-link" href="/">
                NFTs
              </a>
            </li>
            <li className="nav-item mx-lg-4">
              <a className="nav-link" href="/">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button
            className="btn ms-auto px-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
