import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Star,
  Wifi,
  Accessibility,
  CreditCard,
  Tv,
  Sun,
  Sparkles,
  Martini,
  Heart,
  Disc3,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { MobileCta } from "@/components/site/MobileCta";
import { supabase } from "@/lib/supabase";
import heroBar from "@/assets/hero-bar.jpg";
import cocktails from "@/assets/cocktails.jpg";
import food from "@/assets/food.jpg";
import eventDrag from "@/assets/event-drag.jpg";
import owners from "@/assets/owners.jpg";
import decor from "@/assets/decor.jpg";
import terrasse from "@/assets/terrasse.jpg";
import jeux from "@/assets/jeux.jpg";

const TITLE = "Le Bistrot O'Goût Doux — Bar inclusif & cocktails à Strasbourg";
const DESCRIPTION =
  "Bar-bistrot pop et inclusif au 64 rue de Zurich à Strasbourg : cocktails XXL, cuisine maison, viewing parties Drag Race et safe place LGBTQ+ tenue par Caroline & Tania.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "bar Strasbourg, bistrot inclusif Strasbourg, bar LGBTQ+ Strasbourg, cocktails Strasbourg, rue de Zurich",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Le Bistrot O'Goût Doux",
          description: DESCRIPTION,
          telephone: "+33612426132",
          priceRange: "10-30 €",
          address: {
            "@type": "PostalAddress",
            streetAddress: "64 Rue de Zurich",
            postalCode: "67000",
            addressLocality: "Strasbourg",
            addressCountry: "FR",
          },
          openingHours: ["Tu-Fr 12:00-01:00", "Sa 16:00-01:00"],
          sameAs: [
            "https://www.facebook.com/ogoutdoux67",
            "https://www.instagram.com/lebistrotogoutdoux",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const carte = [
  {
    title: "Cocktails & formats XXL",
    sticker: "Licence IV",
    text: "Classiques bien shakés, créations maison et surtout nos formats géants à partager (ou pas, on ne juge personne). Le Léviathan a déjà fait tomber quelques légendes.",
    image: cocktails,
    items: ["Léviathan (signature)", "Formats géants / XXL", "Mocktails aussi bons que les vrais"],
  },
  {
    title: "Cuisine maison & planches",
    sticker: "Fait ici",
    text: "Tartes flambées, wraps, frites qui claquent, tapas et planches à partager. À midi, c'est fait maison, et ça se sent dès la première bouchée.",
    image: food,
    items: ["Tartes flambées", "Wraps, frites & snacks apéro", "Planches à partager & tapas"],
  },
];

const evenements = [
  {
    day: "Tous les jeudis · 19h",
    title: "Viewing party Drag Race France",
    text: "Grand écran, applaudissements, gasps collectifs et pronostics hasardeux. On garde une place au chaud pour toi.",
    image: eventDrag,
  },
  {
    day: "Régulièrement",
    title: "Quiz & soirées déguisées",
    text: "Des soirées à thème où le seul dress code, c'est la bonne humeur. Les équipes de quiz se forment au comptoir.",
    image: jeux,
  },
  {
    day: "Toute la saison",
    title: "Expos photo & terrasse",
    text: "Les murs bleu canard accueillent des expos (coucou @morganephotos), et la terrasse accueille tout le reste.",
    image: terrasse,
  },
];

const avis = [
  {
    text: "On y entre pour un verre, on y reste pour l'ambiance. Les gérantes sont adorables, on se sent comme à la maison.",
    name: "Camille",
  },
  {
    text: "La cuisine maison du midi est top, et le choix de bières fait plaisir. Rapport qualité/prix imbattable.",
    name: "Yanis",
  },
  {
    text: "Enfin un endroit à Strasbourg où on peut être soi-même sans se poser de question. Et les cocktails géants, quelle idée.",
    name: "Léa",
  },
];

function Index() {
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Carte />
        <Evenements />
        <Galerie />
        <Avis />
        <Infos />
        <Reservation />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-fuchsia-pop/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-80 rounded-full bg-mint/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="reveal">
          <span className="sticker">
            <Sparkles className="size-3.5" /> Safe place strasbourgeoise
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-bold sm:text-6xl">
            On a le goût doux,
            <br />
            <span className="text-gradient-pop">et la fête facile.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Bar-bistrot pop et inclusif au 64 rue de Zurich. Cocktails géants, cuisine maison,
            murs bleu canard et zéro regard de travers. Ici, tu es chez toi — vraiment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reservation" className="btn-pop">
              Réserver une table
            </a>
            <a href="#carte" className="btn-ghost-pop">
              Voir la carte
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 text-secondary">
              <Star className="size-4 fill-current" /> 4,7/5 sur Restaurant Guru
            </span>
            <span>· Ouvert du mardi au samedi</span>
          </p>
        </div>
        <div className="reveal relative">
          <img
            src={heroBar}
            alt="Ambiance chaleureuse du Bistrot O'Goût Doux : murs bleu canard, abat-jours colorés et clients au comptoir"
            width={1600}
            height={1104}
            className="w-full rounded-[2rem] border-2 border-mint/40 object-cover shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-2xl bg-mint px-4 py-3 font-display font-semibold text-teal-deep shadow-xl">
            <Martini className="mb-1 inline size-4" /> Cocktails XXL depuis février 2026
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="sticker">{kicker}</span>
      <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}

function Concept() {
  return (
    <section id="concept" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <SectionTitle kicker="Le concept" title="Un bistrot pop, tenu par deux amoureuses du monde" />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            En février 2026, l'ancien « L'Algorythme » a laissé sa place à quelque chose de plus
            coloré : <strong className="text-foreground">Le Bistrot O'Goût Doux</strong>. Caroline
            et Tania Schwoerer-Hunsinger y ont posé leurs valises, leurs coussins pop et leur idée
            fixe — que tout le monde puisse pousser la porte sans se demander comment il sera reçu.
          </p>
          <p>
            Étudiants, collègues en pause déj', communauté LGBTQ+, voisins du quartier : ici on
            partage les planches et rarement les préjugés. Orientation, identité, humeur du jour :
            tu viens comme tu es.
          </p>
          <p>
            La déco raconte le reste : murs bleu canard, abat-jours dépareillés, porte-bouteilles en
            forme de talon aiguille, et des trouvailles qui changent au fil des envies.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Inclusif", "Chaleureux", "Fait maison", "Sans chichis"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-mint/50 px-3 py-1 font-display text-sm text-mint"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={owners}
            alt="Caroline et Tania Schwoerer-Hunsinger derrière le comptoir du bistrot"
            width={1200}
            height={1000}
            loading="lazy"
            className="card-pop h-full w-full rounded-[1.75rem] object-cover sm:col-span-2"
          />
          <img
            src={decor}
            alt="Détail de la décoration : porte-bouteille en forme de talon et abat-jours colorés"
            width={1200}
            height={900}
            loading="lazy"
            className="card-pop w-full rounded-[1.75rem] object-cover"
          />
          <div className="card-pop flex flex-col justify-center gap-1 rounded-[1.75rem] p-6">
            <Heart className="size-6 text-fuchsia-pop" />
            <p className="font-display text-2xl font-bold">10 – 30 €</p>
            <p className="text-sm text-muted-foreground">
              Le budget moyen par personne. Le sourire est offert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carte() {
  return (
    <section id="carte" className="border-y border-border/60 bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="La carte" title="Ça shake, ça flambe, ça se partage" />
        <div className="grid gap-8 lg:grid-cols-2">
          {carte.map((c) => (
            <article key={c.title} className="card-pop overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="sticker">{c.sticker}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="size-2 rounded-full bg-fuchsia-pop" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evenements() {
  return (
    <section id="evenements" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <SectionTitle kicker="Mini-agenda" title="Des soirées qui ne ressemblent qu'à nous" />
      <div className="grid gap-6 md:grid-cols-3">
        {evenements.map((e) => (
          <article key={e.title} className="card-pop overflow-hidden">
            <img
              src={e.image}
              alt={e.title}
              width={1200}
              height={900}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <p className="font-display text-sm font-semibold tracking-wide text-secondary uppercase">
                {e.day}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Disc3 className="size-4 text-mint" /> Jeux de société dispo sur place, terrasse ouverte dès
        qu'il fait beau (et parfois même avant).
      </p>
    </section>
  );
}

function Galerie() {
  const shots = [
    { src: heroBar, alt: "Le comptoir un soir de semaine" },
    { src: decor, alt: "Déco pop et abat-jours" },
    { src: cocktails, alt: "Cocktails colorés format géant" },
    { src: food, alt: "Tartes flambées et planches à partager" },
    { src: eventDrag, alt: "Soirée viewing party Drag Race France" },
    { src: terrasse, alt: "La terrasse rue de Zurich" },
  ];
  return (
    <section id="galerie" className="border-y border-border/60 bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Galerie" title="La preuve en images (non retouchée, ou presque)" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {shots.map((s, i) => (
            <img
              key={s.alt}
              src={s.src}
              alt={s.alt}
              width={1200}
              height={900}
              loading="lazy"
              className={`w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.03] ${
                i % 5 === 0 ? "h-64" : "h-44"
              }`}
            />
          ))}
        </div>
        <a
          href="https://www.instagram.com/lebistrotogoutdoux"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost-pop mt-8"
        >
          <Instagram className="size-4" /> Suivre @lebistrotogoutdoux
        </a>
      </div>
    </section>
  );
}

function Avis() {
  return (
    <section id="avis" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <SectionTitle kicker="Avis clients" title="Ils sont venus, ils sont revenus" />
      <div className="grid gap-6 md:grid-cols-3">
        {avis.map((a) => (
          <blockquote key={a.name} className="card-pop p-6">
            <div className="flex gap-1 text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-muted-foreground italic">« {a.text} »</p>
            <footer className="mt-4 font-display font-semibold">— {a.name}</footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Note moyenne de 4,6/5 sur plusieurs centaines d'avis. Les 0,4 restants, on les travaille.
      </p>
    </section>
  );
}

const equipements = [
  { icon: Sun, label: "Terrasse" },
  { icon: Wifi, label: "Wifi gratuit" },
  { icon: Accessibility, label: "Accès handicapés" },
  { icon: CreditCard, label: "Cartes acceptées" },
  { icon: Tv, label: "Écran / TV" },
  { icon: Martini, label: "Licence IV" },
];

function Infos() {
  return (
    <section id="contact" className="border-y border-border/60 bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Infos pratiques" title="Où nous trouver (et quand)" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card-pop p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                <Clock className="size-5 text-mint" /> Horaires
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {[
                  ["Lundi", "Fermé"],
                  ["Mardi – Vendredi", "12h00 – 01h00"],
                  ["Samedi", "16h00 – 01h00"],
                  ["Dimanche", "Fermé"],
                ].map(([d, h]) => (
                  <li key={d} className="flex justify-between border-b border-border/50 pb-2">
                    <span>{d}</span>
                    <span className="font-display font-semibold text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-pop p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                <MapPin className="size-5 text-fuchsia-pop" /> Adresse & contact
              </h3>
              <p className="mt-3 text-muted-foreground">64 Rue de Zurich, 67000 Strasbourg</p>
              <a
                href="tel:+33612426132"
                className="mt-2 flex items-center gap-2 font-display font-semibold text-secondary"
              >
                <Phone className="size-4" /> 06 12 42 61 32
              </a>
              <div className="mt-5 flex flex-wrap gap-2">
                {equipements.map((e) => (
                  <span
                    key={e.label}
                    className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    <e.icon className="size-3.5" /> {e.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-mint/40">
            <iframe
              title="Carte — Le Bistrot O'Goût Doux, 64 rue de Zurich, Strasbourg"
              src="https://www.google.com/maps?q=64%20Rue%20de%20Zurich%2C%2067000%20Strasbourg&output=embed"
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      nom: form.get("nom"),
      tel: form.get("tel"),
      date: form.get("date"),
      heure: form.get("heure"),
      pax: form.get("pax"),
      occasion: form.get("occasion"),
      message: form.get("message"),
    };

    const { data, error } = await supabase.functions.invoke("reserve", {
      body: payload,
    });

    setLoading(false);

    if (error || !data?.success) {
      setErrorMessage(
        data?.error ?? "Oups, un souci technique. Appelle-nous directement au 06 12 42 61 32 !",
      );
      return;
    }

    setConfirmationMessage(data.message);
    setSent(true);
  }

  return (
    <section id="reservation" className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <SectionTitle kicker="Réservation" title="Garde-nous une table (ou toute la terrasse)" />
      {sent ? (
        <div className="card-pop p-8 text-center">
          <Sparkles className="mx-auto size-8 text-secondary" />
          <h3 className="mt-3 font-display text-2xl font-bold">{confirmationMessage}</h3>
          <p className="mt-2 text-muted-foreground">
            Une urgence de dernière minute ?{" "}
            <a href="tel:+33612426132" className="text-secondary underline">
              06 12 42 61 32
            </a>
          </p>
        </div>
      ) : (
        <form className="card-pop grid gap-4 p-6 sm:grid-cols-2" onSubmit={handleSubmit}>
          <Field label="Prénom & nom" name="nom" />
          <Field label="Téléphone" name="tel" type="tel" />
          <Field label="Date" name="date" type="date" />
          <Field label="Heure" name="heure" type="time" />
          <Field label="Nombre de personnes" name="pax" type="number" />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="occasion" className="font-display text-sm font-semibold">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              className="rounded-xl border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:border-fuchsia-pop"
            >
              <option>Un verre entre potes</option>
              <option>Pause déj'</option>
              <option>Viewing party Drag Race</option>
              <option>Soirée quiz</option>
              <option>Anniversaire / privatisation</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="message" className="font-display text-sm font-semibold">
              Un mot pour Caroline & Tania
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="rounded-xl border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:border-fuchsia-pop"
              placeholder="Allergies, poussette, envie d'un cocktail géant..."
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-destructive sm:col-span-2">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-pop sm:col-span-2 disabled:opacity-60"
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
          <p className="text-center text-xs text-muted-foreground sm:col-span-2">
            Réponse par téléphone. Tu peux aussi nous appeler directement au 06 12 42 61 32.
          </p>
        </form>
      )}
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-display text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="rounded-xl border border-input bg-background px-3 py-2.5 text-foreground outline-none focus:border-fuchsia-pop"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background/70 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            Le Bistrot <span className="text-gradient-pop">O'Goût Doux</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            64 Rue de Zurich, 67000 Strasbourg
            <br />
            <a href="tel:+33612426132" className="hover:text-secondary">
              06 12 42 61 32
            </a>
          </p>
        </div>
        <div>
          <p className="font-display font-semibold">On se suit ?</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.instagram.com/lebistrotogoutdoux"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-fuchsia-pop hover:text-fuchsia-pop"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="https://www.facebook.com/ogoutdoux67"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-mint hover:text-mint"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
        <div className="text-xs leading-relaxed text-muted-foreground">
          <p className="font-display text-sm font-semibold text-foreground">Mentions légales</p>
          <p className="mt-2">
            O'GOÛT DOUX (SAS) — SIREN 992 383 851 — SIRET 992 383 851 00019 — TVA FR17992383851 —
            Capital social 3 000 €.
          </p>
        </div>
      </div>
    </footer>
  );
}
