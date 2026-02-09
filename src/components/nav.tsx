import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/journal", label: "Journal" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="flex gap-6 py-6 text-sm">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
