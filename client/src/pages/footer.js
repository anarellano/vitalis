import React from "react";
import { Container } from "react-bootstrap";
import facebook from '../images/icon/facebook.png';
import google from  '../images/icon/google.png';
import linkedin from '../images/icon/linkedin.png';

export default function Footer() {
  return (
    <footer className="bg- text-center text-black mainParentFooter">
      <Container className="parentFooter2">
        <Container>Vitalis Staffing</Container>
        <Container>
          <ul className="list-unstyled mb-0 parentFooterLinks">
            <li className="footerLinks mx-2">
              <a href="/" className="text-black footerLinks">
                Homepage
              </a>
            </li>
            <li className="footerLinks mx-2">
              <a href="/aboutUs" className="text-black footerLinks">
                About Us
              </a>
            </li>
            <li className="footerLinks mx-2">
              <a href="/Jobs" className="text-black footerLinks">
                Jobs
              </a>
            </li>
          </ul>
        </Container>
        <Container className="p-4 pb-0">
          <section className="mb-4">
            <a
              className="m-1"
              href="#!"
              role="button"
            >
              <img classname='footerIcon' src={facebook} alt="Facebook" />
            </a>

            <a
              className="m-1"
              href="#!"
              role="button"
            >
              <img classname='footerIcon' src={google} alt="Google" styl/>
            </a>

            <a
              className="m-1"
              href="#!"
              role="button"
            >
              <img  classname='footerIcon' src={linkedin} alt="LinkedIn"/>
            </a>
          </section>
        </Container>
      </Container>

      <Container className="copyright">
        <Container>© 2022 Copyright Vitalis Staffing LLC</Container>
        <Container>Designed by Anton</Container>
        <Container>
          <a className="footerLinks" href="/">
            Private Policy
          </a>
        </Container>
        <Container>
          <a className="footerLinks" href="/">
            Terms of Service
          </a>
        </Container>
      </Container>
    </footer>
  );
}
