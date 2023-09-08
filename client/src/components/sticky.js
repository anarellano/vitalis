import React from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./path_to_logo"; // Replace path_to_logo with the correct path
import ApplyNow from "./pages/applyNow"; // Replace path_to_ApplyNow with the correct path

function Header() {
  return (
    <div>
      <Sticky enabled={true} bottomBoundary={1200}>
        <div>
          <Navbar bg="light" variant="light">
            <Container className="headerContainer">
              <Navbar.Brand href="/">
                <img href="home" className="nav-logo" src={logo} />
              </Navbar.Brand>
              <Nav>
                <Nav.Link className="text-nowrap bold" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="text-nowrap bold" as={Link} to="/aboutUs">
                  About Us
                </Nav.Link>
                {/* <Nav.Link className="text-nowrap bold" as={Link} to="/needNurses">
                  Need Nurses?
                </Nav.Link> */}
                <Nav.Link className="text-nowrap bold" as={Link} to="/jobs">
                  Jobs
                </Nav.Link>
                {/* <Nav.Link className="text-nowrap bold" as={Link} to="/jobs">
                  Free Education
                </Nav.Link> */}
                <ApplyNow />
              </Nav>
            </Container>
          </Navbar>
        </div>
      </Sticky>{" "}
    </div>
  );
}

export default Header;
