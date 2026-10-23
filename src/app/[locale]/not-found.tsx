import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6">
      <p className="text-sm tracking-[0.16em] text-emerald uppercase">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-black"
      >
        Optimius home
      </Link>
    </main>
  );
}
