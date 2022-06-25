import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div
      className="footer pt-5 pb-5 text-center text-white-50 text-md-start"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="info mb-5">
              <img src={logo} alt="" />
              <p className="mb-5">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <div className="copyright">
                Created By <span>Graphberry</span>
                <div>
                  &copy; 2022- <span>Bondi Inc</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li>Home</li>
                <li>Our Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Support</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">About Us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Sign In</li>
                <li>Register</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="contact">
              <h5 className="text-light">Contact Us</h5>
              <p className="lh-lg mt-3 mb-5">
                Get in touch with us via mail phone.We are waiting for your call
                or message
              </p>
              <a
                className="fnbtn btn btn-primary rounded-pill main-btn w-100"
                href="#"
              >
                graphberry@gmail.com
              </a>
              <ul className="d-flex mt-5 list-unstyled gap-3">
                <li>
                  <a href="#" className="d-block text-light">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="facebook rounded-circle p-2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="d-block text-light">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="twitter rounded-circle p-2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="d-block text-light">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="linkedin rounded-circle p-2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="d-block text-light">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="youtube rounded-circle p-2"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
