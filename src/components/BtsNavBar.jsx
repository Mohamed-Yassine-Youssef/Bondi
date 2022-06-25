import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
function BtsNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="mynavbar">
      <Container>
        <Navbar.Brand href="#" className="mynavbrand">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main" className="brannd">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main">
          <Nav className="ms-auto  ">
            <Nav.Link href="#landing" className="lien active">
              Home
            </Nav.Link>
            <Nav.Link href="#services" className="lien">
              Services
            </Nav.Link>
            <Nav.Link href="#portfolio" className="lien">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#about" className="lien">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="lien">
              Contact
            </Nav.Link>
            <div className="search ps-3 pe-3 d-none d-lg-flex align-items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </div>
            <div>
              <a className="login btn btn-primary  rounded-pill" href="#">
                Login
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BtsNavBar;
