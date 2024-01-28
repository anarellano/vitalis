import React, { useState } from "react";
import { sendEmail } from "../APIfunctions/middleware";
import { Form, FormGroup, Input } from "reactstrap";

export default function SendUsMessage({ title, description }) {
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
    <div className="flex w-full">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <h2 className="display-5">{title || "Get in touch"}</h2>
          <p>
            {description ||
              "Unsure with your decision? Send as an email and we'll get back to you as soon as we can"}
          </p>
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
        <div className="d-flex">
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-2 px-4 text-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
