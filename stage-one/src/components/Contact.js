import React from "react";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <div className="container">
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="container contact">
          <h1>Contact Me</h1>
          <p className="lead mb-5">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          <form className="row g-3 mb-sm-5">
            <div className="col-md-6">
              <label for="first_name" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-md-6">
              <label for="last_name" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control py-2" id="last_name" placeholder="Enter your last name"/>
            </div>
            <div className="col-12">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="col-12">
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                ></textarea>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  You agree to providing your data to who may contact you.
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary py-2 w-100" id="btn__submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
