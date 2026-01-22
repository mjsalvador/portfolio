interface ProjectCardProps {
  title: string
  description: string
  roles: string[]
}

const ProjectCard = ({ title, description, roles }: ProjectCardProps) => {
  return (
    <>
      <hr className="px-8 mb-2 border-b-0 border-stone-900" />
      <li className="w-full">
        <article className="flex gap-20">
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-sm leading-tight">{description}</p>
          </div>
          <aside className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Role</p>
            <ul className="list-none text-sm leading-tight">
              {roles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </aside>
        </article>
      </li>
    </>
  )
}

export default ProjectCard