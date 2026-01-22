export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/mjsalvador' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/matthewsalvador' },
  ]

  return (
    <footer className="bg-stone-900 py-8 px-8 text-gray-200">
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-tight hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs uppercase tracking-widest">
            &copy; {currentYear} Matthew Salvador
          </p>
        </div>
      </div>
    </footer>
  )
}