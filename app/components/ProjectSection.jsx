import ProjectGrid from "./ProjectGrid";

export default function ProjectSection() {
    return (
        <section id="projects-web" className="mt-12 py-[120px] md:mb-8 page-container">
            <h2 className="text-4xl md:text-7xl font-display" data-sal="slide-up" data-sal-duration="500" data-sal-delay="250">My Latest Projects</h2>
            <p className="mt-4 whitespace-normal break-words w-[80%] md:w-full" data-sal="slide-up" data-sal-duration="500" data-sal-delay="350"><span>All of these projects are under </span><a href="https://juicebox.co.id" target="_blank" className="underline underline-offset-4">Juicebox Indonesia</a> <span>🤝</span></p>
            <ProjectGrid/>
        </section>
    );
}