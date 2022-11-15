import React from "react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { SiTwitter } from "react-icons/si";
import logo1 from "../assets/Group.png";

export default function Footer() {
  return (
    <footer className="pt-3">
      <div className="container main-footer mb-4 mt-5">
        <div className="d-flex flex-column justify-content-between align-items-center log">
          <img src={logo1} alt="logo" />
          <div className="d-flex justify-content-between mt-5 w-50">
            <SlSocialFacebook />
            <SlSocialInstagram />
            <SiTwitter />
          </div>
        </div>
        <div className="container w">
          <h4 className="mb-3">Community</h4>
          <ul>
            <li>NFTs</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="container w">
          <h4 className="mb-3">Places</h4>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div className="container w">
          <h4 className="mb-3">About Us</h4>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="container mt-5">
        <small className="text-muted">
          © 2022 Metabnb
        </small>
      </div>
    </footer>
  );
}
