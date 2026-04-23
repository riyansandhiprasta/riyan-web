import Banner from "./components/Banner";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import DesignSection from "./components/DesignSection";
import Technologies from "./components/Thechnologies";
import Footer from "./components/Footer";

export default function Home(){
    return(
        <>
        
        <Banner/>

        {/* <About/> */}

        <ProjectSection/>

        <DesignSection/>

        <Technologies/>        

        <Footer/>

        </>
    )
}