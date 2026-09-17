"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-black font-semibold shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] hover:scale-[1.04] transition-transform"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}