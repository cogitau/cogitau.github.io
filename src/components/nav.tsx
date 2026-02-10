import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "https://cogitau.github.io/stream-system", label: "Explorations", external: true },
  { href: "/blog", label: "Blog" },
  { href: "/journal", label: "Journal" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="flex gap-6 pt-12 pb-8 text-xs uppercase tracking-[0.15em]">
      {links.map(({ href, label, external }) =>
        external ? (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ) : (
          <Link
            key={href}
            href={href}
            className="text-muted transition-colors hover:text-foreground"
          >
            {label}
          </Link>
        )
      )}
    </nav>
  );
}
