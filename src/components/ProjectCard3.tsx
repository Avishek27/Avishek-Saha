import medium from './images/paytm.png';
import { ArrowUpRight, GithubIcon } from 'lucide-react';


export default function ProjectCard3(){
    return <div className="flex justify-center border-b-2 border-slate-600/50 pt-10 mt-5">
        <div className="p-5 pr-1">
            <img src={medium}/>
        </div>
        <div className="flex flex-col p-5 pl-1 ml-5">
        <div className=" flex justify-between text-2xl font-montserrat font-semibold">
                <div>
                PayWise
                </div>
                <div className='flex pl-5 ml-5'>
                <a href = "https://github.com/Avishek27/PayWise" className="hover:text-blue-500 transition-all"><GithubIcon /></a>
                <a href = "https://musical-centaur-052655.netlify.app/" className="hover:text-green-500 transition-all"><ArrowUpRight /></a>
                </div>
                
            </div>
            <div className="text-sm font-montserrat text-slate-400/50 text-muted-foreground pb-2">
                Banking App
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            PayWise is a banking app which enables user to transfer money to other users. 
            
            </div>
            <div className="text-lg font-montserrat text-slate-400/50">
            Backend involves RESTful APIs and custom token-based authentication for secure access control.
            <br>
            </br>  
            Sessions are used for making transactions for controlling multiple 
            transfer requests <br>
            </br>on same account or in the case of server/database crash.
            <br>
            </br>connection-pooling is used for maintaining postgress requests.
            </div>
            <div className="pt-2 mt-2 font-montserrat flex gap-3 flex-wrap">
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">JavaScript</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Node.js</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Express.js</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Mongoose</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">MongoDB</div>
                <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">JWT</div>
          </div>
        </div>
        
    </div>
}