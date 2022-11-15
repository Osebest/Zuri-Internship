import React from "react";
import {FaStar} from "react-icons/fa"

export default function Card({image}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={image} alt="" className="bd-placeholder-img card-img-top"/>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <small className="card-text">Desert king</small>
            <small>
              <b>1MBT per night</b>
            </small>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <small className="card-text">2345km away</small>
            <small>available for 2weeks stay</small>
          </div>
          <div className="mt-2">
            <FaStar className="me-2" color="#A02279"/>
            <FaStar className="me-2" color="#A02279"/>
            <FaStar className="me-2" color="#A02279"/>
            <FaStar className="me-2" color="#A02279"/>
            <FaStar className="me-2" color="#A02279"/>
          </div>
        </div>
      </div>
    </div>
  );
}
