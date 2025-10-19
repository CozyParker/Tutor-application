export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight py-10">
      {/* Footer with navigation and motto */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Roognis Tutoring</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">Unity. Connectivity. Synergy.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/60">
          {[
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Join Us", href: "#join" }
          ].map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-teal-200">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-white/30">© {new Date().getFullYear()} Roognis AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
