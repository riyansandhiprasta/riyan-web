import {FaDribbble, FaFigma, FaGithub, FaInstagram, FaLaravel, FaLinkedin, FaReact, FaRegMoon } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <section id="intro" className="bg-white min-h-screen -mt-20 grid grid-cols-1 place-content-center">
            <h1 className="text-3xl lg:text-6xl text-slate-500 font-bold">
                <span className=""> Hello there! </span> <br/>
                You can call me <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Riyan </span>
            </h1>

            <h2 className="text-slate-500 lg:text-xl font-medium mt-2">
                Passionate in <br/>
                <span className="text-cyan-500"> UI/UX Design </span> & 
                <span className="text-purple-500"> Front-End Dev </span>
            </h2>

            <div className="flex gap-4 mt-4 text-slate-500 text-sm w-8/12">
                <div>
                    <a href="https://linkedin.com/in/riyansandhiprasta" className="flex gap-1 items-center">
                        <FaLinkedin/> linkedin
                    </a>
                </div>
                <div>
                    <a href="https://github.com/riyansandhiprasta" className="flex gap-1 items-center">
                        <FaGithub/> github
                    </a>
                </div>
                <div>
                    <a href="https://instagram.com/riyansandhiprasta" className="flex gap-1 items-center">
                        <FaInstagram/> instagram
                    </a>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <div>
                    <a href="http://" className="bg-white shadow-lg shadow-cyan-500/30 text-cyan-500 border border-cyan-500 px-3 py-2 rounded-md hover:text-slate-600">Websites</a>
                </div>
                <div>
                    <a href="http://" className="bg-white shadow-lg shadow-purple-500/50  text-cyan-500 border border-cyan-500 px-3 py-2 rounded-md hover:text-slate-600">Designs</a>
                </div>
            </div>
        </section>

        <section id="about" className="h-[35rem] py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mt-8">
                    About Me
                </h1>
                <div className="grid grid-cols-1">
                    <img src="/profile.png" alt="" className="bg-slate-500 w-40 lg:w-60 rounded-full mt-4 mb-4"/>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est possimus quaerat, quidem enim molestias illum ab repudiandae quibusdam nemo necessitatibus cumque error autem debitis rem deleniti unde doloribus repellendus quod.
                    </p>
                </div>
            </div>
        </section>

        <section id="projects" className="mt-12 py-20 lg:mb-8">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-400 mb-4">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Design </span>Projects
            </h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <a href="https://" className="p-3 hover:border border-slate-400 rounded-lg ease-in duration-300">
                    <img src="/SewaMobil.png" alt="" className="rounded-lg" />
                    <h3 className="text-slate-500 text=lg font-semibold mt-2">
                        SewaMobil.id - Study Case Project
                    </h3>
                    <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum.</p>
                </a>
                <a href="https://" className="p-3 hover:border border-slate-400 rounded-lg duration-300">
                    <img src="/BaliProv.png" alt="" className="rounded-lg" />
                    <h3 className="text-slate-500 text=lg font-semibold mt-2">
                        Pemprov Bali Web - Web Design Revamp
                    </h3>
                    <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum.</p>
                </a>
            </div>
        </section>

        <section className="mt-20">
            <h1 className="font-extrabold text-4xl lg:text-6xl text-slate-400 mb-4 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> UI Design </span> Exploration
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                    <img src="/tokonft.png" className="rounded-lg hover:-translate-y-1" alt="" />
                </div>
                <div>
                    <img src="/siniar.png" className="rounded-lg hover:-translate-y-1" alt="" />
                </div>
                <div>
                    <img src="/tiketin.png" className="rounded-lg hover:-translate-y-1" alt="" />
                </div>
                <div>
                    <img src="/uangku.png" className="rounded-lg hover:-translate-y-1" alt="" />
                </div>
            </div>
        </section>

        <section className="footer mt-20 mb-10">
            <div>
                <h1 className="text-xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mt-8 mb-4">
                    Keep Get In Touch
                </h1>
                <div className="flex justify-center gap-4 text-3xl text-purple-500">
                    <a href="https://linkedin.com/in/riyansandhiprasta">
                        <FaLinkedin/>
                    </a>
                    <a href="https://instagram.com/riyansandhiprasta">
                        <FaInstagram/>
                    </a>
                </div>

            </div>
        </section>
        </>
    )
}