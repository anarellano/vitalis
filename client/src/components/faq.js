import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Faq({ items }) {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <Accordion open={open} toggle={toggle}>
      {items.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader targetId={item.id}>{item.question}</AccordionHeader>
          <AccordionBody accordionId={item.id}>{item.answer}</AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Faq;
