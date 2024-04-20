import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";



export default function Projects(){

    return <div>
         
        <div id = "project" className="bg-zinc-900 text-white flex flex-col items-center">
        
            <div className="mb-2 w-full text-center text-3xl font-bold md:mb-4 font-montserrat">
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