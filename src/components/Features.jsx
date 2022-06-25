import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  faPen,
  faPlug,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import imagetexte from "../../src/images/title.png";
function Features() {
  return (
    <div className="features text-center pt-5 pb-5" id="services">
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src={imagetexte} alt="title-text" />
          <h2>We are good at</h2>
          <p className="text-black-50 text-uppercase">
            SOME OF Thease Stuff Under
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="feat text-center">
              <div className="icon-holder position-relative d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={fa1}
                  className="position-absolute bottom-0 number"
                />
                <FontAwesomeIcon
                  icon={faPen}
                  className="fa-4x position-absolute bottom-0 icon"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, eveniet doloribus! Aperiam cumque incidunt odio.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feat text-center">
              <div className="icon-holder position-relative d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={fa2}
                  className="position-absolute bottom-0 number"
                />
                <FontAwesomeIcon
                  icon={faTv}
                  className="fa-4x position-absolute bottom-0 icon"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, eveniet doloribus! Aperiam cumque incidunt odio.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={fa3}
                  className="position-absolute bottom-0 number"
                />
                <FontAwesomeIcon
                  icon={faPlug}
                  className="fa-4x position-absolute bottom-0 icon"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, eveniet doloribus! Aperiam cumque incidunt odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
