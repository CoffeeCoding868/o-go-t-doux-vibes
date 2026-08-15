import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#concept", label: "Concept" },
  { href: "#carte", label: "La Carte" },
  { href: "#evenements", label: "Événements" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-background/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#accueil" className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-full bg-secondary font-display text-lg font-bold text-secondary-foreground">
            Ô
          </span>
          <span className="font-display text-base leading-4 font-semibold">
            Le Bistrot
            <br />
            <span className="text-gradient-pop">O'Goût Doux</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
          <a href="#reservation" className="btn-pop !px-5 !py-2 text-sm">
            Réserver une table
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-full border-2 border-mint text-mint lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 px-4 pt-3 pb-5 backdrop-blur lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-display text-lg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href="#reservation" onClick={() => setOpen(false)} className="btn-pop w-full">
              Réserver une table
            </a>
            <a href="tel:+33612426132" className="btn-ghost-pop w-full">
              <Phone className="size-4" /> 06 12 42 61 32
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
