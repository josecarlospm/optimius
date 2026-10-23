import { useTranslations } from "next-intl";
import { SiteHeader } from "./SiteHeader";
import { VineMotif } from "./VineMotif";

export function LandingPage() {
  const hero = useTranslations("hero");
  const process = useTranslations("process");
  const demo = useTranslations("demo");
  const features = useTranslations("features");
  const results = useTranslations("results");
  const cta = useTranslations("cta");
  const footer = useTranslations("footer");
  const nav = useTranslations("nav");

  const steps = process.raw("steps") as Array<{
    n: string;
    title: string;
    body: string;
  }>;
  const featureItems = features.raw("items") as Array<{
    title: string;
    body: string;
  }>;
  const stats = results.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <div className="relative min-h-screen">
      <div className="atmosphere" aria-hidden="true" />
      <VineMotif className="vine-drift pointer-events-none absolute -right-8 top-16 z-0 h-[70vh] w-auto opacity-40 md:right-0 md:opacity-55" />

      <div className="relative z-10">
        <SiteHeader />

        <main>
          <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-8 md:px-8">
            <p className="fade-up mb-5 text-sm font-medium tracking-[0.18em] text-emerald uppercase">
              {hero("eyebrow")}
            </p>
            <h1 className="fade-up-delay max-w-3xl text-5xl leading-[1.05] font-semibold tracking-tight text-foreground md:text-7xl">
              <span className="block text-muted">{hero("titleLead")}</span>
              <span className="block text-emerald">{hero("titleEm")}</span>
              <span className="block">{hero("titleTail")}</span>
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {hero("subtitle")}
            </p>
            <div className="fade-up-delay-2 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {hero("cta")}
              </a>
              <a
                href="#how"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/30"
              >
                {hero("secondary")}
              </a>
            </div>
          </section>

          <section id="how" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8">
            <p className="mb-3 text-sm tracking-[0.16em] text-copper uppercase">
              {process("label")}
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {process("title")}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{process("subtitle")}</p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.n} className="border-t border-white/10 pt-6">
                  <p className="font-mono text-sm text-emerald">{step.n}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
            <p className="mb-3 text-sm tracking-[0.16em] text-copper uppercase">
              {demo("label")}
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {demo("title")}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{demo("subtitle")}</p>

            <div className="demo-glow mt-12 overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-6 backdrop-blur-sm md:p-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-xs text-emerald">01</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {demo("step1Title")}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{demo("step1Body")}</p>
                  <label className="mt-6 block text-xs tracking-wide text-muted uppercase">
                    {demo("businessLabel")}
                    <input
                      readOnly
                      value={demo("businessExample")}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-foreground outline-none"
                    />
                  </label>
                  <p className="mt-3 flex items-center gap-2 text-sm text-emerald">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald" />
                    {demo("found")}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <p className="font-mono text-xs text-emerald">02</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {demo("step2Title")}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{demo("step2Body")}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald/25 bg-emerald-soft p-5">
                    <p className="font-mono text-xs text-emerald">
                      cafeonda.optimius.eu
                    </p>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-sm text-muted">{demo("online")}</p>
                        <p className="mt-1 text-3xl font-semibold text-foreground">
                          98
                          <span className="ml-2 text-sm font-normal text-muted">
                            Lighthouse
                          </span>
                        </p>
                      </div>
                      <p className="font-mono text-sm text-emerald">⚡ 1.2s</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-emerald">03</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {demo("step3Title")}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{demo("step3Body")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8"
          >
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {features("title")}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{features("subtitle")}</p>
            <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {featureItems.map((item) => (
                <article key={item.title}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="results"
            className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8"
          >
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {results("title")}
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8 border-y border-white/10 py-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight text-emerald md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="cta"
            className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald/10 via-transparent to-copper/10 px-8 py-14 md:px-14">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                {cta("titleLead")}{" "}
                <span className="text-emerald">{cta("titleEm")}</span>?
              </h2>
              <p className="mt-5 max-w-xl text-muted">{cta("subtitle")}</p>
              <a
                href="mailto:info@optimius.eu"
                className="mt-8 inline-flex rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {cta("button")}
              </a>
              <p className="mt-4 text-sm text-muted">{cta("note")}</p>
            </div>
          </section>
        </main>

        <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="text-lg font-semibold">Optimius</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                {footer("tagline")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {footer("product")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  <a href="#how" className="hover:text-foreground">
                    {nav("how")}
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-foreground">
                    {nav("features")}
                  </a>
                </li>
                <li>
                  <a href="#cta" className="hover:text-foreground">
                    {nav("signUp")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {footer("legal")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>{footer("complaints")}</li>
                <li>{footer("privacy")}</li>
                <li>{footer("terms")}</li>
                <li>
                  <a
                    href="mailto:info@optimius.eu"
                    className="hover:text-foreground"
                  >
                    {footer("contact")}: info@optimius.eu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-xs text-muted">
            © {new Date().getFullYear()} {footer("rights")}
          </p>
          <p className="mt-2 max-w-3xl text-xs text-muted/80">
            {footer("aiNote")}
          </p>
        </footer>
      </div>
    </div>
  );
}
