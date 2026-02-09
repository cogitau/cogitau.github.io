export function Footer() {
  return (
    <footer className="py-12 text-center text-xs uppercase tracking-[0.15em] text-muted">
      <div className="mx-auto mb-6 w-12 border-t border-border" />
      &copy; {new Date().getFullYear()}
    </footer>
  );
}
