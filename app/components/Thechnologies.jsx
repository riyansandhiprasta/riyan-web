
export default function Technologies() {
    return(
        <section className="technologies py-20 mt-36 page-container">
            <h1 className="text-3xl md:text-7xl font-normal font-display text-center" data-sal="slide-up" data-sal-duration="500" data-sal-delay="250">
                Technologies Stack
            </h1>
            <div className="grid grid-cols-4 items-center gap-[60px] md:gap-6 mt-20 md:w-8/12 md:mx-auto" data-sal="slide-up" data-sal-duration="500" data-sal-delay="350">
                <img src="/figma.svg" alt="Figma" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/react.svg" alt="ReactJS" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/tailwind.svg" alt="TailwindCSS" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/laravel.svg" alt="Laravel"  className="w-20 mx-auto hover:-translate-y-1 duration-150"/>
            </div>
        </section>
    );
}