import { Phone, CalendarHeart } from "lucide-react";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2 backdrop-blur-md lg:hidden">
      <div className="flex gap-2">
        <a href="tel:+33612426132" className="btn-ghost-pop flex-1 !py-3 text-sm">
          <Phone className="size-4" /> Appeler
        </a>
        <a href="#reservation" className="btn-pop flex-[1.4] !py-3 text-sm">
          <CalendarHeart className="size-4" /> Réserver
        </a>
      </div>
    </div>
  );
}
