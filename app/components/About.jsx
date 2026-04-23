import {FaBehance, FaGithub, FaInstagram, FaLinkedin, FaRegFile } from "react-icons/fa";

export default function About () {
    return (
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
                    <p className="text-md  ">
                        A fresh graduate bachelor of Computer Science. <br/> I have strong interest and passionate with <span className="text-purple-500 font-medium"> UI/UX Design </span>, and also <span className="text-purple-500 font-medium"> Front-End Development </span>. <br/> Experienced for leadership, team management, and can work as a team or individual.
                    </p>
                    <div className="flex gap-1 text-cyan-400 text-sm items-center w-32 mt-3 hover: ">
                        <FaRegFile/>
                        <a href="https://drive.google.com/file/d/1z3QnDgPewth4Xlmfv8FmV45__q6xUBhf/view?usp=sharing" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}