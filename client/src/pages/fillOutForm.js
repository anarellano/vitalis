import React, { useEffect, useState } from "react";
import { Button, Col, Row, Input, FormGroup, Label, Form, Container } from "reactstrap";
import * as Yup from "yup";

function FillOutForm() {
  // Define initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: "",
    number: "",
    email: "",
    address: "",
    addressTwo: "",
    city: "",
    state: "",
    zipCode: "",
  };

  // Set up state variables
  const [formValues, setFormValues] = useState(initialValues);
  // If erros happened
  const [formErrors, setFormErrors] = useState({});
  // if submit 
  const [isSubmit, setIsSubmit] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      // Validate form using Yup schema
      await validationSchema.validate(formValues, { abortEarly: false });
      setFormErrors({}); // Clear any previous errors
      setIsSubmit(true);
    } catch (errors) {
      const validationErrors = {};
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setFormErrors(validationErrors);
    }
  };

  // Form submission and API call
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFormValues(initialValues); // Reset form values
          setIsSubmit(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [formErrors]);

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      <span style={{ color: 'red' }}>First name is required</span>
    ),
    lastName: Yup.string().required(
      <span style={{ color: 'red' }}>Last name is required</span>
    ),
    birthday: Yup.string().required(
      <span style={{ color: 'red' }}>Birthday is required</span>
    ),
    number: Yup.string().required(
      <span style={{ color: 'red' }}>Number is required</span>
    ),
    email: Yup.string()
      .email(<span style={{ color: 'red' }}>Invalid email</span>)
      .required(<span style={{ color: 'red' }}>Email is required</span>),
    address: Yup.string().required(
      <span style={{ color: 'red' }}>Address is required</span>
    ),
    city: Yup.string().required(
      <span style={{ color: 'red' }}>City is required</span>
    ),
    state: Yup.string().required(
      <span style={{ color: 'red' }}>State is required</span>
    ),
    zipCode: Yup.number().required(
      <span style={{ color: 'red' }}>Zip code is required</span>
    ),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                type="text"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && <p>{formErrors.firstName}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && <p>{formErrors.lastName}</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="birthday">Birthday</Label>
              <Input
                id="birthday"
                name="birthday"
                placeholder="Birthday"
                type="text"
                value={formValues.birthday}
                onChange={handleChange}
              />
              {formErrors.birthday && <p>{formErrors.birthday}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="number">Number</Label>
              <Input
                id="number"
                name="number"
                placeholder="Number"
                type="text"
                value={formValues.number}
                onChange={handleChange}
              />
              {formErrors.number && <p>{formErrors.number}</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p>{formErrors.email}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Address"
                type="text"
                value={formValues.address}
                onChange={handleChange}
              />
              {formErrors.address && <p>{formErrors.address}</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="addressTwo">Address 2</Label>
              <Input
                id="addressTwo"
                name="addressTwo"
                placeholder="Address 2"
                type="text"
                value={formValues.addressTwo}
                onChange={handleChange}
              />
              {formErrors.addressTwo && <p>{formErrors.addressTwo}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="City"
                type="text"
                value={formValues.city}
                onChange={handleChange}
              />
              {formErrors.city && <p>{formErrors.city}</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="state"
                name="state"
                placeholder="State"
                type="text"
                value={formValues.state}
                onChange={handleChange}
              />
              {formErrors.state && <p>{formErrors.state}</p>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                type="text"
                value={formValues.zipCode}
                onChange={handleChange}
              />
              {formErrors.zipCode && <p>{formErrors.zipCode}</p>}
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FillOutForm;
