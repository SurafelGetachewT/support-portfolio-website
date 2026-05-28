import { Download } from "lucide-react";

function DownloadButton({ href, label = "Download PDF", className = "" }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg border border-brand-100 bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:border-brand-200 hover:bg-brand-100 ${className}`}
      >
        <Download size={16} />
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`focus-ring no-print inline-flex items-center justify-center gap-2 rounded-lg border border-brand-100 bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:border-brand-200 hover:bg-brand-100 ${className}`}
    >
      <Download size={16} />
      {label}
    </button>
  );
}

export default DownloadButton;
