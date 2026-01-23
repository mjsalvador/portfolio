export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-8 min-h-screen flex flex-col justify-center text-stone-900">
      <div className="max-w-4xl">
        {/* Main Headline */}
        <div className="mb-8 tracking-tight font-light">
          <h1 className="leading-tight">Hey there, I'm Matthew Salvador</h1>
          <p>
            a Software Engineer focused on delivering{" "}
            <span className="font-semibold ">
              scalable, data-driven platforms
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-6xl">
          <p className="text-3xl font-light tracking-tight leading-tight">
            Bridging the gap between modern-day technology and a resilient
            future. Over 5 years of experience building enterprise and
            consumer-facing products in the automotive and education industries.
            Previously worked at Volkswagen Group of America building internal
            platforms that powered connected-vehicle and analytics workflows.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col tracking-tight">
          <a href="#projects" className="underline transition-colors">
            Projects↓
          </a>
          <a href="#work" className="underline transition-colors">
            Work↓
          </a>
          <a href="#technologies" className="underline transition-colors">
            Technologies↓
          </a>
          <a href="#about" className="underline transition-colors">
            About me↓
          </a>
        </div>
      </div>
    </section>
  );
}
