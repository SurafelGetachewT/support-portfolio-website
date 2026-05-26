const toneClasses = {
  blue: "border-brand-100 bg-brand-50 text-brand-700",
  navy: "border-slate-200 bg-slate-50 text-slate-700",
  green: "border-emerald-100 bg-emerald-50 text-emerald-700",
  amber: "border-amber-100 bg-amber-50 text-amber-700",
};

function Badge({ children, tone = "blue", className = "" }) {
  return (
    <span
      className={`inline-flex max-w-full items-center whitespace-normal rounded-md border px-3 py-1 text-left text-xs font-semibold leading-5 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
