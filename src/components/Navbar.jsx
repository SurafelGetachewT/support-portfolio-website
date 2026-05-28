import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link to="/" className="focus-ring rounded-md">
          <span className="block text-sm font-bold text-navy-950 sm:text-base">
            Surafel Getachew
          </span>
          <span className="hidden text-xs font-medium text-slate-500 sm:block">
            Support Portfolio
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `focus-ring rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-slate-50 hover:text-brand-700 ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-slate-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="focus-ring hidden rounded-lg bg-navy-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 md:inline-flex"
        >
          Contact Me
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell py-3">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-brand-50 hover:text-brand-700 ${
                      isActive ? "bg-brand-50 text-brand-700" : "text-slate-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
