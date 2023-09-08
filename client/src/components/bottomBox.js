import React from "react";
import { Container, Button } from "reactstrap";

function BottomBox() {
  return (
    <Container
    
      className="mt-5 lastSection"
    >
      <h3>Be part of the Vitalis Family!</h3>
      <Button
        color="primary"
        size="lg"
        href="https://forms.gle/qxkT7C2V9z9Kz3RV8"
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Apply Now!
      </Button>
    </Container>
  );
}

export default BottomBox;
