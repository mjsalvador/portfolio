export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        {/* Main Headline */}
        <div className="mb-8 tracking-tight">
          <h1 className="text-gray-900 leading-tight">
            Hey there, I'm Matthew Salvador
          </h1>
          {/* <p>Software Engineer currently working on <span className="font-semibold underline">Constituent</span></p> */}
          <p className="text-gray-700 font-medium">
            a Software Engineer focused on delivering scalable, data-driven
            platforms
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-6xl">
          <p className="text-3xl text-gray-600 font-light leading-tight">
            Bridging the gap between modern-day technology and a resilient future.
            Over 5 years of experience building enterprise and consumer-facing products
            in the automotive and education industries. Previously worked at Volkswagen
            Group of America building internal platforms that powered connected-vehicle
            and analytics workflows.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col">
          <a
            href="#projects"
            className="underline text-gray-900 transition-colors"
          >
            Projects↓
          </a>
          <a
            href="#work"
            className="underline text-gray-900 transition-colors"
          >
            Work↓
          </a>
          <a
            href="#technologies"
            className="underline text-gray-900 transition-colors"
          >
            Technologies↓
          </a>
          <a
            href="#about"
            className="underline text-gray-900 transition-colors"
          >
            About me↓
          </a>
        </div>
      </div>
    </section>
  );
}
