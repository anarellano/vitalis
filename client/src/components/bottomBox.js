import React from "react";
import { Container } from "reactstrap";
import ApplyNowButton from "./ApplyNowButton";

function BottomBox() {
  return (
    <Container className="mt-5 lastSection">
      <h1>Be part of the Vitalis Family!</h1>
      <ApplyNowButton />
    </Container>
  );
}

export default BottomBox;
