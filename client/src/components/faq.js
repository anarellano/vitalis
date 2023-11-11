import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Faq({ items }) {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion  open={open} toggle={toggle}>
        {items.map(item => (
          <AccordionItem key={item.id}>
            <AccordionHeader >
              {item.question}
            </AccordionHeader>
            <AccordionBody >
              {item.answer}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
