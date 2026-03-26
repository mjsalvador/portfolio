import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  title: string;
  description: string;
  roles: string[];
  links?: string[];
  images: [string, string][];
}

const ProjectCard = ({
  title,
  description,
  roles,
  images,
}: ProjectCardProps) => {
  return (
    <>
      <hr className="border-stone-900" />
      <li>
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-20 py-4">
          <div className="flex flex-col gap-2 flex-1 max-w-xl">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-sm leading-tight text-stone-800">
              {description}
            </p>
          </div>
          <aside className="flex flex-col gap-2 lg:min-w-max">
            <p className="font-semibold text-lg">Role</p>
            <ul className="list-none leading-tight text-sm">
              {roles.map((role, idx) => (
                <li key={idx} className="text-stone-800">
                  {role}
                </li>
              ))}
            </ul>
          </aside>
        </article>

        {/* Mobile Carousel */}
        <div className="mt-6 mb-8 px-8 lg:hidden">
          <Carousel>
            <CarouselContent className="items-center">
              {images.map(([alt, src], idx) => (
                <CarouselItem key={idx}>
                  <img
                    src={src}
                    alt={alt}
                    className="w-full max-w-sm md:max-w-md mx-auto h-auto object-cover rounded"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>

        {/* Desktop Image Grid */}
        <div className="hidden lg:flex flex-row lg:gap-24 justify-center mt-6 mb-8">
          {images.map(([alt, src], idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-80 shrink-0"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
