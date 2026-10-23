import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
      <Link href="/" className="group flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-emerald/30 bg-emerald/10 text-sm font-semibold text-emerald">
          O
        </span>
        <span className="text-lg font-semibold tracking-tight text-foreground transition group-hover:text-emerald">
          Optimius
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
        <a href="#how" className="transition hover:text-foreground">
          {t("how")}
        </a>
        <a href="#features" className="transition hover:text-foreground">
          {t("features")}
        </a>
        <a href="#results" className="transition hover:text-foreground">
          {t("results")}
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <LocaleSwitcher />
        <a
          href="#cta"
          className="hidden rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-muted transition hover:border-white/25 hover:text-foreground sm:inline-flex"
        >
          {t("signIn")}
        </a>
        <a
          href="#cta"
          className="rounded-full bg-emerald px-3.5 py-1.5 text-sm font-medium text-black transition hover:brightness-110"
        >
          {t("signUp")}
        </a>
      </div>
    </header>
  );
}
