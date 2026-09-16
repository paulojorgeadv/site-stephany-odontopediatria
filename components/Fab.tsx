import { wa } from "./site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Fab() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_14px_36px_-12px_rgba(37,211,102,.8)] transition-transform hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden font-body text-[12px] uppercase tracking-[0.16em] sm:inline">
        Agendar
      </span>
    </a>
  );
}
