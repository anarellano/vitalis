import React from "react";
import {
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

export default function EmployeeCard({ name, role, description, img }) {
    return (
      <Col>
        <div className="card-container">
          <div className="card-front">
            <CardImg top width="100%" src={img} alt={name} />
          </div>
          <div className="card-back">
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {role}
              </CardSubtitle>
              <CardText>{description}</CardText>
            </CardBody>
          </div>
        </div>
      </Col>
    );
  }
  