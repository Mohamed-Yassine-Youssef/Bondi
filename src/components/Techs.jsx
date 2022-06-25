import React from "react";
import tech1 from "../images/tech-1.png";
import tech2 from "../images/tech-2.png";
import tech3 from "../images/tech-3.png";
import tech4 from "../images/tech-4.png";
import tech5 from "../images/tech-5.png";
import tech6 from "../images/tech-6.png";
function Techs() {
  return (
    <div className="teams pt-5 pb-5 text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech1} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech2} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech3} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech4} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech5} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src={tech6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
