"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const labels: Record<AppLocale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export function LocaleSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 text-xs font-medium tracking-wide"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={
              active
                ? "rounded-full bg-emerald/20 px-2.5 py-1 text-emerald"
                : "rounded-full px-2.5 py-1 text-muted transition hover:text-foreground"
            }
            aria-pressed={active}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
