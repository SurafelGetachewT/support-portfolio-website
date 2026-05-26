import { ChevronDown } from "lucide-react";
import Badge from "./Badge";

function TicketExampleCard({ ticket, isOpen, onToggle }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left"
      >
        <div>
          <h3 className="text-lg font-bold text-navy-950">{ticket.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {ticket.scenario}
          </p>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-600 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div className="border-t border-slate-200 p-5">
          {ticket.customerMessage ? (
            <div className="mb-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Customer message
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {ticket.customerMessage}
              </p>
            </div>
          ) : null}

          <div className="rounded-lg border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              Support response
            </p>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-slate-700">
              {ticket.response}
            </pre>
          </div>

          <div className="mt-5">
            <Badge tone="green">Skills demonstrated: {ticket.skills}</Badge>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TicketExampleCard;
