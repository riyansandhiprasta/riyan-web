import Image from "next/image";
import Link from "next/link";
import arrowTopRight from "../../public/icons/arrow-top-right.svg";
import timeIcon from "../../public/icons/time.svg";

export default function ProjectCard ({project}) {
    return (
        <div className="project-card" data-sal="slide-up" data-sal-duration="500" data-sal-delay="450">
            <div className="card-image">
                <Image src={project.thumbnail} alt={project.title} fill/>
            </div>
            <h3 className="text-xl md:text-3xl font-display mt-8 mb-4">{project.title}</h3>
            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex align-middle gap-2 link">
                <span className="">{project.live ? 'Visit live site' : 'Coming Soon'}</span>
                <Image src={project.live ? arrowTopRight : timeIcon} alt="site link icon"></Image>
            </Link>
        </div>
    )
}