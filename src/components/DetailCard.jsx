import Card from "./Card";

export function DetailCard({ title, eyebrow, children, className = "" }) {
  return (
    <Card className={`p-5 sm:p-6 ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h3 className="text-xl font-black leading-tight text-navy-950">
          {title}
        </h3>
      ) : null}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </Card>
  );
}

export function FieldList({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ label, value }) => (
        <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
            {label}
          </p>
          <p className="mt-1 text-sm font-bold text-navy-950">{value}</p>
        </div>
      ))}
    </div>
  );
}

export function PreformattedText({ children }) {
  return (
    <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-950 p-4 text-sm leading-7 text-slate-100 shadow-inner">
      {children}
    </pre>
  );
}

export function BulletList({ items, ordered = false }) {
  const List = ordered ? "ol" : "ul";

  return (
    <List className={`space-y-2 text-sm leading-6 text-slate-700 ${ordered ? "list-decimal pl-5" : ""}`}>
      {items.map((item) => (
        <li key={item} className={ordered ? "" : "flex gap-2"}>
          {ordered ? null : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </List>
  );
}
