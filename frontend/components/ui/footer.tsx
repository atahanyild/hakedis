import Logo from "@/asssets/logo";

const links = [
  { label: "Docs", href: "https://github.com/atahanyild/hakedis/tree/main/docs/src" },
  { label: "GitHub", href: "https://github.com/atahanyild/hakedis" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Logo className="text-lg" />
          <p className="text-xs text-zinc-500">
            Yildiz Technical University &middot; Computer Engineering &middot; Ara Proje
          </p>
        </div>

        <nav className="flex gap-5 text-sm text-zinc-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
