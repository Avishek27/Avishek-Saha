import { ArrowUpRight, GithubIcon } from 'lucide-react';
import medium from './images/medium4.png';


export default function ProjectCard(){
    return <div className="flex justify-center border-b-2 border-slate-600/50">
        <div className="p-5 pr-1">
            <img src={medium}/>
        </div>
        <div className="flex flex-col p-5 pl-1 ml-5">
            <div className=" flex justify-between text-2xl font-semibold font-montserrat">
                <div>
                Medium
                </div>
                <div className='flex'>
                <a href = "https://github.com/Avishek27/Blog-App" className="hover:text-blue-500 transition-all"><GithubIcon /></a>
                <a href = "https://blog-app-green-nine.vercel.app" className="hover:text-green-500 transition-all"><ArrowUpRight /></a>
                </div>
                
            </div>
            <div className="text-sm font-montserrat text-slate-400/50 text-muted-foreground pb-2">
                Blogging Website
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            Medium is a blogging website which allows user to do CRUD operations on their blogs. 
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            Hono.js library of wrangler is used here for writing backend server 
            which is hosted on cloudflare workers, 
            <br>
            </br>connection-pooling is used for maintaining postgress requests.
            </div>
            <div className="pt-2 mt-2 font-montserrat flex gap-3 flex-wrap">
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">TypeScript</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">React.js</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Hono.js</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Prisma</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">PostgreSQL</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Connection-Pooling</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Custom hooks</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Tailwind CSS</div>
            </div>
        </div>
        
    </div>
}