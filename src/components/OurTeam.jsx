import React from "react";
import team1 from "../images/team-1.png";
import team2 from "../images/team-2.png";
import team3 from "../images/team-3.png";
import team4 from "../images/team-4.png";
function OurTeam() {
  return (
    <div className="team text-center pt-5 pb-5 ">
      <div className="container pt-5 pb-5">
        <h2 className="fw-bold">Meet The Teem</h2>
        <p className="text-black-50 mb-50">
          Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
          eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
          dapibus. Proin eget tortor risus. Donec sollicitudin molestie
          malesuada.
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className="img-fluid" src={team1} alt="team1" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">
                "I don't understand how we got by those troops. I thought we
                were dead."
              </blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className="img-fluid" src={team2} alt="team1" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">
                "I don't understand how we got by those troops. I thought we
                were dead."
              </blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className="img-fluid" src={team3} alt="team1" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">
                "I don't understand how we got by those troops. I thought we
                were dead."
              </blockquote>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="box bg-white">
              <img className="img-fluid" src={team4} alt="team1" />
              <h4 className="p-3 text-light">Luke Skywalker</h4>
              <blockquote className="text-black-50 p-3">
                "I don't understand how we got by those troops. I thought we
                were dead."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
