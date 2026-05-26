function Card({ children, className = "", id }) {
  return (
    <article
      id={id}
      className={`rounded-lg border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] shadow-sm shadow-slate-200/70 ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
