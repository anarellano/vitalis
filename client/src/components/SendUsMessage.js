import React, { useState } from "react";
import { sendEmail } from "../APIfunctions/middleware";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default function SendUsMessage() {
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendEmail({
        from: `${sendMessage.firstName} ${sendMessage.lastName}`,
        to: "anton@vitalisstaffing.com",
        subject: "Questions",
        generateTextFromHTML: true,
        html: `<p><strong>Email:</strong> ${sendMessage.email}</p>
              <p><strong>Phone:</strong> ${sendMessage.phone}</p>
              <p><strong>Message:</strong> ${sendMessage.message}</p>`,
      });

      if (res !== "Email Successfully sent") {
        throw new Error(res);
      }

      setMessage("Message Successfully Sent!");
      setSendMessage({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setMessage("Message Successfully Sent!");
    } catch (error) {
      console.error(error);
      setMessage("Could not send Email");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <h2 className="display-5">Get in touch</h2>
          <p>we would love to here from you</p>
          <Input
            className="me-5"
            placeholder="First Name"
            value={sendMessage.firstName}
            onChange={(e) =>
              setSendMessage({ ...sendMessage, firstName: e.target.value })
            }
          />
          <Input
            className="mt-4"
            placeholder="Last Name"
            value={sendMessage.lastName}
            onChange={(e) =>
              setSendMessage({ ...sendMessage, lastName: e.target.value })
            }
          />

          <Input
            className="mt-4"
            type="email"
            id="email"
            placeholder="Email"
            value={sendMessage.email}
            onChange={(e) =>
              setSendMessage({ ...sendMessage, email: e.target.value })
            }
          />
          <Input
            className="mt-4"
            type="number"
            id="number"
            placeholder="Phone number"
            value={sendMessage.phone}
            onChange={(e) =>
              setSendMessage({ ...sendMessage, phone: e.target.value })
            }
          />
          <Input
            className="mt-4"
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Send us a message"
            value={sendMessage.message}
            onChange={(e) =>
              setSendMessage({ ...sendMessage, message: e.target.value })
            }
          />
        </FormGroup>
        {message && <div>{message}</div>}
        <Button
          type="submit"
          className="rounded-pill"
          color="primary"
          size="lg"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
