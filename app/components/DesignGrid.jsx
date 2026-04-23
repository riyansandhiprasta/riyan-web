import designs from "../../data/designs.json";
import DesignCard from "./DesignCard";

export default function DesignGrid() {
    return (
        <section id="design-grid" className="design-grid flex flex-wrap mt-[60px] gap-[64px] md:gap-[100px]">
            {designs.map((design) => (
                <DesignCard
                    key={design.id}
                    design={design}
                />
            ))}
        </section>
    );
}