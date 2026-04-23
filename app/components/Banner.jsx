'use client';

import { useEffect } from "react";
import Image from "next/image";
import {FaBehance, FaGithub, FaInstagram, FaLinkedin, FaRegFile } from "react-icons/fa";
import emailIcon from "../../public/icons/email.svg";
import arrowDown from "../../public/icons/arrow-down.svg";
import arrowTopRight from "../../public/icons/arrow-top-right.svg";
import bannerImage from "../../public/banner-image.png";

export default function Banner() {
    // looping typing animation
    useEffect(() => {
        const el = document.querySelector(".typing");
        if (!el) return;

        const text = "Riyan";
        let i = 0;
        let deleting = false;

        function loop() {
        el.textContent = text.slice(0, i);

        if (!deleting) {
            i++;
            if (i > text.length) {
            deleting = true;
            setTimeout(loop, 5000); // pause after typing
            return;
            }
        } else {
            i--;
            if (i < 0) {
            deleting = false;
            i = 0;
            }
        }

        setTimeout(loop, deleting ? 60 : 100);
        }

        loop();
    }, []);

    return (
        <section id="intro" className="min-h-screen grid grid-cols-12 place-content-center page-container">
            <div className="col-span-12 md:col-span-8">
                <h1 className="text-3xl md:text-7xl font-display flex flex-col" data-sal="slide-up" data-sal-duration="500" data-sal-delay="250">
                    <span className="mb-4"> Hello! <span className="waving relative"><span className="hand-icon">👋</span></span></span>
                    <span>You can call me <span className="typing underline"></span></span>
                </h1>

                <h2 className="  md:text-xl font-display mt-8 mb-[60px]" data-sal="slide-up" data-sal-duration="500" data-sal-delay="450">
                    A website developer, based in Bali, ID. <br/> Currently developing websites at Juiecbox Indonesia.
                </h2>

                <div className="flex gap-8 md:gap-10 mt-4 text-sm w-8/12">
                    <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="550">
                        <a href="https://linkedin.com/in/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                            <FaLinkedin/> linkedin
                        </a>
                    </div>
                    <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="650">
                        <a href="https://github.com/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                            <FaGithub/> github
                        </a>
                    </div>
                    <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="750">
                        <a href="https://instagram.com/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                            <FaInstagram/> instagram
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex gap-8 md:gap-10">
                    <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="850">
                        <a href="#projects-web" className="flex gap-2 items-center">
                            <Image src={arrowDown} alt="arrow down icon" />
                            <span>My Projects</span>
                        </a>
                    </div>
                    <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="950">
                        <a href="mailto:sandhiprasta@gmail.com" target="_blank" className="flex gap-2 items-center">
                            <Image src={emailIcon} alt="email icon"/>
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex items-center justify-center">
                <div className="banner-image-wrap hidden lg:block" data-sal="slide-up" data-sal-duration="700" data-sal-delay="650">
                    <Image src={bannerImage} alt="Banner Image" width={286} height={286}></Image>
                </div>
            </div>
        </section>
    );
}