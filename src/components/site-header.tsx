import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about-me" },
  ];

  return (
    <nav className="flex items-center px-8 py-4 w-full justify-between fixed top-0 bg-white z-50 border-b border-gray-100 text-stone-900">
      {/* Logo / Brand */}
      <a
        href="#"
        className="text-xs uppercase tracking-widest hover:text-stone-600 transition-colors"
      >
        Matthew Salvador
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs uppercase tracking-widest hover:text-stone-600 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-stone-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-stone-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-stone-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
