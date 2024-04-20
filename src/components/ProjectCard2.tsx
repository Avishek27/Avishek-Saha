import medium from './images/portfolio.png';
import { GithubIcon, ArrowUpRight } from 'lucide-react';


export default function ProjectCard2(){
    return <div className="flex justify-center border-b-2 border-slate-600/50 pt-10 mt-5">
        <div className="p-5 pr-1">
            <img src={medium}/>
        </div>
        <div className="flex flex-col p-5 pl-1 ml-5">
        <div className=" flex justify-between text-2xl font-montserrat font-semibold">
                <div>
                Portfolio Website
                </div>
                <div className='flex'>
                <a href = "https://github.com/Avishek27/Blog-App" className="hover:text-blue-500 transition-all"><GithubIcon /></a>
                <a href = "https://blog-app-green-nine.vercel.app" className="hover:text-green-500 transition-all"><ArrowUpRight /></a>
                </div>
                
            </div>
            <div className="text-sm font-montserrat text-slate-400/50 text-muted-foreground pb-2">
                Avishek Saha | Portfolio
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            The goal of this project is to design and develop a personal portfolio website that effectively highlights 
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            my skills, projects, and professional experience.
             </div>
            <div className="pt-2 mt-2 font-montserrat flex gap-3 flex-wrap">
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">JavaScript</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">React.js</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Tailwind CSS</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Framar Motion</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">TypeScript</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Shadcn UI</div>
            </div>
        </div>
        
    </div>
}