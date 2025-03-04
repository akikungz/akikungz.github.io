import Image from "next/image";
import type { Project } from "@/assets/projects";

export default function Project({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="aspect-3/2 relative rounded-lg">
      <Image
        className="w-full h-full object-cover rounded-lg"
        src={project.image}
        alt={project.title}
        width={720}
        height={480}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 text-white rounded-b-2xl">
        <h2 className="text-md font-bold">
          {project.title}
        </h2>
        {
          project.description && (
            <p className="text-xs">
              {
                project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description
              }
            </p>
          )
        }
      </div>
    </a>
  );
}