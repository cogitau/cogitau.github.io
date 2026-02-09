export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
      &copy; {new Date().getFullYear()}
    </footer>
  );
}
