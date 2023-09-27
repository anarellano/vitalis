import React from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "../images/images/logo.png"; // Replace path_to_logo with the correct path

// import ApplyNow from "/Users/antonarellano/Vitalis/client/src/pages/applyNow.js"; // Replace path_to_ApplyNow with the correct path

export default function Header() {
  return (
    <div className="headerSizing">
      <Sticky enabled={true} bottomBoundary={3000}>
        <div>
          <Navbar bg="light" variant="light">
            <Container className="headerContainer">
              <Navbar.Brand href="/">
                <img href="home" className="nav-logo" src={logo} />
              </Navbar.Brand>
              <Nav>
                {/* <Nav.Link className="text-nowrap bold" as={Link} to="/">
                  Home
                </Nav.Link> */}
                <Nav.Link className="text-nowrap bold" as={Link} to="/aboutUs">
                  About Us
                </Nav.Link>
                <Nav.Link className="text-nowrap bold" as={Link} to="/Services">
                  Services
                </Nav.Link>
                <Nav.Link className="text-nowrap bold" as={Link} to="/jobs">
                  Jobs
                </Nav.Link>
                <Nav.Link
                  color="primary"
                  size="lg"
                  className="text-nowrap apply square bg-primary rounded-pill bold"
                  as={Link}
                  style={{
                    width: "150px",
                    textAlign: "center",
                    color: "white",
                  }}
                  to="/ApplyNow"
                >
                  Apply Now
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </Sticky>{" "}
    </div>
  );
}


