import React from "react";
import imagetexte from "../../src/images/title.png";
import work1 from "../images/work-01.jpg";
import work2 from "../images/work-02.jpg";
import work3 from "../images/work-03.jpg";
import work4 from "../images/work-04.jpg";
import work5 from "../images/work-05.jpg";
import work6 from "../images/work-06.jpg";
import work7 from "../images/work-07.jpg";
import work8 from "../images/work-08.jpg";
function Work() {
  return (
    <div className="our-work text-center pt-5 pb-5" id="portfolio">
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src={imagetexte} alt="title-text" />
          <h2>We Make This</h2>
          <p className="text-black-50 text-uppercase">PREPARE TO BE AMAZED</p>
        </div>
        <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
          <li className="active">All</li>
          <li>Design</li>
          <li>Code</li>
          <li>Photo</li>
          <li>App</li>
        </ul>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work1} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work2} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work3} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work4} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work5} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work6} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work7} alt="work-01" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img src={work8} alt="work-01" className="img-fluid" />
            </div>
          </div>
        </div>
        <a className="btn btn-primary rounded-pill main-btn  " href="#">
          I want More
        </a>
      </div>
    </div>
  );
}

export default Work;
