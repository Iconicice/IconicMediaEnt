export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/80">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/40 text-sm font-medium">
          © {new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026} Ice Media Entertainment. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
