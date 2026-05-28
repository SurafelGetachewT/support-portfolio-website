import ShowcasePageShell from "../components/ShowcasePageShell";
import { DetailCard, FieldList, PreformattedText } from "../components/DetailCard";
import Badge from "../components/Badge";
import { showcaseSummaries, ticketShowcase } from "../data/showcaseData";

const summary = showcaseSummaries.find(
  (item) => item.id === "customer-support-ticket-examples",
);

function TicketExamplesPage() {
  return (
    <ShowcasePageShell
      title={ticketShowcase.title}
      intro={ticketShowcase.intro}
      skills={ticketShowcase.skills}
      repoHref={summary.repoHref}
    >
      <div className="grid gap-6">
        {ticketShowcase.examples.map((ticket, index) => (
          <DetailCard
            key={ticket.title}
            eyebrow={`Example ${index + 1}`}
            title={ticket.title}
            className="break-inside-avoid"
          >
            <FieldList
              items={[
                { label: "Issue type", value: ticket.issueType },
                { label: "Priority", value: ticket.priority },
                { label: "Channel", value: ticket.channel },
                { label: "Tools used", value: ticket.tools },
                { label: "Customer emotion", value: ticket.emotion },
              ]}
            />

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                  Customer message
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-800">
                  {ticket.customerMessage}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  Agent response
                </p>
                <PreformattedText>{ticket.response}</PreformattedText>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Badge tone="navy">Internal note</Badge>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {ticket.internalNote}
                </p>
              </div>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                <Badge tone="blue">Escalation</Badge>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {ticket.escalationDecision}
                </p>
              </div>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                <Badge tone="green">Resolution</Badge>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {ticket.resolutionSummary}
                </p>
              </div>
            </div>
          </DetailCard>
        ))}
      </div>
    </ShowcasePageShell>
  );
}

export default TicketExamplesPage;
