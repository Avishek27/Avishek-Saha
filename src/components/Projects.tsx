import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";



export default function Projects(){

    return <div>
         
        <div id = "projects" className="bg-zinc-900 text-white flex flex-col items-center">
        
            <div className="mb-2 w-full text-center text-3xl font-bold md:mb-4 font-montserrat my-8 md:my-12  md:max-w-screen-2xl md:mx-auto md:px-16 scroll-mt-24">
            Projects
            </div>
           <div className="p-5 mt-5">
           <ProjectCard/>
           <ProjectCard2/>
           <ProjectCard3/>
            </div>
            
        </div>
    </div>
}