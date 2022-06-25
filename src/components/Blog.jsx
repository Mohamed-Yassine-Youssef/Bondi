import React from "react";
import imagetexte from "../images/title.png";
import Card from "react-bootstrap/Card";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
function Blog() {
  return (
    <div className="blog pt-5 pb-5">
      <div className="container">
        <div className="main-title text-center mt-5 mb-5 position-relative">
          <img className="mb-4" src={imagetexte} alt="title-text" />
          <h2>Read Our Blog</h2>
          <p className="text-black-50 text-uppercase">NEW STORIES</p>
        </div>
        <div className="row ">
          <div className="col-md-6 col-lg-4">
            <Card>
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title className="text-black-50 fs-6">
                  Jan 17, 2022
                </Card.Title>

                <h5>Some Awesome Blog Title Here</h5>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title className="text-black-50 fs-6">
                  Jan 17, 2022
                </Card.Title>

                <h5>Some Awesome Blog Title Here</h5>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title className="text-black-50 fs-6">
                  Jan 17, 2022
                </Card.Title>

                <h5>Some Awesome Blog Title Here</h5>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <a className="btn btn-primary rounded-pill main-btn " href="#">
            More Stories
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
