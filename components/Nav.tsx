import Link from "next/link";
import { site, wa } from "./site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#acolhimento", label: "Acolhimento" },
  { href: "#primeira-consulta", label: "Primeira consulta" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "/blog", label: "Blog" },
  { href: "/#instagram", label: "Instagram" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.05] bg-cream/80 backdrop-blur-md">
      <nav className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="#topo" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-ink sm:text-[1.4rem]">
            Dra. Stephany Carvalho
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold">
            Odontopediatria
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[13px] tracking-wide text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 font-body text-[12px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-0.5 sm:px-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Agendar consulta</span>
          <span className="sm:hidden">Agendar</span>
        </a>
      </nav>
      <span className="sr-only">{site.cro}</span>
    </header>
  );
}
