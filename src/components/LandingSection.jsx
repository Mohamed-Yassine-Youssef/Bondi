import React from "react";

function LandingSection() {
  return (
    <div
      className="landing d-flex justify-content-center align-items-center"
      id="landing"
    >
      <div className="text-center text-light">
        <h1>Taste the creativity</h1>
        <p className="fs-5 text-white-50 mb-4">
          We make awsome graphic and web design
        </p>
        <a className="btn btn-primary rounded-pill  main-btn " href="#">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default LandingSection;
