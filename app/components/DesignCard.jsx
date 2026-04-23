import Image from "next/image";
import Link from "next/link";
import arrowTopRight from "../../public/icons/arrow-top-right.svg"

export default function DesignCard ({design}) {
    return (
        <div className="project-card" data-sal="slide-up" data-sal-duration="500" data-sal-delay="350">
            <div className="card-image">
                <Image src={design.thumbnail} alt={design.title} fill/>
            </div>
            <h3 className="text-xl md:text-3xl font-display mt-8 mb-4">{design.title}</h3>
            <Link href={design.url} target="_blank" rel="noopener noreferrer" className="flex align-middle gap-2 link">
                <span className="">{design.live ? 'See Details' : 'Find on Dribbble'}</span>
                <Image src={arrowTopRight} alt="arrow-top-right"></Image>
            </Link>
        </div>
    )
}