import {FaBehance, FaGithub, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import Image from "next/image";
import greenBlur from "../../public/green-blur.svg";

export default function Footer() {
    return (
        <section id="footer" className="footer mt-40 relative overflow-hidden">
            <div className="py-28 relative z-1">
                <div className="page-container">
                    <h2 className="text-[128px] font-display font-normal leading-[100%] mt-8 mb-12 md:mb-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="250">
                        Get<br></br>in touch
                    </h2>

                    <div className="social-wrap w-max md:ml-auto">
                        <h3 className="text-[36px] font-display mb-8 underline underline-offset-8 decoration-[1px]" data-sal="slide-up" data-sal-duration="500" data-sal-delay="350">Find me on:</h3>

                        <div className="flex flex-col justify-end gap-6 text-2xl mt-2">
                            <a href="https://github.com/riyansandhiprasta" target="_blank" className="hover:text-black hover:underline underline-offset-4 duration-150 hover:-translate-y-1 flex gap-2 items-center w-max" data-sal="slide-up" data-sal-duration="500" data-sal-delay="450">
                                <FaGithub/>
                                <span>Github</span>
                            </a>
                            <a href="https://linkedin.com/in/riyansandhiprasta" target="_blank" className="hover:text-black hover:underline underline-offset-4 duration-150 hover:-translate-y-1 flex gap-2 items-center w-max" data-sal="slide-up" data-sal-duration="500" data-sal-delay="550">
                                <FaLinkedin/>
                                <span>Linkedin</span>
                            </a>
                            <a href="https://dribbble.com/riyansandhiprasta" target="_blank" className="hover:text-black hover:underline underline-offset-4 duration-150 hover:-translate-y-1 flex gap-2 items-center w-max" data-sal="slide-up" data-sal-duration="500" data-sal-delay="650">
                                <FaDribbble/>
                                <span>Dribbble</span>
                            </a>
                            <a href="https://instagram.com/riyansandhiprasta" target="_blank" className="hover:text-black hover:underline underline-offset-4 duration-150 hover:-translate-y-1 flex gap-2 items-center w-max" data-sal="slide-up" data-sal-duration="500" data-sal-delay="750">
                                <FaInstagram/>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-[60px] md:gap-0 justify-between pt-[260px]">
                        <span className="text-md md:text-2xl font-display md:w-1/2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="850">Sandhiprasta&apos;s personal portfolio 2026</span>
                        <span className="flex justify-end gap-8 items-center md:w-1/2" data-sal="slide-up" data-sal-duration="500" data-sal-delay="950">
                            <span className="elm-with-bg w-[30%] h-[1px] bg-[#f1f1f1] block relative"></span>
                            <span className="text-md md:text-2xl font-display">made with love.</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="gradient absolute bottom-[-10%] md:bottom-[-70%] right-[-80%] md:right-[-30%] z-[-1]">
                <Image src={greenBlur} alt="gradient"/>
            </div>
        </section>
    );
}