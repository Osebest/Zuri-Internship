import React from "react";
import fox from "../assets/image 66.png";
import fox2 from "../assets/image 69.png";
import { FiChevronRight } from "react-icons/fi";

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="staticBackdropLabel">
              Connect Wallet
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <small>Choose your preferred walllet:</small>
            <div className="modal-item d-flex align-items-center justify-content-between my-3">
              <div className="d-flex align-items-center">
                <img src={fox} alt="" />
                <h6 className="mx-3">Metamask</h6>
              </div>
              <FiChevronRight />
            </div>
            <div className="modal-item d-flex align-items-center justify-content-between my-3">
              <div className="d-flex align-items-center">
                <img src={fox2} alt="" />
                <h6 className="mx-3">WalletConnect</h6>
              </div>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
