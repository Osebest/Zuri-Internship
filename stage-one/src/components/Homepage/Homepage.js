import React from "react";
import image2 from "../../assets/Frame 59546.png";
import image1 from "../../assets/Group 4028.png";
import logo1 from "../../assets/Frame 4041.png";
import logo2 from "../../assets/Group 4040.png";
import logo3 from "../../assets/Group 59537.png";
import Card from "./Card";
import { firstGrid } from "./CardConfig";

export default function Homepage() {
  return (
    <>
      <div className="section1 my-5">
        <div className="container">
          <div className="py-5 mt-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-12 col-sm-12 col-lg-5 ms-auto d-flex justify-content-center">
                <img
                  src={image1}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-2 mb-5">
                  Rent a <span className="color-purple">Place</span> away from{" "}
                  <span className="color-purple">Home</span> in the{" "}
                  <span className="color-purple">Metaverse</span>
                </h1>
                <p className="lead">
                  We provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for location"
                      aria-label="Search for location"
                    />
                    <button className="btn" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <img src={logo3} alt="" />
          <img src={logo2} alt="" />
          <img src={logo1} alt="" />
        </div>
      </div>
      <div className="container section3">
        <h1 className="text-center display-5">
          Inspiration for your next adventure
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 my-4 mb-5">
          {firstGrid.map((el) => (
            <Card image={el.image} />
          ))}
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <div className="col-xxl-12 px-4 py-5 mt-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={image2}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-5">Metabnb NFTs</h1>
                <p className="lead">
                  Discover our NFT gift cards collection. Loyal customers gets
                  amazing gift cards which are traded as NFTs. These NFTs gives
                  our cutomer access to loads of our exclusive services.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
