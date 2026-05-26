function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div
      className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-md border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
