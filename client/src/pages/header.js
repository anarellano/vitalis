import React from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

import logo from "../images/logo.png"; // Replace path_to_logo with the correct path

// import ApplyNow from "/Users/antonarellano/Vitalis/client/src/pages/applyNow.js"; // Replace path_to_ApplyNow with the correct path

export default function Header() {
  return (
    <div className="headerSizing">
      <Sticky enabled={true} bottomBoundary={3000}>
        <div>
          <Navbar bg="light" variant="light" className="">
            <Container>
              <Navbar.Brand href="/">
                <img href="home" className="nav-logo" src={logo} alt="logo" />
              </Navbar.Brand>
              <Nav>
                {/* <Nav.Link className="text-nowrap bold" as={Link} to="/">
                  Home
                </Nav.Link> */}
                <Nav.Link className="text-nowrap bold" as={Link} to="/aboutUs">
                  About Us
                </Nav.Link>
                {/* <Nav.Link className="text-nowrap bold" as={Link} to="/Services">
                  Services
                </Nav.Link> */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-nowrap bold custom-dropdown-toggle"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/Staffing">
                      Staffing
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/MedicalConcierge">
                      Medical Concierge
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
                  to="https://vitalisstaffing.clearcareonline.com/apply/"
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
