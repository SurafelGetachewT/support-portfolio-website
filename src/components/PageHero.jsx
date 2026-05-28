import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Badge from "./Badge";

function PageHero({
  eyebrow,
  title,
  description,
  badges = [],
  backTo,
  backLabel = "Back",
  primaryAction,
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(20,184,166,0.20),transparent_30%),linear-gradient(120deg,rgba(6,182,212,0.18),transparent_36%,rgba(245,158,11,0.12)),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:auto,auto,36px_36px,36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#06b6d4,#10b981,#f59e0b,#06b6d4)]" />
      <div className="section-shell relative z-10 py-12 sm:py-16">
        {backTo ? (
          <Link
            to={backTo}
            className="focus-ring no-print mb-7 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 transition hover:bg-white/15"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                {description}
              </p>
            ) : null}
            {badges.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <Badge
                    key={badge}
                    tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "green" : "amber"}
                    className="border-white/10 bg-white/10 text-white"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          {primaryAction ? (
            <Link
              to={primaryAction.to}
              className="focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-navy-950 shadow-lg shadow-sky-950/20 transition hover:bg-brand-50"
            >
              {primaryAction.label}
              <ArrowRight size={17} />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
