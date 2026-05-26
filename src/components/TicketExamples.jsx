import { useState } from "react";
import SectionHeader from "./SectionHeader";
import TicketExampleCard from "./TicketExampleCard";
import { ticketExamples } from "../data/portfolioData";

function TicketExamples() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="customer-support-ticket-examples"
      className="section-padding border-y border-slate-200 bg-slate-50"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Ticket Examples"
          title="Sample support replies that show empathy and next-step clarity."
          description="These examples show how customer issues can be handled with calm communication, structured information gathering, and clear escalation judgment."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {ticketExamples.map((ticket, index) => (
            <TicketExampleCard
              key={ticket.title}
              ticket={ticket}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TicketExamples;
