import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    return (
        <section id="project-grid" className="project-grid flex flex-wrap mt-[60px] gap-[64px] md:gap-[100px]">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </section>
    );
}