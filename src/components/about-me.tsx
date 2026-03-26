export default function AboutMe() {
  return (
    <section id="about-me" className="mb-20">
      <div>
        <div className="grid grid-cols-1 text-sm md:grid-cols-2">
          {/* About Section */}
          <div className="space-y-10 p-8 max-w-2xl">
            <div>
              <h2 className="font-semibold text-lg text-stone-900 mb-4">
                About Me
              </h2>
              <p className="leading-tight">
                Brooklyn-based software engineer with too many interests and a
                habit of going deep on whatever has my attention lately. Drawn
                to work that makes technology feel more human than complicated.
                Always on my toes; a curious explorer with many pursuits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div>
                <a
                  href="mailto:matthew.jsalvador@gmail.com"
                  className="leading-tight"
                >
                  matthew.jsalvador@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+19176640131" className="leading-tight">
                  (917) 664-0131
                </a>
              </div>
              <p className="leading-tight">Brooklyn, NY</p>
            </div>

            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline leading-tight"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
