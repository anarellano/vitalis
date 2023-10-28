import React from "react";
import { CardBody, CardText, CardTitle, Card } from "reactstrap";

export default function InfoCards({ title, descption }) {
  return (
      <Card className="my-2"
      color="light"
      outline
      style={{
        width: "18rem",
      }}>
        <CardBody
         >
          <CardTitle className="bold">{title}</CardTitle>
          <CardText>{descption}</CardText>
        </CardBody>
      </Card>
  );
}
