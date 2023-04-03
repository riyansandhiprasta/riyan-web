import {FaBehance, FaGithub, FaInstagram, FaLinkedin, FaRegFile } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <section id="intro" className="bg-white min-h-screen -mt-20 grid grid-cols-1 place-content-center">
            <h1 className="text-3xl md:text-6xl text-slate-500 font-bold">
                <span className=""> Hello there! </span> <br/>
                You can call me <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Riyan </span>
            </h1>

            <h2 className="text-slate-500 md:text-xl font-medium mt-2">
                Passionate in <br/>
                <span className="text-cyan-500"> UI/UX Design </span> & 
                <span className="text-purple-500"> Front-End Dev </span>
            </h2>

            <div className="flex gap-4 mt-4 text-slate-500 text-sm w-8/12">
                <div>
                    <a href="https://linkedin.com/in/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                        <FaLinkedin/> linkedin
                    </a>
                </div>
                <div>
                    <a href="https://github.com/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                        <FaGithub/> github
                    </a>
                </div>
                <div>
                    <a href="https://instagram.com/riyansandhiprasta" target="_blank" className="flex gap-1 items-center hover:text-cyan-400">
                        <FaInstagram/> instagram
                    </a>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <div>
                    <a href="/" className="bg-white shadow-lg shadow-cyan-500/30 text-cyan-500 border border-cyan-500 px-3 py-2 rounded-md hover:text-slate-600">Websites</a>
                </div>
                <div>
                    <a href="#projects" className="bg-white shadow-lg shadow-purple-500/50  text-cyan-500 border border-cyan-500 px-3 py-2 rounded-md hover:text-slate-600">Designs</a>
                </div>
            </div>
        </section>

        <section id="about" className="h-[35rem] py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mt-8">
                        About Me
                    </h1>

                    <div className="w-32 h-2 mt-1 mb-4 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>

                <div className="grid grid-cols-1">
                    <img src="/profile.png" alt="" className="bg-cyan-500 w-40 lg:w-50 rounded-full mt-4 mb-4"/>
                    <p className="text-md text-slate-500">
                        A fresh graduate bachelor of Computer Science. <br/> I have strong interest and passionate with <span className="text-purple-500 font-medium"> UI/UX Design </span>, and also <span className="text-purple-500 font-medium"> Front-End Development </span>. <br/> Experienced for leadership, team management, and can work as a team or individual.
                    </p>
                    <div className="flex gap-1 text-cyan-400 text-sm items-center w-32 mt-3 hover:text-slate-400">
                        <FaRegFile/>
                        <a href="https://drive.google.com/file/d/1z3QnDgPewth4Xlmfv8FmV45__q6xUBhf/view?usp=sharing" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div className="w-full py-20 bg-gradient-to-r from-cyan-300 to-purple-400 place-content-center mt-20 lg:mt-1">
            <h1 className="text-white text-md font-semibold text-center place-content-center">Learn more about me.</h1>
        </div>

        <section id="projects" className="mt-12 py-20 md:mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-400 mb-4">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Design </span> <br/>Projects
            </h1>

            <div className="w-32 h-2 mb-4 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <a href="https://shared-manchego-047.notion.site/SewaMobil-id-Website-Rental-Mobil-6d610e3cee5f4704a042be7b34dfc558" target="_blank" className="p-3 duration-100 hover:border border-slate-400 rounded-lg hover:shadow-lg">
                    <img src="/SewaMobil.png" alt="" className="rounded-lg" />
                    <h3 className="text-slate-500 text=lg font-semibold mt-2">
                        SewaMobil.id - UI/UX Study Case
                    </h3>
                    <p className="text-slate-400 text-sm">Study case to making a website design for car rental company. - Kampus Merdeka, 2022.</p>
                </a>
                <a href="https://shared-manchego-047.notion.site/Redesain-Website-Pemprov-Bali-aaecfd95305d456a9df3799180ad789a" target="_blank" className="p-3 duration-100 hover:border border-slate-400 rounded-lg hover:shadow-lg">
                    <img src="/BaliProv.png" alt="" className="rounded-lg" />
                    <h3 className="text-slate-500 text=lg font-semibold mt-2">
                        Pemprov Bali Web - Design Revamp
                    </h3>
                    <p className="text-slate-400 text-sm">Study case to redesigning Bali Province Goverment Website. - Kampus Merdeka, 2022.</p>
                </a>
            </div>
        </section>

        <section className="mt-20 mb-10">
            <h1 className="font-extrabold text-4xl md:text-6xl text-slate-400 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> UI Design </span> <br/>Exploration
            </h1>

            <div className="w-32 h-2 mb-6 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <img src="/tokonft.png" className="rounded-lg duration-100 hover:-translate-y-1 hover:shadow-md" alt="" />
                </div>
                <div>
                    <img src="/siniar.png" className="rounded-lg duration-100 hover:-translate-y-1" alt="" />
                </div>
                <div>
                    <img src="/tiketin.png" className="rounded-lg duration-100 hover:-translate-y-1" alt="" />
                </div>
                <div>
                    <img src="/uangku.png" className="rounded-lg duration-100 hover:-translate-y-1" alt="" />
                </div>
            </div>
        </section>

        <section className="technologies py-20 mt-36">
            <h1 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Technologies
            </h1>
            <div className="grid grid-cols-4 items-center gap-6 mt-8 w-8/12 mx-auto">
                <img src="/figma.svg" alt="Figma" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/react.svg" alt="ReactJS" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/tailwind.svg" alt="TailwindCSS" className="w-20 mx-auto hover:-translate-y-1 duration-150" />
                <img src="/laravel.svg" alt="Laravel"  className="w-20 mx-auto hover:-translate-y-1 duration-150"/>
            </div>
        </section>

        <section className="footer mt-10 mb-28">
            <div className="py-28">
                <h1 className="text-xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mt-8 mb-6">
                    Keep get in touch
                </h1>
                <div className="flex justify-center gap-6 text-4xl text-purple-400 mt-2">
                    <a href="https://github.com/riyansandhiprasta" target="_blank" className="hover:text-cyan-500 duration-150 hover:-translate-y-1">
                        <FaGithub/>
                    </a>
                    <a href="https://linkedin.com/in/riyansandhiprasta" target="_blank" className="hover:text-cyan-500 duration-150 hover:-translate-y-1">
                        <FaLinkedin/>
                    </a>
                    <a href="https://behance.net/riyansandhiprasta" target="_blank" className="hover:text-cyan-500 duration-150 hover:-translate-y-1">
                        <FaBehance/>
                    </a>
                    <a href="https://instagram.com/riyansandhiprasta" target="_blank" className="hover:text-cyan-500 duration-150 hover:-translate-y-1">
                        <FaInstagram/>
                    </a>
                </div>

            </div>
        </section>
        </>
    )
}