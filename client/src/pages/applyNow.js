import React from "react";
import { Form, FormGroup, Input, Container, Col, Button } from "reactstrap";
import FileUpload from "../components/fileUpload";

function ApplyNow() {
  return (
    <Container className="my-5">
      <Form>
        <FormGroup>
          <h2>Apply as</h2>
          <Input type="select" name="select" id="exampleSelect">
            <option>Certified Nursing Assistant (CNA)</option>
            <option>Licensed Vocational Nurse (LVN/LPN)</option>
            <option>Registered Nu rse (RN)</option>
          </Input>
        </FormGroup>
        <h2>Personal Information</h2>
        <FormGroup className="d-flex">
          <Input className="me-5" placeholder="First Name" />
          <Input placeholder="Last Name" />
        </FormGroup>
        <FormGroup className="d-flex ">
          <Input className="me-5" placeholder="Email" />
          <Input className="me-5" placeholder="Number" />
          <Input placeholder="Birthdate" />
        </FormGroup>
        <h2>Mailling Address</h2>
        <FormGroup className="d-flex">
          <Input placeholder="Address 1" className="me-5" />
          <Input placeholder="Address 2 ( Apt, suites, PO Boxes )" />
        </FormGroup>
        <FormGroup className="d-flex ">
          <Input className="me-5" placeholder="City" />
          <Input className="me-5" placeholder="State" />
          <Input placeholder="Zip Code" />
        </FormGroup>
        <h2>Requirements</h2>
        <FormGroup className="d-flex">
          <Col className="me-5">
            <FileUpload id="cnaLicense" text="CNA License/Certificate" />
          </Col>
          <Col>
            <FileUpload id="cprCertification" text="CPR Certification" />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex">
          <Col className="me-5">
            <FileUpload
              id="backgroundCheck"
              text="Background Check: OIG, NSO, SAM, Medi-cal"
            />
          </Col>
          <Col>
            <FileUpload
              id="physicalMedical"
              text="Valid Physical/Medical within 1 year"
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex">
          <Col className="me-5">
            <FileUpload
              id="tbTest"
              text="Valid TB test (1 year) or CXR/QuantiFERON"
            />
          </Col>
          <Col>
            <FileUpload id="covidVaccine" text="COVID Vaccine Information" />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex">
          <Col className="me-5">
            <FileUpload id="fluVaccine" text="Flu Vaccine" />
          </Col>
          <Col>
            <FileUpload
              id="n95FitTest"
              text="N-95 Fit Test Information (we can provide)"
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex">
          <Col>
            <FileUpload
              id="trainingInfo"
              text="Training/In-service Information: Abuse, Sexual Harassment, Dementia, Infection Control"
            />
          </Col>
        </FormGroup>
        <Container className="d-flex justify-content-center">
          <Button
            className="rounded-pill"
            color="primary"
            size="lg"
            style={{ textAlign: "center" }}
          >
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default ApplyNow;
